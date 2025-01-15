import { AppHeaderProvider } from "@/context";

import TodoWrapper from "@/context/todo/TodoWrapper";
import ModalProviderWrapper from "@/context/modals/ModalProviderWrapper";

import Contents from "./Contents";

function MainLayout() {
  return (
    <TodoWrapper>
      <AppHeaderProvider>
        <ModalProviderWrapper>
          <Contents />
        </ModalProviderWrapper>
      </AppHeaderProvider>
    </TodoWrapper>
  );
}

export default MainLayout;
