import { PaperAirplaneIcon } from "@heroicons/react/16/solid"

function NewsLetterButton() {
  return (
   <div className="py-3 px-7 w-[260] bg-rose-700 text-white rounded-full flex justify-left items-center gap-4">
   <div className="">
     <PaperAirplaneIcon className="h-6 w-6 text-white" />
   </div>
   <button className="text-sm font-bold  ">
     Register for Newsletter
   </button>
 </div>
  )
}
export default NewsLetterButton