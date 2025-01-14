import { AppHeaderContext } from "@/context";
import { CardHeader } from "@/shared/components/ui/card";
import { useContext } from "react";

function NoteTitle({ text }: { text: string }) {
  const { isHeaderTriggered } = useContext(AppHeaderContext);

  return (
    <CardHeader className="space-between flex flex-row border-b-2 border-secondary relative">
      {!isHeaderTriggered ? (
        <h2 className="text-lg font-semibold">{text}</h2>
      ) : (
        <input
          value={text}
          className="text-lg font-semibold outline outline-gray-400 outline-1 w-full"
        />
      )}
    </CardHeader>
  );
}

export default NoteTitle;
