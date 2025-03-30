"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { ProfilePic } from "@/components/ProfilePic";

export function SpotlightNew() {
  return (
    <div
      className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/illustrations.svg')",
      }}
    >
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full md:pt-0 text-center">
        <ProfilePic />
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 pt-2 pb-4  border-t border-l border-r border-b border-neutral-300 dark:border-neutral-600">
          Hey, I'm Shlok! <br />
          Welcome to my corner of the internet!
        </h1>
        <p className="mt-3 font-normal text-base text-neutral-800 dark:text-neutral-300 max-w-lg text-center mx-auto border-t border-l border-r border-b border-neutral-300 dark:border-neutral-600">
          I’m Currently learning Next.js and working to strengthen my skills as
          a beginner web developer. I’m passionate about creating websites that
          offer seamless, user-friendly experiences while also focusing on
          visually appealing designs.
        </p>
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Figma
          </button>
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Login
          </button>
        </div>
        <div className="flex flex-col items-center mt-8">
          <div className="flex justify-center items-center space-x-3 p-3 rounded-full bg-neutral-950 dark:bg-neutral-800 shadow-md">
            {/* GitHub Button */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 shadow hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.774.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.137 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.478 5.92.432.372.816 1.102.816 2.222v3.293c0 .32.192.694.8.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* Twitter Button */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 shadow hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.896-.959-2.173-1.558-3.594-1.558-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.001-7.496 14.001-13.986 0-.21-.005-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549z" />
              </svg>
            </a>

            {/* Reddit Button */}
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 shadow hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.774.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.137 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.478 5.92.432.372.816 1.102.816 2.222v3.293c0 .32.192.694.8.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
