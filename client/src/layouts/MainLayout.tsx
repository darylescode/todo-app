import Header from "./Header";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
