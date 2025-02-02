import Image from "next/image";

interface HotelCardProps {
  hotel: {
    id: number;
    user_id: number;
    name: string;
    category: string;
    location: string;
    rating: number;
    price_per_night: number;
    amenities: string[];
    description: string;
    image_url: string;
  };
}

function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="grid grid-cols-2 h-full max-w-full min-w-0 aspect-[261/100]">
      <div className="relative rounded-xl overflow-hidden hover:scale-95 transition duration-500 ease-in-out">
        {/* Hotelcard Image */}
        <Image
          src={hotel.image_url}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={hotel.name}
          style={{ objectFit: "cover" }}
          className="hover:scale-110 transition duration-500 ease-in-out"
        />
      </div>
      {/* Hotelcard Info */}
      <div className="over">
        <div className="flex flex-col p-2 text-left">
          <p className="text-sm font-light text-gray-600">{hotel.location}</p>
          <p className="text-base font-semibold mt-2">{hotel.name}</p>
          <p className="text-sm font-medium ">{hotel.rating}</p>
          <p className="text-sm font-medium text-rose-600 ">{hotel.category}</p>
        </div>
      </div>
    </div>
  );
}
export default HotelCard;
