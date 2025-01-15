import { useLocation, useNavigate, useParams } from "react-router";

import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import NoteTitle from "./note-tile/NoteTitle";
import TodoList from "./todo/TodoList";

function NotePreview() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const params = useParams();
  const id = params?.id || "";

  return (
    <Card className="m-4 sticky top-24 flex-[0.5] h-[80vh] overflow-y-auto flex flex-col">
      <NoteTitle text={`Note ${id}`} />
      <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap h-full">
        <TodoList />
      </CardContent>
      {pathname === "/" && (
        <Button
          onClick={() => navigate(`/${id}`)}
          className="xxs:hidden md:flex mt-auto bg-green-400 w-28 text-white my-5 self-center"
        >
          View
        </Button>
      )}
    </Card>
  );
}

export default NotePreview;
