import Image from "next/image";
import Link from "next/link";

function SquareCard({ className, img, city }: { className?: string; img: string; city: string }) {
  if (!city) {
    console.error("City is undefined or missing");
  }

  return (
    <div className={`${className} h-full flex flex-col gap-1`}>
      <Link href={`/destinations/${city}`}>
        <div className="relative rounded-xl overflow-hidden h-full max-w-full min-w-0 aspect-square hover:scale-95 transition duration-500 ease-in-out">
          <Image
            src={img}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            style={{ objectFit: "cover" }}
            className="hover:scale-110 transition duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold ">
            <h1>{city}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default SquareCard;
