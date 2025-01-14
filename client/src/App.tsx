import { Route, Routes } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import NoteList from "@/components/notes/NoteList";
import NotePreview from "@/components/notes/NotePreview";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={<NoteList />}
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
