
interface LargeCardProps {
  className?: string;
}

function LargeCard({ className }: LargeCardProps) {
  return (
    <div className={`${className} rounded-xl`}>
      <div className="min-h-0 min-w-0 aspect-[212/100]"></div>
    </div>
  );
}
export default LargeCard;
