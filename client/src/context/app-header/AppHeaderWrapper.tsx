import { PropsWithChildren } from "react";
import AppHeaderProvider from './header/AppHeaderProvider'

function AppHeaderWrapper({ children }: PropsWithChildren) {
  return (
    <AppHeaderProvider>
      {children}
    </AppHeaderProvider>
  )
}

export default AppHeaderWrapper
