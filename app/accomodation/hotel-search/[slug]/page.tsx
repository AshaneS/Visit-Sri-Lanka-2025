"use client";

import FilterSideBar from "@/components/FilterSideBar";
import HotelCard from "@/components/HotelCard";
import hotelsData from "@/data/hotels.json";

import { useEffect, useState } from "react";

function Accomodation() {
  // state for sidebar//

  const [selectedFilter, setSelectedFilter] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //state for the filter button

  const [isFilterApplied, setIsFilterApplied] = useState(false);

  // toggle side bar fucntion//

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("side bar open", !isSidebarOpen);
  };

  // selected filters will log only after it updates by using useEffect//
  useEffect(() => {
    console.log("isFilterApplied", isFilterApplied);
  }, [selectedFilter, isFilterApplied]);

  const filteredHotels = isFilterApplied
    ? hotelsData.filter((hotel) => {
        const isCityMatch = selectedFilter.includes(hotel.location);
        const isCategoryMatch = selectedFilter.includes(hotel.category);
        // Only include the hotel if BOTH city AND category match
        return isCityMatch && isCategoryMatch;
      })
    : hotelsData;
  console.log("selectedFilter", selectedFilter);
  console.log("filtered hotels", filteredHotels);
  //Main Accomation page//

  return (
    <div className="text-center">
      <main className="max-w-7xl mx-auto px-8">
        <section className="flex flex-col gap-2 pt-6">
          <div className="text-5xl bg-red-300 text-left">
            {/* Hotels title */}
            <h1>Hotels</h1>
          </div>

          {/* filter and results */}
          <div className="flex flex-row justify-between items-center gap-3 py-10">
            <h1>Results</h1>
            <div
              className="bg-red-300 px-12 py-4 rounded-full cursor-pointer"
              onClick={toggleSidebar}
            >
              <button>Filter</button>
            </div>
          </div>

          {/* filer sidebar Component */}

          {isSidebarOpen && (
            <FilterSideBar
              toggleSidebar={toggleSidebar}
              hotelsData={hotelsData}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              isFilterApplied={isFilterApplied}
              setIsFilterApplied={setIsFilterApplied}
            />
          )}

          {/* hotel cards */}
          <div className="grid grid-cols-1 gap-8">
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
          <div>{/* pagination */}</div>
        </section>
      </main>
    </div>
  );
}

export default Accomodation;
