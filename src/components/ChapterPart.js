import React from 'react';

function ChapterPart({ part, title, duration, difficulty, exercises, completed, content }) {
    return (
        <div className="flex flex-col mt-4 bg-white rounded-2xl max-md:max-w-full">
            <div className="flex overflow-hidden flex-col pt-10 w-full bg-white rounded-2xl max-md:max-w-full">
                <div className="flex flex-wrap justify-between mr-8 ml-8 max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex flex-col">
                        <div className="self-start text-lg tracking-wider leading-loose text-sky-950">
                            PART {part}
                        </div>
                        <h2 className="mt-4 text-2xl font-bold tracking-tighter leading-loose text-black">
                            {title}
                        </h2>
                    </div>
                    <div className="flex gap-4 my-auto text-lg tracking-tighter leading-none text-sky-950 max-md:max-w-full">
                        <div className="flex gap-2 whitespace-nowrap">
                            <img loading="lazy" src={`http://b.io/ext_${21 + (part - 1) * 4}-`} alt="" className="object-contain shrink-0 w-9 aspect-square" />
                            <div className="my-auto basis-auto">{duration}</div>
                        </div>
                        <div className="flex gap-2 whitespace-nowrap">
                            <img loading="lazy" src={`http://b.io/ext_${22 + (part - 1) * 4}-`} alt="" className="object-contain shrink-0 w-9 aspect-square" />
                            <div className="my-auto">{difficulty}</div>
                        </div>
                        <div className="flex gap-2">
                            <img loading="lazy" src={`http://b.io/ext_${23 + (part - 1) * 4}-`} alt="" className="object-contain shrink-0 w-9 aspect-square" />
                            <div className="my-auto">{exercises}</div>
                        </div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2381ace4a9f74a867ebca52be67f5b1f7298c545e2a05ff6fe75c0b0ffcc448?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee" alt="" className="object-contain shrink-0 my-auto aspect-[1.81] w-[29px]" />
                    </div>
                </div>
                <div className="flex self-end py-1 pr-2.5 pl-2.5 mt-4 mr-8 text-base tracking-tight text-right text-black bg-blue-50 rounded-lg border border-cyan-200 border-solid w-fit max-md:mr-2.5">
                    {completed}%&nbsp;<span> Completed</span>
                </div>
                <div className="flex flex-col items-start mt-2.5 bg-blue-50 max-md:pr-5 max-md:max-w-full">
                    <div className="flex shrink-0 h-2.5 bg-blue-950 bg-opacity-90" style={{ width: `${completed}%` }}></div>
                </div>
            </div>
            {content && (
                <div className="flex flex-col gap-4 px-10 mt-10 w-full text-lg tracking-tighter max-md:px-5 max-md:max-w-full">
                    {content.map((item, index) => (
                        <div key={index} className="flex border-b-[1px] border-black/30 py-1 flex-wrap justify-between w-full max-md:mt-10 max-md:max-w-full">
                            <div className="my-auto font-bold leading-loose text-black">
                                {item.type === 'coding' ? 'Coding Exercise' : item.type === 'combined' ? 'Combined Resource' : item.type.charAt(0).toUpperCase() + item.type.slice(1)} {item.number}
                            </div>
                            <div className="flex gap-3 leading-none whitespace-nowrap text-sky-950">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f15dc13d916842a13017cb1d163da975328ed00b7b1d20eb187ec2c32d2a8564?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee" alt="" className="object-contain shrink-0 w-9 aspect-square" />
                                <div className="my-auto">{item.duration}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ChapterPart;