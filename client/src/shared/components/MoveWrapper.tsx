import React, { CSSProperties } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function MoveWrapper(props: {
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
  const {
    attributes,
    isDragging,
    transform,
    transition,
    listeners,
    setNodeRef,
  } = useSortable({
    id: props.id,
  });

  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : 1,
    transform: CSS.Translate.toString(transform),
    transition,
  };


  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
}

export default MoveWrapper;
