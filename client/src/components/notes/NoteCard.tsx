import { useContext } from "react";
import { useNavigate } from "react-router";

import { AppHeaderContext } from "@/context";

import NoteTitle from "./NoteTitle";
import { Card } from "@/shared/components/ui/card";
import MoveWrapper from "@/shared/components/MoveWrapper";

interface NoteCardProps {
  id: string;
  className?: string;
}

function NoteCard({ id, className }: NoteCardProps) {
  const navigate = useNavigate();
  const { isHeaderTriggered } = useContext(AppHeaderContext);

  return (
    <MoveWrapper id={id}>
      {!isHeaderTriggered ? (
        <button
          onClick={() => navigate(`/${id}`)}
          className={`w-full h-full ${className}`}
        >
          <Card>
            <NoteTitle text={`Note ${id}`} />
          </Card>
        </button>
      ) : (
        <Card>
          <NoteTitle text={`Note ${id}`} />
        </Card>
      )}
    </MoveWrapper>
  );
}

export default NoteCard;
