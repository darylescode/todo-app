import MoveWrapper from "@/shared/components/MoveWrapper";

interface TodoCardProps {
  item: any;
  onClick: (uuid: any) => void;
}

function TodoCard({ item, onClick }: TodoCardProps) {
  return (
    <MoveWrapper id={item.uuid}>
      <div
        key={item.uuid}
        className="flex items-center mb-3"
      >
        <input
          type="checkbox"
          id={`todo-${item.uuid}`}
          checked={item.completed}
          onChange={() => onClick(item.uuid)}
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
    </MoveWrapper>
  );
}

export default TodoCard;
