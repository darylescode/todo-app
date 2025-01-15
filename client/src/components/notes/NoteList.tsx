import NoteCard from "./note-card/NoteCard";

interface INoteList {
  items: any[],
  activeId: any;
}

function NoteList({ items, activeId }: INoteList) {
  return (
    <div className="p-4 space-y-4 flex-1">
      {items.map((id) => (
        <NoteCard
          key={id}
          id={id}
          className={activeId === id ? "opacity-20" : ""}
        />
      ))}
    </div>
  );
}

export default NoteList;
