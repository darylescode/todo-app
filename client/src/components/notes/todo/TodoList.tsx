import { useCallback, useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import useDndSensors from "@/hooks/useDndSensor";
import { taskData } from "@/shared/constants/data/taskData";

import TodoCard from "./TodoCard";
import { CardContent } from "@/shared/components/ui/card";

function TodoList() {
  const sensors = useDndSensors({ delay: 250, tolerance: 5 });
  const [activeId, setActiveId] = useState<string | null>(null);
  const [todo, setTodo] = useState(
    taskData.map((item) => ({ ...item, uuid: String(item.uuid) }))
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setTodo((prev) => {
      const oldIndex = prev.findIndex((item) => item.uuid === active.id);
      const newIndex = prev.findIndex((item) => item.uuid === over.id);
      const updated = [...prev];
      const [moved] = updated.splice(oldIndex, 1);
      updated.splice(newIndex, 0, moved);
      return updated;
    });
  };

  const handleToggleComplete = useCallback((uuid: string) => {
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.uuid === uuid ? { ...item, completed: !item.completed } : item
      )
    );
  }, []);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={todo.map((item) => item.uuid)}
        strategy={verticalListSortingStrategy}
      >
        <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap h-full">
          {todo.map((item) => (
            <TodoCard
              key={item.uuid}
              item={item}
              onClick={handleToggleComplete}
            />
          ))}
        </CardContent>
      </SortableContext>

      <DragOverlay>
        {activeId ? (
          <TodoCard
            item={todo.find((t) => t.uuid === activeId)}
            onClick={handleToggleComplete}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default TodoList;
