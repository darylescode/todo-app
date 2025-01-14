import { HeaderTriggered } from "@/context";
import { ReactNode } from "react";

/**
 * A utility function to dynamically generate the components map.
 * @param createComponent The component for the "create" action
 * @param editComponent The component for the "edit" action
 * @param removeComponent The component for the "remove" action
 * @returns A mapping of HeaderTriggered to the corresponding components
 */
interface HeaderComponents {
  createComponent?: ReactNode;
  editComponent?: ReactNode;
  removeComponent?: ReactNode;
}

export function generateHeaderComponents(
  components: HeaderComponents
): Record<HeaderTriggered, ReactNode> {
  const { createComponent, editComponent, removeComponent } = components;
  return {
    [HeaderTriggered.create]: createComponent,
    [HeaderTriggered.edit]: editComponent,
    [HeaderTriggered.remove]: removeComponent,
  };
}
