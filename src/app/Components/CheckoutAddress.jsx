import Link from "next/link";
import Breadcrumb from "./BreadCrumb";
import OrderSummary from "./OrderSummary";

export default function CheckoutAddress() {
  return (
    <>
      {/* Checkout Address Breadcrumb Start */}
      <Breadcrumb page={"Checkout"} />
      {/* Checkout Address Breadcrumb End */}

      {/* Checkout Content Start */}
      <section className="flex-grow">
        <section className="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10">
          <h2 className="mx-auto px-5 text-2xl font-bold md:hidden">
            Complete Address
          </h2>
          {/* Form Start */}
          <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
            <table className="hidden lg:table">
              <thead className="h-16 bg-neutral-100">
                <tr>
                  <th className="bg-neutral-600 text-white">ADDRESS</th>
                  <th>DELIVERY METHOD</th>
                  <th>PAYMENT METHOD</th>
                  <th>ORDER REVIEW</th>
                </tr>
              </thead>
            </table>

            <div className="py-5">
              <form className="flex w-full flex-col gap-3" action="">
                <div className="flex w-full justify-between gap-2">
                  <div className="flex w-1/2 flex-col">
                    <label className="flex" htmlFor="name">
                      Full Name
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      className="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Sarah Johnson"
                    />
                  </div>

                  <div className="flex w-1/2 flex-col">
                    <label className="flex" htmlFor="name">
                      Email Address
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      className="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="sarahj@maybell.com"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between gap-2">
                  <div className="flex w-1/2 flex-col">
                    <label className="flex" htmlFor="name">
                      Street
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      className="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Big Serbian avenue, 18"
                    />
                  </div>

                  <div className="flex w-1/2 flex-col">
                    <label className="flex" htmlFor="name">
                      City
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      className="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Belgrade"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between gap-2">
                  <div className="flex w-1/2 flex-col">
                    <label className="flex" htmlFor="name">
                      ZIP code
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      x-mask="999999"
                      className="w-full border px-4 py-2 outline-yellow-400"
                      placeholder="176356"
                    />
                  </div>

                  <div className="flex w-1/2 flex-col">
                    <label className="flex" htmlFor="name">
                      Recipient
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      className="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Andrew Johnson"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="">Commentary</label>
                  <textarea
                    className="border px-4 py-2 outline-yellow-400"
                    type="text"
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="flex w-full items-center justify-between">
              <Link href="/catalog" className="text-sm text-violet-900">
                &larr; Back to the shop
              </Link>

              <Link
                href="/checkout-delivery"
                className="bg-amber-400 px-4 py-2"
              >
                Place an order
              </Link>
            </div>
          </section>
          {/* Form End */}

          {/* Summary Start */}
          <OrderSummary />
          {/* Summary End */}
        </section>

        {/* Cons Badges Start */}
        <section className="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row">
          <div className="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-violet-900 lg:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>

            <div className="ml-6 flex flex-col justify-center">
              <h3 className="text-left text-xs font-bold lg:text-sm">
                Free Delivery
              </h3>
              <p className="text-light text-center text-xs lg:text-left lg:text-sm">
                Orders from $200
              </p>
            </div>
          </div>

          <div className="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-violet-900 lg:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            </div>

            <div className="ml-6 flex flex-col justify-center">
              <h3 className="text-left text-xs font-bold lg:text-sm">
                Money returns
              </h3>
              <p className="text-light text-left text-xs lg:text-sm">
                30 Days guarantee
              </p>
            </div>
          </div>

          <div className="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-violet-900 lg:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>

            <div className="ml-6 flex flex-col justify-center">
              <h3 className="text-left text-xs font-bold lg:text-sm">
                24/7 Supports
              </h3>
              <p className="text-light text-left text-xs lg:text-sm">
                Consumer support
              </p>
            </div>
          </div>
        </section>
        {/* Cons Badges End */}
      </section>
      {/* Checkout Content End */}
    </>
  );
}
