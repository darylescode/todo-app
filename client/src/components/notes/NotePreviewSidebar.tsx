import { useContext } from "react";
import { useNavigate } from "react-router";
import { TodoContext } from "@/context";

import TodoList from "./todo/TodoList";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import ConditionalWrapper from "@/shared/components/ConditionalWrapper";
import NoteTitleText from "./note-tile/NoteTitleText";

function NotePreviewSidebar() {
  const navigate = useNavigate();
  const { selectedTodo } = useContext(TodoContext);

  return (
    <Card className="xxs:hidden md:flex m-4 sticky top-24 flex-[0.5] h-[80vh] overflow-y-auto flex-col">
      <CardHeader className="space-between flex flex-row border-b-2 border-secondary relative flex-1">
        <NoteTitleText text={selectedTodo?.title || ""} />
      </CardHeader>
      <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap h-full">
        <TodoList />
      </CardContent>
      <ConditionalWrapper condition={!!selectedTodo}>
        <Button
          onClick={() => navigate(`/${selectedTodo?.uuid}`)}
          className="xxs:hidden md:flex mt-auto bg-green-400 w-28 text-white my-5 self-center"
        >
          View
        </Button>
      </ConditionalWrapper>
    </Card>
  );
}

export default NotePreviewSidebar;
