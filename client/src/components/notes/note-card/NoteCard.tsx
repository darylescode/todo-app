import clsx from "clsx";
import { useContext } from "react";

import { AppHeaderContext } from "@/context";
import { generateHeaderComponents } from "@/shared/utils/generateHeaderComponents";

import MoveWrapper from "@/shared/components/MoveWrapper";
import NoteCardButton from "./NoteCardButton";
import NoteCardContent from "./NoteCardContent";
import { ITodo } from "@/types/todo";

interface NoteCardProps {
  todo: ITodo;
  className?: string;
}

function NoteCard({ todo, className }: NoteCardProps) {
  const { headerTriggered } = useContext(AppHeaderContext);

  const components = generateHeaderComponents({
    createComponent: (
      <NoteCardButton
        id={todo.uuid}
        title={todo.title}
        className={clsx(
          "w-full h-full items-stretch bg-white hover:bg-gray-100",
          className
        )}
      />
    ),
    editComponent: (
      <NoteCardContent
        title={todo.title}
      />
    ),
  });

  return (
    <MoveWrapper id={todo.uuid}>{components[headerTriggered]}</MoveWrapper>
  );
}

export default NoteCard;
