import React from "react";
import { useDraggable } from "@dnd-kit/core";

function Draggable(props: {
  id: any;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
}

export default Draggable;
