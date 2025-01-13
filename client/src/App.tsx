import { useState } from "react";
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";

function App() {
  const [items, setItems] = useState(["1", "2", "3", "4", "5"]);
  const [activeId, setActiveId] = useState<string | null>(null);

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const currentActiveId = active.id;
    const overId = over.id;

    if (currentActiveId === overId) return;

    console.log(`Swapping ${currentActiveId} with ${overId}`);

    setItems((prevItems) => {
      const newItems = [...prevItems];
      const currentIndex = newItems.indexOf(currentActiveId as string);
      const overIndex = newItems.indexOf(overId as string);

      newItems.splice(currentIndex, 1);
      newItems.splice(overIndex, 0, currentActiveId as string);

      return newItems;
    });
  }

  function handleDragEnd() {
    setActiveId(null);
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div>
        {items.map((id) => (
          <Droppable
            key={id}
            id={id}
          >
            <Draggable id={id}>
              <p>{`Item ${id}`}</p>
            </Draggable>
          </Droppable>
        ))}
      </div>
      <DragOverlay>
        {activeId ? <p>{`Dragging ${activeId}`}</p> : null}
      </DragOverlay>
    </DndContext>
  );
}

export default App;
