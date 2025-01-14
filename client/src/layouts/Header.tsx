import { headerActions } from "@/shared/constants/headerActions";

function Header() {
  return (
    <div className="border-b border-gray-200 py-4 flex space-between justify-between items-center flex-1 ">
      <h1 className="text-2xl font-semibold ml-4">Notes</h1>
      <div className="flex items-center">
        {headerActions.map((operation, index) => (
          <img
            key={index}
            src={operation.src}
            alt={operation.alt}
            className={operation.style}
            onClick={() => operation.onClick()}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
