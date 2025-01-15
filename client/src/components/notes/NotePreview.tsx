import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

import { Card, CardContent } from "@/shared/components/ui/card";
import { todoData } from "@/shared/constants/data/todoData";
import { Button } from "@/shared/components/ui/button";
import NoteTitle from "./note-tile/NoteTitle";

function NotePreview() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const params = useParams();
  const id = params?.id || "";
  const [todo, setTodo] = useState([...todoData]);

  const handleToggleComplete = (uuid: any) => {
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.uuid === uuid ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <Card className="m-4 sticky top-24 flex-[0.5] h-[80vh] overflow-y-auto flex flex-col">
      <NoteTitle text={`Note ${id}`} />
      <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap h-full">
        {todo.map((item) => (
          <div
            key={item.uuid}
            className="flex items-center mb-3"
          >
            <input
              type="checkbox"
              id={`todo-${item.uuid}`}
              checked={item.completed}
              onChange={() => handleToggleComplete(item.uuid)}
              className="mr-2"
            />
            <label
              htmlFor={`todo-${item.uuid}`}
              className={
                item.completed ? "line-through text-gray-500" : "text-black"
              }
            >
              {item.text}
            </label>
          </div>
        ))}
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
