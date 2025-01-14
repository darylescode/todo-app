import ModalProviderWrapper from "@/context/modals/ModalProviderWrapper";

import Contents from "./Contents";

function MainLayout() {
  return (
    <ModalProviderWrapper>
      <Contents />
    </ModalProviderWrapper>
  );
}

export default MainLayout;
