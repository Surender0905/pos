import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
    return (
        <div className="fixed bottom-0   left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
            <button className="flex items-center justify-around text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]">
                <FaHome className="inline mr-2" title="Home" size={20} />{" "}
                <p>Home</p>
            </button>
            <button className="flex items-center justify-around text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]">
                <MdOutlineReorder
                    className="inline mr-2"
                    title="Orders"
                    size={30}
                />
                <p>Orders</p>
            </button>
            <button className="flex items-center justify-around text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]">
                <MdTableBar className="inline  mr-2" title="Tables" size={20} />{" "}
                <p>Tables</p>
            </button>
            <button className="flex items-center justify-around text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]">
                <CiCircleMore className="inline  mr-2" title="More" size={20} />
                <p>More</p>
            </button>

            <button className="absolute bottom-4 bg-[#f6b100] test-[#f5f5f5] rounded-full p-3 flex items-center">
                <BiSolidDish title="Home" size={30} />
            </button>
        </div>
    );
};

export default BottomNav;
