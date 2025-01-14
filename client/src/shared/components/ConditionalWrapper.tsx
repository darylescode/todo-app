import { PropsWithChildren } from "react";

function ConditionalWrapper({
  condition,
  children,
}: PropsWithChildren<{ condition: boolean }>) {
  return condition ? <>{children}</> : null;
}

export default ConditionalWrapper;
