interface LargeHotelCardProps {
  className?: string;
}

function LargeHotelCard(props: LargeHotelCardProps) {
  return (
    <div>
      <div
        className={`${props.className} rounded-xl max-w-full min-w-0 aspect-[177/100]`}
      >
        {/* Hotel Image */}
      </div>
    </div>
  );
}
export default LargeHotelCard;
