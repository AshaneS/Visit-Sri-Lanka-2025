import Image from "next/image";

interface OfferCardProps {
  offer: {
    id: number;
    title: string;
    location: string;
    rating: number;
    price: string;
    description: string;
    image_url: string;
    validity: string;
    details: string;
  };
}

function OfferCard({ offer }: OfferCardProps) {
  return (
    // <div className="grid grid-cols-2 h-full max-w-full min-w-0 aspect-[261/100]">
    //   <div className="relative rounded-xl overflow-hidden hover:scale-95 transition duration-500 ease-in-out">
    //     {/* Hotelcard Image */}
    //     <Image
    //       src={offer.image_url}
    //       fill
    //       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //       alt={offer.location}
    //       style={{ objectFit: "cover" }}
    //       className="hover:scale-110 transition duration-500 ease-in-out"
    //     />
    //   </div>
    //   {/* Hotelcard Info */}
    //   <div className="">
    //     <div className="flex flex-col p-2 text-left">
    //       <p className="text-sm font-light text-gray-600">{offer.location}</p>
    //       <p className="text-sm font-semibold mt-2">{offer.title}</p>
    //       <p className="text-sm font-medium ">{offer.description}</p>
    //       <p className="text-sm font-medium text-red-500 ">{offer.price}</p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="flex flex-col gap-1 h-full">
        <div className="relative rounded-xl overflow-hidden h-full w-full min-w-0 aspect-[12.5/10]">
          <Image
            src={offer.image_url}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={offer.location}
            style={{ objectFit: "cover" }}
            className="hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>

        <div className="border">
          <div className="flex flex-col text-left gap-1">
            <p className="text-sm font-light text-gray-600">{offer.location}</p>
            <p className="text-base font-semibold">{offer.title}</p>
            <p className="text-sm font-normal ">{offer.description.substring(0,80)}...</p>
            <p className="text-sm font-medium text-red-500 ">{offer.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OfferCard;
