import { Dialog, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import {
  FiArchive,
  FiArrowRight,
  FiChevronsDown,
  FiCopy,
  FiDelete,
  FiDownload,
  FiDownloadCloud,
  FiEdit,
  FiFolderPlus,
  FiPower,
  FiStar,
} from "react-icons/fi";

const name: string = "bahman";
console.log(name);

export default function Home() {
  let [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <main className={`flex flex-col gap-4 p-12`}>
      <div>Home Page</div>

      <div className="bg-stone-700 w-[130px] aspect-[9/12] rounded-xl p-4 hover:scale-105 transition-transform duration-200 ease-in-out">
        <b>Spider-Man: across the spider-verse</b>
        <div className="flex flex-row items-center text-orange-400 mt-3">
          <FiStar className="w-4 h-4 mr-1" /> 8.9 / 10
        </div>
      </div>

      <button
        type="button"
        className="inline-flex justify-center self-start rounded-xl transition-all duration-200 border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-indigo-600"
        onClick={openModal}
      >
        <FiPower className="mr-2 h-5 w-5" aria-hidden="true" />
        Open Modal
      </button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-stone-950 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-stone-800 text-black dark:text-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h4"
                    className="flex flex-row items-center text-lg font-normal leading-6 text-yellow-500"
                  >
                    <div className="mr-2">
                      <FiDownload className="mr-1 h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>Download Warning!</div>
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="opacity-80 text-justify">
                      Please be aware that you are about to downloading a file
                      which hasn't been scanned for viruses. Dowload file on
                      your own risk, or close this dialog.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-row justify-between">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-xl transition-all duration-200 border border-transparent bg-indigo-500 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-600"
                      onClick={closeModal}
                    >
                      <FiDownloadCloud
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Download anyway!
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-xl transition-all duration-200 border border-transparent bg-stone-800 text-white px-4 py-2 ml-2 text-sm font-medium hover:bg-stone-600 "
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Menu as={'div'} className="relative inline-block text-left self-center">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-xl bg-stone-500 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
            <FiChevronsDown
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-90"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-90"
        >
          <Menu.Items className="absolute left-0 mt-2 w-36 origin-top-right divide-y divide-stone-600 rounded-xl bg-stone-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-indigo-500 text-white" : "text-white"
                    } group flex w-full items-center rounded-lg px-2 py-1.5 transition-all duration-100 ease-in-out text-sm`}
                  >
                    {active ? (
                      <FiEdit className="mr-2 h-4 w-4" aria-hidden="true" />
                    ) : (
                      <FiEdit className="mr-2 h-4 w-4" aria-hidden="true" />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-indigo-500 text-white" : "text-white"
                    } group flex w-full items-center rounded-lg px-2 py-1.5 transition-all duration-100 ease-in-out text-sm`}
                  >
                    {active ? (
                      <FiCopy className="mr-2 h-4 w-4 " aria-hidden="true" />
                    ) : (
                      <FiCopy className="mr-2 h-4 w-4" aria-hidden="true" />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-indigo-500 text-white" : "text-white"
                    } group flex w-full items-center rounded-lg px-2 py-1.5 transition-all duration-100 ease-in-out text-sm`}
                  >
                    {active ? (
                      <FiArchive className="mr-2 h-4 w-4" aria-hidden="true" />
                    ) : (
                      <FiArchive className="mr-2 h-4 w-4" aria-hidden="true" />
                    )}
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-indigo-500 text-white" : "text-white"
                    } group flex w-full items-center rounded-lg px-2 py-1.5 transition-all duration-100 ease-in-out text-sm`}
                  >
                    {active ? (
                      <FiFolderPlus
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiFolderPlus
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    )}
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={()=> alert('the item has been deleted')}
                    className={`${
                      active ? "bg-red-500 text-white" : "text-red-500"
                    } group flex w-full items-center rounded-lg px-2 py-1.5 transition-all duration-100 ease-in-out text-sm`}
                  >
                    {active ? (
                      <FiDelete
                        className="mr-2 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiDelete
                        className="mr-2 h-5 w-5 text-red-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <Link href={"/bahman"} className="flex flex-row items-center">
        <div>Bahman Page</div>
        <span className="ml-1">
          <FiArrowRight />
        </span>
      </Link>
    </main>
  );
}
