import { useContext } from "react";

import { AppHeaderContext, TodoContext } from "@/context";
import { generateHeaderComponents } from "@/shared/utils/generateHeaderComponents";

import { CardHeader } from "@/shared/components/ui/card";
import NoteTitleText from "./NoteTitleText";
import NoteTileInput from "./NoteTitleInput";
import { Button } from "@/shared/components/ui/button";

function NoteTitle({ id, text }: { id: string; text: string }) {
  const { headerTriggered } = useContext(AppHeaderContext);
  const { setTodo } = useContext(TodoContext);

  const deleteHandler = () => {
    setTodo((prevTodos) => prevTodos.filter((item) => item.uuid !== id));
  };

  const components = generateHeaderComponents({
    createComponent: <NoteTitleText text={text} />,
    editComponent: (
      <NoteTileInput
        id={id}
        text={text}
      />
    ),
    removeComponent: (
      <div className="flex flex-1 items-center">
        <NoteTitleText text={text} />
        <Button
          onClick={deleteHandler}
          className="ml-auto"
          variant="destructive"
        >
          <h2>Delete</h2>
        </Button>
      </div>
    ),
  });

  return (
    <CardHeader className="space-between flex flex-row border-b-2 border-secondary relative flex-1">
      {components[headerTriggered]}
    </CardHeader>
  );
}

export default NoteTitle;
