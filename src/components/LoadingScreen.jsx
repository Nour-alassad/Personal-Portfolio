import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4">
      {/* <div className="mb-4 font-mono font-bold text-2xl sm:text-4xl text-center max-w-full truncate">
        {text} <span className="animate-blink ml-1"></span>
      </div> */}
      <div className="mb-4 font-mono font-bold text-xl sm:text-3xl md:text-4xl text-center max-w-full px-2 break-words">
        {text} <span className="animate-blink ml-1"></span>
      </div>

      <div className="w-full max-w-xs sm:max-w-sm h-2 bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
