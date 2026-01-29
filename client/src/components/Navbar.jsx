import { Link, useNavigate } from "react-router-dom";
import { assets } from "./../assets/assets";
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
import { useState } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-16 lg:px-36">
      <Link>
        <img src={assets.logo} alt="logo" className="h-auto w-36" />
      </Link>

      <div
        className={`z-50 flex flex-col items-center gap-8 overflow-hidden border-gray-300/20 bg-black/70 py-3 backdrop-blur transition-[width] duration-300 max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen max-md:justify-center max-md:text-lg max-md:font-medium md:flex-row min-md:rounded-full md:border md:bg-white/10 min-md:px-8 ${isOpen ? "max-md:w-full" : "max-md:w-0"}`}
      >
        <XIcon
          className="absolute top-6 right-6 h-6 w-6 cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Link to="/" onClick={() => (scrollTo(0, 0), setIsOpen(false))}>
          Home
        </Link>
        <Link to="/movies" onClick={() => (scrollTo(0, 0), setIsOpen(false))}>
          Movies
        </Link>
        <Link to="/" onClick={() => (scrollTo(0, 0), setIsOpen(false))}>
          Theaters
        </Link>
        <Link to="/" onClick={() => (scrollTo(0, 0), setIsOpen(false))}>
          Releases
        </Link>
        <Link to="/favorite" onClick={() => (scrollTo(0, 0), setIsOpen(false))}>
          Favorites
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <SearchIcon className="h-8 w-8 cursor-pointer max-md:hidden" />
        {!user ? (
          <button
            className="bg-primary hover:bg-primary-dull cursor-pointer rounded-full px-4 py-1 font-medium transition sm:px-7 sm:py-2"
            onClick={openSignIn}
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      <MenuIcon
        className="h-8 w-8 cursor-pointer max-md:ml-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;
