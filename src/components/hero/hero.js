import Image from "next/future/image";

export function Hero({
  title = "",
  titleHighlight = "",
  description = "",
  children,
}) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 pt-20 bg-white sm:pt-16 sm:pb-16 md:pb-20 md:pt-20 lg:max-w-2xl lg:w-full lg:pt-28 lg:pb-28 xl:pt-32 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto max-w-7xl md:pr-6">
            <div className="sm:text-center lg:text-left">
              <h1 className="tracking-tight font-extrabold text-gray-900">
                <span className="block xl:inline text-4xl sm:text-5xl">
                  {title}
                </span>
                <br />
                <span className="block text-indigo-600 xl:inline text-4xl sm:text-5xl md:text-6xl">
                  {titleHighlight}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/hero.jpeg"
          alt="Hero"
          width={648}
          height={622}
        />
      </div>
    </div>
  );
}
