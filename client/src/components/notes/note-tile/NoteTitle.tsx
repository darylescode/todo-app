import { useContext } from "react";

import { AppHeaderContext } from "@/context";
import { generateHeaderComponents } from "@/shared/utils/generateHeaderComponents";

import { CardHeader } from "@/shared/components/ui/card";
import NoteTitleText from "./NoteTitleText";
import NoteTileInput from "./NoteTitleInput";

function NoteTitle({ id, text }: { id: string, text: string }) {
  const { headerTriggered } = useContext(AppHeaderContext);

  const components = generateHeaderComponents({
    createComponent: <NoteTitleText text={text} />,
    editComponent: <NoteTileInput id={id} text={text} />,
  });

  return (
    <CardHeader className="space-between flex flex-row border-b-2 border-secondary relative flex-1">
      {components[headerTriggered]}
    </CardHeader>
  );
}

export default NoteTitle;
