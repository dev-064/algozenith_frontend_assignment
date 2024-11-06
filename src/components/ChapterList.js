import React from 'react';

const chapters = [
  { number: 1, active: true, duration: "05:00:00" },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
];

function ChapterList() {
  return (
    <nav className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mr-0 w-full">
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className={`flex ${chapter.active ? 'overflow-hidden gap-10 items-center self-start px-4 py-6 bg-blue-50' : 'gap-2.5 self-stretch px-4 py-6'} ${
              index > 0 ? 'mt-4' : ''
            } text-lg tracking-tighter leading-loose text-black justify-between rounded-lg shadow-[0px_4px_20px_rgba(23,43,77,0.1)] w-full`}
          >
            <div className={`self-stretch my-auto ${chapter.active ? 'font-bold' : ''}`}>Chapter {chapter.number}</div>
            {chapter.active && (
              <div className="flex gap-2 self-stretch my-auto text-lg tracking-tighter leading-none text-indigo-500 whitespace-nowrap w-[134px] justify-center items-center">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a2d1b2af2bd28a29e6a73a03c4aa3820d675f9c6153cc7a172728276b3f29ca?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee" alt="" className="object-contain shrink-0 w-8 aspect-square" />
                <p>{chapter.duration}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default ChapterList;