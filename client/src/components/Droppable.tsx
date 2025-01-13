import { useDroppable } from "@dnd-kit/core";

function Droppable({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="border-2 border-dashed border-gray-400 p-4 m-4"
      style={{
        backgroundColor: isOver ? "lightgreen" : "white",
      }}
    >
      {children}
    </div>
  );
}

export default Droppable;
