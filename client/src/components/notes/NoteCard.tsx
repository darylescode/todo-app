import { useNavigate } from "react-router";

import NoteTitle from "./NoteTitle";
import { Card } from "@/shared/components/ui/card";
import MoveWrapper from "@/shared/components/MoveWrapper";

interface NoteCardProps {
  id: string;
  className?: string;
}

function NoteCard({ id, className }: NoteCardProps) {
  const navigate = useNavigate();

  return (
    <MoveWrapper id={id}>
      <button
        onClick={() => navigate(`/${id}`)}
        className={`w-full h-full ${className}`}
      >
        <Card>
          <NoteTitle text={`Note ${id}`} />
        </Card>
      </button>
    </MoveWrapper>
  );
}

export default NoteCard;
