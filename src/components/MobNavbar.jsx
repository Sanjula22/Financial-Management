import { BsSearch } from "react-icons/bs";
import { IoIosMenu } from "react-icons/Io";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";
import React from "react";

const MobNavbar = () => {
    return (
        <div className="sticky top-0 bg-white z-10">
            <div className="container p-8 lg:hidden">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6"></div>
                    <IoIosMenu size={30} />
                    <BsSearch size={24} />
                </div>
                    <h1 className="text-4xl">Logo</h1>
                    <div className="flex gap-4 text-[30px]">
                        <AiOutlineUser />
                    </div> 
                    <div className="relative cursor-pointer">
                        <AiOutlineShoppingCart />
                        <CartCountBadge size="W-[20px] h-[20px]" />
                    </div>
            </div>
        </div>
    )
}

export default MobNavbar;