import create from "@/assets/create.png";
import edit from "@/assets/edit.png";
import remove from "@/assets/delete.png";

export interface HeaderActions {
  src: string;
  alt: string;
  style: string;
  onClick: () => void;
}

export const headerActions: HeaderActions[] = [
  {
    src: create,
    alt: "create",
    style: "h-8 w-8 mr-3 cursor-pointer",
    onClick: () => console.log("create"),
  },
  {
    src: edit,
    alt: "edit",
    style: "h-9 w-9 mr-2 mt-1 cursor-pointer",
    onClick: () => console.log("edit"),
  },
  {
    src: remove,
    alt: "remove",
    style: "h-10 w-10 mr-4 cursor-pointer",
    onClick: () => console.log("remove"),
  },
];
