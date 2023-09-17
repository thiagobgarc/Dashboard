import Link from "next/link";
import React from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi"

export const SideBar = ({children}: any) => {
    return (
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href="/">
                        <div className="bg-blue-500 rounded-lg p-3 inline-block">
                            <RxSketchLogo size={20} />
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-400 w-full p-2"></span>
                    <Link href={"/customers"}>
                        <div className="bg-gray-300 cursor-pointer my-4 hover:gray-400 rounded-lg p-3 inline-block text-black">
                            <RxDashboard size={20} />
                        </div>
                    </Link>
                    <Link href="/customers">
                        <div className="bg-gray-300 cursor-pointer my-4 hover:gray-400 rounded-lg p-3 inline-block text-black">
                            <RxPerson size={20} />
                        </div>
                    </Link>
                    <Link href="/orders">
                        <div className="bg-gray-300 cursor-pointer my-4 hover:gray-400 rounded-lg p-3 inline-block text-black">
                            <HiOutlineShoppingCart size={20} />
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="bg-gray-300 cursor-pointer my-4 hover:gray-400 rounded-lg p-3 inline-block text-black">
                            <FiSettings size={20} />
                        </div>
                    </Link>
                </div>
            </div>
            <main className="ml-20 w-full">{children}</main>
        </div>
    )
}