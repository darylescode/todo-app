import ModalProviderWrapper from "@/context/modals/ModalProviderWrapper";

import Contents from "./Contents";
import { AppHeaderProvider } from "@/context";

function MainLayout() {
  return (
    <AppHeaderProvider>
      <ModalProviderWrapper>
        <Contents />
      </ModalProviderWrapper>
    </AppHeaderProvider>
  );
}

export default MainLayout;
