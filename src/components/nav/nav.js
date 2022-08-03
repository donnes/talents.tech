import { Fragment } from "react";
import Image from "next/future/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { links } from "../../data/links";

const navigation = [
  { name: "How it Work", href: "/" },
  { name: "Hire for Specific Skills", href: links.skills },
  { name: "Dev Camp", href: links.devCamp },
  { name: "About Us", href: links.aboutUs },
  { name: "Contact Us", href: links.contact },
];

export function Nav() {
  return (
    <Popover>
      <div className="fixed left-0 right-0 top-0 shadow-sm bg-white py-3 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <a>
                    <span className="sr-only">Talents</span>
                    <Image
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Talents"
                      width={43.75}
                      height={40}
                    />
                  </a>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:space-x-8">
              <Link href={links.hire}>
                <a className="w-full flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 py-3 text-md px-4">
                  Hire Top Talents
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-40 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Image
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Talents"
                  width={43.75}
                  height={40}
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </a>
                </Link>
              ))}

              <Link href={links.hire}>
                <a className="w-full flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 py-3 text-md px-4">
                  Hire Top Talents
                </a>
              </Link>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
