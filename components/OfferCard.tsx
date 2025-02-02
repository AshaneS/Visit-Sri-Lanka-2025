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
      <div className="flex flex-col gap-1 h-full items-center">
        <div className="relative rounded-xl overflow-hidden w-full min-w-0 aspect-[12.6/9.5] hover:scale-95 transition duration-500 ease-[cubic-bezier(.11,.74,.35,.92)]">
          <Image
            src={offer.image_url}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={offer.location}
            style={{ objectFit: "cover" }}
            className="hover:scale-110 transition duration-500 ease-[cubic-bezier(.11,.74,.35,.92)]"
          />
        </div>

        <div className="">
          <div className="flex flex-col pt-3 text-left gap-1">
            <p className="line-clamp-3 text-sm font-light text-gray-600">{offer.location}</p>
            <p className="line-clamp-3 text-lg font-semibold overflow-hidden">
              {offer.title}
            </p>
            <p className="line-clamp-3 text-sm font-medium text-rose-700">{offer.description}</p>
            <p className="line-clamp-3 text-base font-bold text-rose-600 pt-2 ">{offer.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OfferCard;
