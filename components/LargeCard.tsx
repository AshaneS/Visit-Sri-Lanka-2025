
function LargeCard(props) {
  return (
    <div className={`${props.className} rounded-xl`}>
      <div className="min-h-0 min-w-0 aspect-[212/100]"></div>
    </div>
  );
}
export default LargeCard;
