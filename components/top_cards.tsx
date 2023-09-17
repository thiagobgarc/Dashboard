export const TopCards = () => {
    return (
        <div className="grid lg:grid-cols-5 gap-4 p-4 ">
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-black text-2xl font-bold">$7486</p>
                    <p className="text-gray-600">DailyRevenue</p>
                </div>
                <span className="text-black bg-green-300 flex justify-center items-center p-2 rounded-lg">+18%</span>
            </div>
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-black text-2xl font-bold">$1,745,323</p>
                    <p className="text-gray-600">YTD Revenue</p>
                </div>
                <span className="text-black bg-green-300 flex justify-center items-center p-2 rounded-lg">+3%</span>
            </div>
            <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-black text-2xl font-bold">11,000</p>
                    <p className="text-gray-600">Customers</p>
                </div>
                <span className="text-black bg-green-300 flex justify-center items-center p-2 rounded-lg">+7%</span>
            </div>
        </div>
    )
}