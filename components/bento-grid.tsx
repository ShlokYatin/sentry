export default function BentoGrid() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">About Me</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
          Everything you need to know
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-neutral-100 dark:bg-neutral-800 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-50 max-lg:text-center">
                  Hi, I'm Shlok!
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-neutral-700 dark:text-neutral-300 max-lg:text-center">
                  A 15-year-old web design enthusiast from India, currently in 11th grade, aiming for CET.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="/shlok.jpg"
                    alt="Shlok's Profile Picture"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-neutral-300 dark:ring-neutral-700 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-neutral-100 dark:bg-neutral-800 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-50 max-lg:text-center">
                  Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-neutral-700 dark:text-neutral-300 max-lg:text-center">
                Optimized for fast load times, mobile responsiveness, SEO and accessibility, ensuring a smooth user experience across devices.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-neutral-300 dark:ring-neutral-700 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-neutral-100 dark:bg-neutral-800"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-50 max-lg:text-center">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-neutral-700 dark:text-neutral-300 max-lg:text-center">
                Secure & Stable: Strong security measures like SSL encryption and regular backups ensure data protection and minimal downtime.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-neutral-300 dark:ring-neutral-700"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-neutral-100 dark:bg-neutral-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-50 max-lg:text-center">
                  Currently Building: NPSK database
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-neutral-700 dark:text-neutral-300 max-lg:text-center">
                serves as a centralized platform to securely store and manage student details, academic notes, and important records for easy access and efficient management.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-neutral-200 dark:bg-neutral-900 shadow-2xl">
                  <div className="flex bg-neutral-800/40 ring-1 ring-neutral-300 dark:ring-neutral-700">
                    <div className="-mb-px flex text-sm/6 font-medium text-neutral-400">
                      <div className="border-r border-b border-r-neutral-300 dark:border-r-neutral-800 border-b-neutral-900 dark:border-b-neutral-900 bg-neutral-100 dark:bg-neutral-800 px-4 py-2 text-neutral-900 dark:text-neutral-50">
                        Login.js
                      </div>
                      <div className="border-r border-neutral-300 dark:border-neutral-800 px-4 py-2">App.js</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                  <img
                    src="/login.png"
                    alt="Login"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-neutral-300 dark:ring-neutral-700 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}