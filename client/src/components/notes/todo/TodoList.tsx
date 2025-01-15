import { useCallback, useContext, useEffect, useState } from "react";
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

import { TodoContext } from "@/context";
import useDndSensors from "@/hooks/useDndSensor";

import { ITask } from "@/types/task";
import { tasksData } from "@/shared/constants/data/taskData";

import TodoCard from "./TodoCard";
import { CardContent } from "@/shared/components/ui/card";

function TodoList({ id }: { id?: string }) {
  const sensors = useDndSensors({ delay: 250, tolerance: 5 });
  const { selectedTodo } = useContext(TodoContext);

  const [activeId, setActiveId] = useState<string | null>(null);
  const [todo, setTodo] = useState<ITask[]>([]);

  useEffect(() => {
    const taskList = tasksData.filter(
      (e) => e.todoUuid === selectedTodo?.uuid || e.todoUuid === id
    );

    setTodo(taskList);
  }, [selectedTodo, id]);

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
      prevTodo.map((item: ITask) =>
        item.uuid === uuid ? { ...item, status: !item.status } : item
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
