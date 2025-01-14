import clsx from 'clsx';
import { useNavigate } from 'react-router';

import { Button } from '@/shared/components/ui/button';

import NoteCardContent from './NoteCardContent';

interface INoteCardButton {
  id: any,
  className?: string;
}

function NoteCardButton({ id, className }: INoteCardButton) {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(`/${id}`)}
      className={clsx("w-full h-full flex items-stretch bg-white hover:bg-gray-100", className)}
    >
      <NoteCardContent id={id} />
    </Button>
  );
}

export default NoteCardButton
