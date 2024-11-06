import React from 'react';
import Header from './Header';
import ChapterList from './ChapterList';
import ChapterContent from './ChapterContent';

function MainContent() {
  return (
    <main className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
        <Header />
        <div className="flex flex-col px-10 pt-10 pb-24 mt-10 w-full bg-white rounded-2xl border border-cyan-200 border-solid max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full text-lg tracking-tighter leading-loose text-center max-md:max-w-full">
            <div className="flex flex-wrap gap-7 py-2.5 pr-2.5 pl-6 text-black rounded-2xl max-md:pl-5 max-md:max-w-full">
              <button className="flex overflow-hidden gap-3 justify-center items-center px-5 py-3 rounded-xl shadow-[0px_4px_4px_rgba(41,83,155,0.3)]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eac90f1742f24e30cc40110323b467016a8f8f5231ec004152449542904d32ef?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
                <span className="self-stretch my-auto">Mentor Sessions</span>
              </button>
              <button className="flex overflow-hidden flex-auto gap-3 justify-center items-center px-5 py-3 font-bold bg-white rounded-xl shadow-[0px_4px_4px_rgba(41,83,155,0.3)]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c84903d889a4d6161f3f8f48ed4482a07dc8875c9bcec185242d5168986376ea?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
                <span className="self-stretch my-auto">Learning Material</span>
              </button>
            </div>
            <button className="flex gap-3 items-center px-4 py-3 my-auto font-bold rounded-xl border border-cyan-200 border-solid bg-white bg-opacity-30 shadow-[0px_4px_20px_rgba(167,231,254,0.4)] text-blue-950">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7043add8d1c4b83f4c1739589b9be96134eefd50665b81579f9902e8da57585b?placeholderIfAbsent=true&apiKey=0ab76bd2d972474f838bf619a74e9aee" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
              <span className="self-stretch my-auto">How it works</span>
            </button>
          </div>
          <hr className="shrink-0 mt-10 h-px border border-cyan-200 border-solid max-md:max-w-full" />
          <div className="mt-10 mb-0 max-md:mb-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <ChapterList />
              <ChapterContent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;