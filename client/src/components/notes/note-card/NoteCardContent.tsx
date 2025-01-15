import { Card } from "@/shared/components/ui/card";
import NoteTitle from "../note-tile/NoteTitle";

function NoteCardContent({ title }: { title: string }) {
  return (
    <Card className="w-full h-full flex items-center justify-center">
      <NoteTitle text={title} />
    </Card>
  );
}

export default NoteCardContent;
