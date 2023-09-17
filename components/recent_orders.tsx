import { data } from "@/data/data"
import { FaShoppingCart } from "react-icons/fa"

export const RecentOrders = () => {
    return (
        <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
            <h1 className="text-black">Recent Orders</h1>
            <ul>
                {
                    data.map((orders, id) => (
                        <li key={id} className="bg-gray-300 hover:bg-gray-500 rounded-lg my-3 p-2 flex items-center cursor-pointer">
                            <div className="bg-blue-200 rounded-lg p-3">
                                <FaShoppingCart className="text-blue-500"/>
                            </div>
                            <div className="pl-4">
                                <p className="text-black font-bold">${orders.total}</p>
                                <p className="text-gray-600 text-sm">{orders.name.first}</p>
                            </div>
                            <p className="text-gray-600 lg:flex md:hidden absolute right-6 text-sm">{orders.date}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}