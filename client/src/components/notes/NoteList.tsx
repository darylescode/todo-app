import { ITodo } from "@/types/todo";
import NoteCard from "./note-card/NoteCard";

interface INoteList {
  items: ITodo[];
  activeId: string | null;
}

function NoteList({ items, activeId }: INoteList) {
  return (
    <div className="p-4 space-y-4 flex-1">
      {items.map((item) => (
        <NoteCard
          key={item.uuid}
          todo={item}
          className={activeId === item.uuid ? "opacity-20" : ""}
        />
      ))}
    </div>
  );
}

export default NoteList;
