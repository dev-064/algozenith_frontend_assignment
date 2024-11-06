import React from 'react';
import ChapterPart from './ChapterPart';

const chapterParts = [
  {
    part: 1,
    title: "Lorem ipsum dolor sit amet",
    duration: "02:00:00",
    difficulty: "Medium",
    exercises: 5,
    completed: 45,
    content: [
      { type: "video", number: 1, duration: "10:00" },
      { type: "article", number: 1, duration: "10:00" },
      { type: "quiz", number: 1, duration: "10:00" },
      { type: "coding", number: 1, duration: "10:00" },
      { type: "combined", number: 1, duration: "10:00" },
    ],
  },
  {
    part: 2,
    title: "Lorem ipsum dolor sit amet",
    duration: "02:00:00",
    difficulty: "Medium",
    exercises: 12,
    completed: 20,
  },
  {
    part: 3,
    title: "Lorem ipsum dolor sit amet",
    duration: "02:00:00",
    difficulty: "Medium",
    exercises: 12,
    completed: 0,
  },
];

function ChapterContent() {
  return (
    <section className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:max-w-full">
        <div className="flex flex-col w-full bg-white rounded-2xl max-md:max-w-full">
          {chapterParts.map((part, index) => (
            <ChapterPart key={index} {...part} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChapterContent;