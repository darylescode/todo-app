import { useContext, useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import useDndSensors from "@/hooks/useDndSensor";
import { TodoContext } from "@/context";

import NoteList from "@/components/notes/NoteList";
import NoteCard from "@/components/notes/note-card/NoteCard";
import NotePreviewSidebar from "@/components/notes/NotePreviewSidebar";

function Notes() {
  const sensors = useDndSensors({ delay: 250, tolerance: 5 });
  const { todo, setTodo } = useContext(TodoContext);

  const [activeId, setActiveId] = useState<string | null>(null);

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      setTodo((oldItems) => {
        const oldIndex = oldItems.findIndex((item) => item.uuid === active.id);
        const newIndex = oldItems.findIndex((item) => item.uuid === over.id);
        return arrayMove(oldItems, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  }

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
        {/* mobile view */}
        <div className="xss:block md:hidden">
          <NoteList
            items={todo}
            activeId={activeId}
          />
        </div>
        {/* desktop view */}
        <div className="xss:hidden md:flex flex-1 overscroll-y-auto">
          <NoteList
            items={todo}
            activeId={activeId}
          />
          <NotePreviewSidebar />
        </div>
      </SortableContext>

      <DragOverlay>
        {activeId ? (
          <NoteCard todo={todo.find((e) => e.uuid === activeId)!} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default Notes;
