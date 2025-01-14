import { Card } from '@/shared/components/ui/card';
import NoteTitle from '../note-tile/NoteTitle';

function NoteCardContent({ id }: { id: any }) {
  return (
    <Card className="w-full h-full flex items-center justify-center">
      <NoteTitle text={`Note ${id}`} />
    </Card>
  );
}

export default NoteCardContent
