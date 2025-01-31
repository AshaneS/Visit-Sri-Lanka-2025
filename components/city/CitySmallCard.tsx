interface CitySmallCardProps {
  className?: string;
  text: React.ReactNode;
}

function CitySmallCard(props: CitySmallCardProps) {
  return (
    <div className={`${props.className} rounded-xl hover:scale-95 transition duration-[1.2s] ease-[cubic-bezier(0.11, 0.46, 0.45, 0.94)]`}>
      <div className=" relative min-h-0 aspect-square min-w-0 ">
       {props.text}
      </div>
    </div>
  );
}
export default CitySmallCard;
