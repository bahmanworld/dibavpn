import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { FiArrowRight, FiCheck, FiCheckCircle } from "react-icons/fi";

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

      <button
        type="button"
        className="inline-flex justify-center self-start rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={openModal}
      >
        Open Thank You Modal
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
            <div className="fixed inset-0 bg-slate-900 bg-opacity-75" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-700 text-black dark:text-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h4"
                    className="flex flex-row items-center text-lg font-normal leading-6 text-blue-500"
                  >
                    <div className="mr-2">
                      <FiCheckCircle />
                    </div>
                    <div>Payment Successful</div>
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-sm opacity-80">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Link href={"/bahman"} className="flex flex-row items-center">
        <div>Bahman Page</div>
        <span className="ml-1">
          <FiArrowRight />
        </span>
      </Link>
    </main>
  );
}
