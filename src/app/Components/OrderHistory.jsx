import Link from "next/link";
import Breadcrumb from "./BreadCrumb";
import ProfileSidebar from "./ProfileSidebar";

export default function OrderHistory() {
  return (
    <>
      {/* Order History Breadcrumb Start */}
      <Breadcrumb page={"My Order History"} />
      {/* Order History Breadcrumb End */}

      {/* Order History Content Start */}
      <section class="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
        {/* Order History Sidebar Start */}
        <ProfileSidebar />
        {/* Order History Sidebar End */}

        {/* Order History Form Start */}
        <section class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
          {/* Mobile Order Table Start */}
          <section class="container mx-auto my-3 flex w-full flex-col gap-3 px-4 md:hidden">
            <div class="flex w-full border px-4 py-4">
              <div class="ml-3 flex w-full flex-col justify-center">
                <div class="flex items-center justify-between">
                  <p class="text-xl font-bold">Order &numero; 1245</p>
                  <div class="border border-green-500 px-2 py-1 text-green-500">
                    Delivered
                  </div>
                </div>
                <p class="text-sm text-gray-400">22/06/2023</p>
                <p class="py-3 text-xl font-bold text-violet-900">$620</p>
                <div class="mt-2 flex w-full items-center justify-between">
                  <div class="flex items-center justify-center">
                    <Link
                      href="/order-overview"
                      class="flex cursor-text items-center justify-center bg-amber-500 px-2 py-2 active:ring-gray-500"
                    >
                      View order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex w-full border px-4 py-4">
              <div class="ml-3 flex w-full flex-col justify-center">
                <div class="flex items-center justify-between">
                  <p class="text-xl font-bold">Order &numero; 1232</p>
                  <div class="border border-orange-500 px-2 py-1 text-orange-500">
                    Progress
                  </div>
                </div>
                <p class="text-sm text-gray-400">20/05/2023</p>
                <p class="py-3 text-xl font-bold text-violet-900">$320</p>
                <div class="mt-2 flex w-full items-center justify-between">
                  <div class="flex items-center justify-center">
                    <Link
                      href="/order-overview"
                      class="flex cursor-text items-center justify-center bg-amber-500 px-2 py-2 active:ring-gray-500"
                    >
                      View order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex w-full border px-4 py-4">
              <div class="ml-3 flex w-full flex-col justify-center">
                <div class="flex items-center justify-between">
                  <p class="text-xl font-bold">Order &numero; 3246</p>
                  <div class="border border-red-500 px-2 py-1 text-red-500">
                    Declined
                  </div>
                </div>
                <p class="text-sm text-gray-400">03/03/2022</p>
                <p class="py-3 text-xl font-bold text-violet-900">$2500</p>
                <div class="mt-2 flex w-full items-center justify-between">
                  <div class="flex items-center justify-center">
                    <Link
                      href="/order-overview"
                      class="flex cursor-text items-center justify-center bg-amber-500 px-2 py-2 active:ring-gray-500"
                    >
                      View order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex w-full border px-4 py-4">
              <div class="ml-3 flex w-full flex-col justify-center">
                <div class="flex items-center justify-between">
                  <p class="text-xl font-bold">Order &numero; 9827</p>
                  <div class="border border-blue-500 px-2 py-1 text-blue-500">
                    Need Payment
                  </div>
                </div>
                <p class="text-sm text-gray-400">31/01/20</p>
                <p class="py-3 text-xl font-bold text-violet-900">$1700</p>
                <div class="mt-2 flex w-full items-center justify-between">
                  <div class="flex items-center justify-center">
                    <Link
                      href="/order-overview"
                      class="flex cursor-text items-center justify-center bg-amber-500 px-2 py-2 active:ring-gray-500"
                    >
                      View order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Mobile Order Table End */}

          {/* Order Table End */}
          <section class="hidden h-[600px] w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 lg:grid">
            <table class="table-fixed">
              <thead class="h-16 bg-neutral-100">
                <tr>
                  <th>ORDER</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr class="h-[100px] border-b">
                  <td class="text-center align-middle">&#8470; 1245</td>
                  <td class="mx-auto text-center">22/06/2023</td>
                  <td class="text-center align-middle">&#36;620</td>

                  <td class="mx-auto text-center">
                    <span class="border-2 border-green-500 py-1 px-3 text-green-500">
                      Delivered
                    </span>
                  </td>
                  <td class="text-center align-middle">
                    <Link href="/order-overview" class="bg-amber-400 px-4 py-2">
                      <button class="text-center">View</button>
                    </Link>
                  </td>
                </tr>

                <tr class="h-[100px] border-b">
                  <td class="text-center align-middle">&#8470; 1232</td>
                  <td class="mx-auto text-center">20/05/2023</td>
                  <td class="text-center align-middle">&#36;3200</td>

                  <td class="mx-auto text-center">
                    <span class="border-2 border-orange-500 py-1 px-3 text-orange-500">
                      In Progress
                    </span>
                  </td>
                  <td class="text-center align-middle">
                    <Link href="/order-overview" class="bg-amber-400 px-4 py-2">
                      <button class="text-center">View</button>
                    </Link>
                  </td>
                </tr>

                <tr class="h-[100px] border-b">
                  <td class="text-center align-middle">&#8470; 3246</td>
                  <td class="mx-auto text-center">03/03/2022</td>
                  <td class="text-center align-middle">&#36;2500</td>

                  <td class="mx-auto text-center">
                    <span class="border-2 border-red-500 py-1 px-3 text-red-500">
                      Declined
                    </span>
                  </td>
                  <td class="text-center align-middle">
                    <Link href="/order-overview" class="bg-amber-400 px-4 py-2">
                      <button class="text-center">View</button>
                    </Link>
                  </td>
                </tr>

                <tr class="h-[100px] border-b">
                  <td class="text-center align-middle">&#8470; 9827</td>
                  <td class="mx-auto text-center">31/01/2020</td>
                  <td class="text-center align-middle">&#36;1700</td>

                  <td class="mx-auto text-center">
                    <span class="border-2 border-blue-500 py-1 px-3 text-blue-500">
                      Need Payment
                    </span>
                  </td>
                  <td class="text-center align-middle">
                    <Link href="/order-overview" class="bg-amber-400 px-4 py-2">
                      <button class="text-center">View</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* Order Table End */}
        </section>
        {/* Order History Form End */}
      </section>
      {/* Order History Content End */}
    </>
  );
}
