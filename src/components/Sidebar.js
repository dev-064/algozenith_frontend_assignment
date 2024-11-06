import React from 'react';

const menuItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/73dccc323baaca345322049f8e00ceefa7fb9320a4a3eeed7916e28f7eef3671?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee", label: "Dashboard" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5795a3926d7184d8a404258507e96cdd30a75c8951656545d61af574989066b7?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee", label: "Learn" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a98d97b508543a0d3c9e42a7e50c5f881fe8e93c4f353674e5a19db9ebc018c8?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee", label: "Forums" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef5aedaf345686bada4615c8037772c728d2243008b617be706499663008f630?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee", label: "Upskill", active: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c67b954c7a83e9a7ed37fa9b0cf4b083a64db2b7db46ee5f33c07ffe90c75ca6?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee", label: "Contest" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba69824b8ad78c2b3252c34436cb6a8787c9e28782f2796f90fb6575007c8ad3?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee", label: "Leaderboard" },
];

function Sidebar() {
    return (
        <nav className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full pt-4">
            <div className="flex flex-col mt-1.5 gap-3 w-full text-lg tracking-tighter leading-loose text-black whitespace-nowrap max-md:mt-10">
                <div className="flex flex-col items-start pl-4 w-full gap-4">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8d27be9155bebee191899820b92da3c80ee06c62d03c9c03a25b3b833879b9e?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee" alt="" className="object-contain self-stretch w-full aspect-[6.29]" />
                    {menuItems.map((item, index) => (
                        <div key={index} className={`flex gap-5 mt-${index === 0 ? '14' : '11'} ${item.active ? 'px-5 py-3 font-bold bg-cyan-100 rounded-lg' : ''} text-blue-950 max-md:mt-10`}>
                            <img loading="lazy" src={item.icon} alt="" className="object-contain shrink-0 my-auto w-[30px] h-[30px] aspect-square" />
                            <div>{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;