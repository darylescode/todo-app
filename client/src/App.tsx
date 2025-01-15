import { Route, Routes } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import NotePreview from "@/components/notes/NotePreview";
import Notes from "./pages/Notes";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={<Notes />}
        />
        <Route
          path=":id"
          element={<NotePreview />}
        />
      </Route>
    </Routes>
  );
}

export default App;
