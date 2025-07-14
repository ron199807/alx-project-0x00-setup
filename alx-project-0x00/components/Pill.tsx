import { PillProps } from "@/interfaces/index";

const Pill: React.FC<PillProps> = ({ title }) => {
    return (
        <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
            <p className=" text-sm text-gray-800 ">{title}</p>
        </div>
    )
}

export default Pill;