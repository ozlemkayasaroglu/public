"use client";
import Link from "next/link";
import { useState, Fragment } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Popover, Transition } from "@headlessui/react";
import Banner from "./banner";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-10 z-10">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-white"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Healer Turkey</span>
              LOGO
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ana menuyu ac</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center">
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-600"
            >
              HOME
            </Link>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                OUR SERVICE
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-80 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                  <div className="relative rounded-lg p-4 hover:bg-gray-50">
                    <Link
                      href="#"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Sub menu 1
                      <span className="absolute inset-0" />
                    </Link>
                  </div>
                  <div className="relative rounded-lg p-4 hover:bg-gray-50">
                    <Link
                      href="#"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Sub menu 2
                      <span className="absolute inset-0" />
                    </Link>
                  </div>
                  <div className="relative rounded-lg p-4 hover:bg-gray-50">
                    <Link
                      href="#"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Sub menu 3
                      <span className="absolute inset-0" />
                    </Link>
                  </div>
                  <div className="relative rounded-lg p-4 hover:bg-gray-50">
                    <Link
                      href="#"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Sub menu 4
                      <span className="absolute inset-0" />
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-600"
            >
              ABOUT US
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-600"
            >
              CONTACT
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-600 bg-[#2dd5c9] px-3 py-1"
            >
              +90 212 919 05 55
            </Link>
          </Popover.Group>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">LOGO</span>
                  LOGO
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Kapat</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      HOME
                    </Link>
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      OUR SERVICE
                    </Link>

                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      ABOUT US
                    </Link>
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      CONTACT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    <Banner />
    </div>
  );
};

export default Header;
