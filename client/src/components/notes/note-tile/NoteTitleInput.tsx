import { TodoContext } from "@/context";
import { useContext } from "react";

function NoteTitleInput({ id, text }: { id: string; text: string }) {
  const { setTodo } = useContext(TodoContext);
  return (
    <input
      value={text}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo((prevTodos) =>
          prevTodos.map((item) => {
            if (item.uuid === id) {
              return {
                ...item,
                title: event.target.value,
                updated_at: new Date(),
              };
            }
            return item;
          })
        );
      }}
      className="text-lg font-semibold outline outline-gray-400 outline-1 w-full"
    />
  );
}

export default NoteTitleInput;
