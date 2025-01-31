"use client";

interface HotelCardprops {
  toggleSidebar: () => void;
  hotelsData: {
    id: number;
    name: string;
    location: string;
    category: string;
    price: number;
    image: string;
  }[];
  selectedFilter: string[];
  setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>;
  // event: React.ChangeEvent<HTMLInputElement>;
  isFilterApplied: boolean;
  setIsFilterApplied: React.Dispatch<React.SetStateAction<boolean>>;

  // Add other properties if needed
}

function FilterSideBar({
  toggleSidebar,
  hotelsData,
  selectedFilter,
  setSelectedFilter,
  isFilterApplied,
  setIsFilterApplied,
}: HotelCardprops) {
  const locations = [...new Set(hotelsData.map((hotel) => hotel.location))];
  const categories = [...new Set(hotelsData.map((hotel) => hotel.category))];

  if (isFilterApplied) {
    console.log("Filters are applied!");
  }

  const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    // Reset the filter application state to false when a new checkbox is selected
    setIsFilterApplied(false);

    // console.log("isChecked", checked + " " + "value is", value);

    //if checked then add to selected filter
    if (checked) {
      setSelectedFilter([...selectedFilter, value]);
    } else {
      setSelectedFilter(selectedFilter.filter((item) => item !== value));
    }
  };
  // if (isFilterApplied) {
  //   toggleSidebar();
  //   setIsFilterApplied(false);
  // }

  return (
    <div className="flex flex-col gap-14 bg-white p-4 rounded-lg border border-red-300">
      <div className="flex justify-between items-center">
        <div className="bg-black text-white px-6 py-3 cursor-pointer border p-3 rounded-full hover:bg-red-600 active:scale-90">
          <button>Reset Filters</button>
        </div>

        <div
          onClick={() => {
            setIsFilterApplied(true);
            toggleSidebar();
          }}
          className="bg-black text-white px-8 py-3 rounded-full cursor-pointer hover:bg-red-600 active:scale-90"
        >
          <button>Show</button>
        </div>
      </div>

      {/* Locations */}

      <div className="flex-col flex gap-2 items-start">
        <h3 className="mb-4 font-bold">City</h3>

        {locations.map((location) => (
          <label key={location} className="flex gap-2 items-center">
            <input
              onChange={handleCheckboxClick}
              checked={selectedFilter.includes(location)}
              type="checkbox"
              value={location}
              className="w-7 h-7 appearance-none border-[1px] border-black rounded-md checked:bg-red-500 checked:border-red-500"
            />
            {location}
          </label>
        ))}
      </div>

      {/* Categories */}

      <div className="flex-col flex gap-2 items-start">
        <h3 className="mb-4 font-bold">Category</h3>

        {categories.map((category) => (
          <label key={category} className="flex gap-2 items-center">
            <input
              onChange={handleCheckboxClick}
              checked={selectedFilter.includes(category)}
              type="checkbox"
              value={category}
              className="w-7 h-7 appearance-none border-[1px] border-black rounded-md checked:bg-red-500 checked:border-red-500"
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
}
export default FilterSideBar;
