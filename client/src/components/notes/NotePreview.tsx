import { useContext } from "react";
import { TodoContext } from "@/context";

import NoteTitle from "./note-tile/NoteTitle";
import TodoList from "./todo/TodoList";
import { Card, CardContent } from "@/shared/components/ui/card";

function NotePreview() {
  const { selectedTodo } = useContext(TodoContext);

  return (
    <Card className="xxs:flex m-4 sticky top-24 flex-[0.5] h-[80vh] overflow-y-auto flex-col md:hidden">
      <NoteTitle text={selectedTodo?.title || ""} />
      <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap h-full">
        <TodoList />
      </CardContent>
    </Card>
  );
}

export default NotePreview;
