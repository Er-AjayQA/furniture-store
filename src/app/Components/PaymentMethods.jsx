import Breadcrumb from "./BreadCrumb";
import ProfileSidebar from "./ProfileSidebar";

export default function PaymentMethods() {
  return (
    <>
      {/* Payment Methods Breadcrumb Start */}
      <Breadcrumb page={"Payment Methods"} />
      {/* Payment Methods Breadcrumb End */}

      {/* Payment Methods Content Start */}
      <section class="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
        {/* Payment Methods Sidebar Start */}
        <ProfileSidebar />
        {/* Payment Methods Sidebar End */}

        {/* Payment Methods Form Start */}
        <section class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
          <div class="py-5">
            <div class="w-full"></div>
            <form class="flex w-full flex-col gap-3" action="">
              <div class="flex w-full flex-col">
                <label class="flex" htmlFor="name">
                  Payment Card Number
                </label>
                <input
                  x-mask="9999 9999 9999 9999"
                  class="w-full border px-4 py-2 lg:w-1/2"
                  type="text"
                  placeholder="1223 4568 7644 4839"
                />
              </div>

              <div class="flex w-full flex-col">
                <label class="flex" htmlFor="name">
                  Card Holder
                </label>
                <input
                  class="w-full border px-4 py-2 lg:w-1/2"
                  type="text"
                  placeholder="SARAH JOHNSON"
                />
              </div>

              <div class="flex items-center gap-5 lg:w-1/2">
                <div class="flex flex-col">
                  <label class="flex" htmlFor="name">
                    Expiry Date
                  </label>

                  <div class="flex w-[150px] items-center gap-1">
                    <input
                      x-mask="99"
                      class="w-1/2 border px-4 py-2 text-center"
                      placeholder="10"
                    />

                    <span>\</span>

                    <input
                      x-mask="99"
                      class="w-1/2 border px-4 py-2 text-center"
                      placeholder="36"
                    />
                  </div>
                </div>

                <div class="flex flex-col w-[60px] lg:w-[110px]">
                  <label class="flex" htmlFor="">
                    CVV/CVC
                  </label>
                  <input
                    x-mask="999"
                    class="w-full border py-2 text-center lg:w-1/2"
                    type="password"
                    placeholder="&bull;&bull;&bull;"
                  />
                </div>
              </div>

              <div class="flex gap-3">
                <button class="mt-4 w-40 bg-violet-900 px-4 py-2 text-white">
                  Save changes
                </button>

                <button class="mt-4 w-40 bg-amber-400 px-4 py-2">
                  Add new card
                </button>
              </div>
            </form>

            {/* Another Payment-Methods Start */}
            <h2 class="mt-10 text-left text-xl font-medium">
              Another methods:
            </h2>
            <section class="my-4 grid w-fit grid-cols-3 gap-4 lg:grid-cols-4">
              <img
                class="w-[100px] cursor-pointer"
                src="/images/payment-method-bitcoin.svg"
                alt="bitcoin icon"
              />
              <img
                class="w-[100px] cursor-pointer"
                src="/images/payment-method-paypal.svg"
                alt="paypal icon"
              />
              <img
                class="w-[100px] cursor-pointer"
                src="/images/payment-method-stripe.svg"
                alt="stripe icon"
              />
              <img
                class="w-[100px] cursor-pointer"
                src="/images/payment-method-visa.svg"
                alt="visa icon"
              />
              <img
                class="w-[100px] cursor-pointer"
                src="/images/payment-method-mastercard.svg"
                alt="mastercard icon"
              />
            </section>
            {/* Another Payment-Methods End */}
          </div>
        </section>
        {/* Payment Methods Form End */}
      </section>
      {/* Payment Methods Content End */}
    </>
  );
}
