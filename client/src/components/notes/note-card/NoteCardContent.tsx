import { Card } from "@/shared/components/ui/card";
import NoteTitle from "../note-tile/NoteTitle";

function NoteCardContent({ id, title }: { id: string, title: string }) {
  return (
    <Card className="w-full h-full flex items-center justify-center">
      <NoteTitle
        id={id}
        text={title}
      />
    </Card>
  );
}

export default NoteCardContent;
