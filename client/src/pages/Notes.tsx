import { useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import NoteCard from "@/components/notes/note-card/NoteCard";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import NoteList from "@/components/notes/NoteList";
import NotePreview from "@/components/notes/NotePreview";

function Notes() {
  const [items, setItems] = useState(["1", "2", "3", "4", "5"]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
    pointerSensor
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      setItems((oldItems) => {
        const oldIndex = oldItems.indexOf(active.id as string);
        const newIndex = oldItems.indexOf(over.id as string);
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
        items={items}
        strategy={verticalListSortingStrategy}
      >
        <div className="xss:block md:hidden">
          <NoteList
            items={items}
            activeId={activeId}
          />
        </div>
        <div className="xss:hidden md:flex flex-1 overscroll-y-auto">
          <NoteList
            items={items}
            activeId={activeId}
          />
          <NotePreview />
        </div>
      </SortableContext>

      <DragOverlay>{activeId ? <NoteCard id={activeId} /> : null}</DragOverlay>
    </DndContext>
  );
}

export default Notes;
