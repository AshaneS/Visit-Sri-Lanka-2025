import Link from "next/link";

function Navbar() {
  return (
    <header className="z-50 top-0 grid-cols-3 bg-white p-12 text-black text-lg font-bold shadow-sm">
      {/* {Left} */}
      <div className="hidden md:flex items-center justify-start">
        <div className="flex items-center">
          {/* <h1 className="font-bold text-2xl text-blue-600">Visit Sri Lanka</h1> */}
        </div>
        {/* {Middle} */}
        <div className="flex justify-center items-center flex-grow gap-6">
          <div className="relative group">
            {/* Destinations link */}
            <Link className="mx-3" href="/destinations">
              Destinations
            </Link>

            {/* Dropdown menu with smooth transitions */}
            <div className="absolute left-0 w-48 bg-white shadow-md mt-2 z-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 transition-all duration-500 ease-in-out">
              <div className="p-4">
                <Link className="block py-2" href="/destinations/colombo">
                  Colombo
                </Link>
                <Link className="block py-2" href="/destinations/galle">
                  Galle
                </Link>
                <Link className="block py-2" href="/destinations/ella">
                  Ella
                </Link>
              </div>
            </div>
          </div>

          <Link className="mx-3" href="/accomodation/hotel-search/-">
            Accommodation
          </Link>
        </div>
      </div>

      {/* {Right} */}
      <div className="flex justify-end items-center">
        <h1></h1>
      </div>
    </header>
  );
}
export default Navbar;
