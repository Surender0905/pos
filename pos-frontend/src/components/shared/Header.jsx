import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
            {/*Logo*/}
            <div className=" flex items-center gap-2">
                <img className="w-8 h-8" src={logo} alt="logo" />
                <h1 className="text-lg font-semibold text-[#f5f5f5]">
                    Ram ji Chaiwale
                </h1>
            </div>
            {/*search */}
            <div className="flex items-center gap-4  bg-[#1f1f1f] rounded-[20px] px-5 py-2">
                <FaSearch className="text-[#f5f5f5]" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#333] text-[#f5f5f5] px-4 py-2 rounded-md"
                />
            </div>

            {/*user */}
            <div className="flex items-center gap-4">
                <div className=" bg-[#1f1f1f] rounded-[20px]  p-3 cursor-pointer">
                    <FaBell className="text-[#f5f5f5] text-2xl" />
                </div>
                {/* <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                    alt="user"
                /> */}
                <div className="flex items-center gap-2">
                    <FaUserCircle className="text-[#f5f5f5] text-2xl" />
                    <div className="flex flex-col items-start">
                        <p className="text-[#f5f5f5] text-sm font-semibold">
                            Admin
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
