import Image from "next/image";
import Link from "next/link";

function SquareCard({
  className,
  img,
  city,
}: {
  className?: string;
  img: string;
  city: string;
}) {
  if (!city) {
    console.error("City is undefined or missing");
  }

  return (
    <div>
      <div className={`${className} h-full flex flex-col gap-1`}>
        <Link href={`/destinations/${city}`}>
          <div className="relative rounded-xl overflow-hidden w-full min-w-0 aspect-square hover:scale-95 transition duration-500 ease-[cubic-bezier(.11,.74,.35,.92)]">
            <Image
              src={img}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={city}
              style={{ objectFit: "cover" }}
              className="hover:scale-110 transition duration-500 ease-[cubic-bezier(.11,.74,.35,.92)]"
            />

            <div>
              <div className=" absolute bottom-0 left-0 right-0 p-4 text-white font-bold ">
                <h1>{city}</h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default SquareCard;
