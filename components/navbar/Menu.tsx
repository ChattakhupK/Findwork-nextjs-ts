import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";

const Menu = () => {
  return (
    <div className="flex gap-5">
      <DarkMode />
      <DropdownListMenu />
    </div>
  );
};

export default Menu;
