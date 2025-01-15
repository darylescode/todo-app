import clsx from "clsx";
import { useContext } from "react";

import { AppHeaderContext } from "@/context";
import { generateHeaderComponents } from "@/shared/utils/generateHeaderComponents";

import MoveWrapper from "@/shared/components/MoveWrapper";
import NoteCardButton from "./NoteCardButton";
import NoteCardContent from "./NoteCardContent";

interface NoteCardProps {
  id: string;
  className?: string;
}

function NoteCard({ id, className }: NoteCardProps) {
  const { headerTriggered } = useContext(AppHeaderContext);

  const components = generateHeaderComponents({
    createComponent: (
      <NoteCardButton
        id={id}
        className={clsx(
          "w-full h-full items-stretch bg-white hover:bg-gray-100",
          className
        )}
      />
    ),
    editComponent: <NoteCardContent id={id} />,
  });

  return <MoveWrapper id={id}>{components[headerTriggered]}</MoveWrapper>;
}

export default NoteCard;
