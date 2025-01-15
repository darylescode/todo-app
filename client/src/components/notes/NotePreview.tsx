import { useParams } from "react-router";

import { Card, CardContent } from "@/shared/components/ui/card";
import NoteTitle from "./note-tile/NoteTitle";

function NotePreview() {
  const params = useParams();
  const id = params?.id || "";

  return (
    <Card className="m-4 sticky top-24 h-[80vh] overflow-y-auto">
      <NoteTitle text={`Note ${id}`} />
      <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </CardContent>
    </Card>
  );
}

export default NotePreview;
