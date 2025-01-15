import clsx from "clsx";
import React from "react";
import { useNavigate } from "react-router";

import { Button } from "@/shared/components/ui/button";
import NoteCardContent from "./NoteCardContent";

interface INoteCardButton {
  id: string;
  title: string;
  className?: string;
}

function NoteCardButton({ id, title, className="" }: INoteCardButton) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Button
        onClick={() => navigate(`/${id}`)}
        className={clsx("xxs:flex md:hidden", className)}
      >
        <NoteCardContent title={title} />
      </Button>

      <Button
        onClick={() => console.log("desktop onclick")}
        className={clsx("xxs:hidden md:flex", className)}
      >
        <NoteCardContent title={title} />
      </Button>
    </React.Fragment>
  );
}

export default NoteCardButton;
