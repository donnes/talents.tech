import Link from "next/link";
import { links, commonContent } from "../../data";

export function CTASection() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
          <span className="block font-bold">{commonContent.cta.title}</span>
          <span className="block font-semibold text-indigo-600">
            {commonContent.cta.titleHighlight}
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <Link href={links.hire}>
            <a className="w-full flex items-center justify-center border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 py-4 text-md px-6">
              {commonContent.cta.primaryButtonText}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
