import { CardHeader } from '../shared/components/ui/card';

function NoteTitle({ text }: { text: string }) {
  return (
    <CardHeader className="space-between flex flex-row border-b-2 border-secondary relative">
      <h2 className="text-lg font-semibold">{text}</h2>
    </CardHeader>
  );
}

export default NoteTitle
