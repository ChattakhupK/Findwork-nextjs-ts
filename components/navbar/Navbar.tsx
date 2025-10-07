import { Suspense } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex my-5 gap-5 items-center justify-between flex-col sm:flex-row">
        {/* logo */}
        <Logo />
        {/* search */}
        <Suspense fallback={<div>Loading...</div>}>
          <Search />
        </Suspense>
        {/* menu & darkmode */}
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
