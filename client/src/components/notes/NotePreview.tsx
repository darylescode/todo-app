import { useContext } from "react";
import { TodoContext } from "@/context";

import NoteTitle from "./note-tile/NoteTitle";
import TodoList from "./todo/TodoList";
import { Card, CardContent } from "@/shared/components/ui/card";
import { useParams } from "react-router";

function NotePreview() {
  const { todo } = useContext(TodoContext);
  const params = useParams();
  const id = params?.id;
  const todoDetails = todo.find((e) => e.uuid === id);

  return (
    <Card className="flex m-4 sticky top-24 flex-[0.5] h-[80vh] overflow-y-auto flex-col">
      <NoteTitle id={todoDetails?.uuid || ""} text={todoDetails?.title || ""} />
      <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap h-full">
        <TodoList id={id} />
      </CardContent>
    </Card>
  );
}

export default NotePreview;
