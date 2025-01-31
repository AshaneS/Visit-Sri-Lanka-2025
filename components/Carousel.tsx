import HotelCard from "@/components/HotelCard";
import hotelsData from "@/data/hotels.json";
import offersData from "@/data/offerData.json";
import OfferCard from "./OfferCard";
import Link from "next/link";

function Carousel() {
  const hotelsToDisplay = hotelsData.slice(0, 2);
  const offersToDisplay = offersData.slice(2, 4);
  return (
    <div className="">
      <div className="text-4xl font-normal tracking-wide py-10 text-left gap-4 flex flex-col ">
        {/* hotels */}
        <div>
          <h1 className="mb-2">Hotels</h1>
          <div className="flex flex-row gap-2 mb-4 justify-start items-center">
            <Link href="/accomodation/hotel-search/-" className="text-base text-red-600 ">
              Show All hotels
            </Link>
            <h1 className="text-sm">here</h1>
          </div>
          {/* hotels */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {hotelsToDisplay.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </div>

        {/* Offers */}
        <div>
          <h1 className="mb-2">Offers</h1>
          <div className="flex flex-row gap-2 mb-4 justify-start items-center">
            <h1 className="text-base text-red-600">Show All Offers</h1>
            <h1 className="text-sm">here</h1>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {offersToDisplay.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={{
                  id: offer.id,
                  title: offer.title,
                  location: offer.location,
                  rating: offer.rating,
                  price: offer.price,
                  description: offer.description,
                  image_url: offer.image_url,
                  validity: "N/A",
                  details: offer.details || "",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
