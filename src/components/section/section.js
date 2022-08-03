export function Section({
  title = "Title",
  caption = "Caption",
  description = null,
  orientation = "vertical",
  className = "",
  children,
}) {
  if (orientation === "vertical") {
    return (
      <div className={"py-12 " + className}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {caption}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </p>
            {description && (
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {description}
              </p>
            )}
          </div>

          <div className="mt-10">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={"py-12 " + className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-1 md:grid-cols-2">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {caption}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </p>
            {description && (
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {description}
              </p>
            )}
          </div>

          <div className="mt-10 md:mt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
