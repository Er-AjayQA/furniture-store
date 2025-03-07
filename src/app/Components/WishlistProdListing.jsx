"use client";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../ReduxToolkit/CartSlice";
import { MdDeleteSweep } from "react-icons/md";
import { addToWishlist } from "../ReduxToolkit/WishlistSlice";

export default function WishlistProdListing() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(
    (wishlist) => wishlist.wishlist.wishlistItems
  );

  // Handle Adding Product to Wishlist
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist({ product }));
  };

  // Handle Adding Product to Cart
  const handleAddToCart = (product) => {
    dispatch(addToCart({ product }));
  };

  return (
    <>
      {/* Option Cards Start */}

      <div className="mb-5 flex items-center justify-between px-5 lg:hidden">
        <div className="flex gap-3">
          <div className="py-5">
            <div className="flex items-center">
              <img
                width="40px"
                height="40px"
                className="rounded-full object-cover"
                src="/images/avatar-photo.png"
                alt="Red woman portrait"
              />
              <div className="ml-5">
                <p className="font-medium text-gray-500">Hello,</p>
                <p className="font-bold">Sarah Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Product Cards Start */}
      <section className="mx-auto container grid grid-cols-2 gap-5 px-5 pb-10 md:hidden">
        {wishlistItems.length >= 1 ? (
          wishlistItems.map((product) => {
            return (
              <div className="flex flex-col relative">
                <span className="text-[25px] font-bold absolute top-3 end-3">
                  {product.discount_percentage}% off
                </span>
                <div className="relative flex">
                  <img className="" src={product.image} alt={product.name} />
                  <div className="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">
                    <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </span>
                    <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <p className="mt-2">{product.name}</p>
                  <p className="font-medium text-violet-900">
                    {product.discount_percentage > 0 ? (
                      <span className="me-2">
                        $
                        {Math.floor(
                          product.price *
                            (1 - product.discount_percentage / 100)
                        )}
                      </span>
                    ) : (
                      ""
                    )}
                    <span
                      className={`${
                        product.discount_percentage > 0
                          ? "line-through opacity-50 text-red-400"
                          : ""
                      }`}
                    >
                      {product.price}
                    </span>
                  </p>
                  <p>
                    Availability:
                    <span
                      className={`font-medium  ${
                        product.stock >= 1 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {product.stock >= 1 ? "In Stock" : "Out of Stock"}
                    </span>
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      className="my-5 h-10 w-full bg-violet-900 text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </button>
                    <i className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">Your wishlist is empty!!</p>
        )}
      </section>
      {/* Mobile Product Cards End */}

      {/* Desktop Product Cards Start */}
      <section className="hidden w-full max-w-[1200px] grid-cols-1 gap-8 px-5 pb-10 md:grid">
        {wishlistItems.length >= 1 ? (
          wishlistItems.map((product) => {
            return (
              <div className="flex w-full flex-row h-44 items-center justify-between border py-5 px-4 relative">
                <span
                  className={`text-[25px] font-bold absolute top-3 end-3 ${
                    product.discount_percentage > 0 ? "block" : "hidden"
                  }`}
                >
                  {product.discount_percentage}% off
                </span>
                <div className="flex w-full items-center gap-4">
                  <img
                    width="100px"
                    className="object-cover"
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="flex w-2/5 flex-col justify-center">
                    <p className="text-xl font-bold ">{product.name}</p>
                    <p className="text-gray-500">
                      Availability:
                      <span
                        className={`font-medium  ${
                          product.stock >= 1 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {product.stock >= 1 ? "In Stock" : "Out of Stock"}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex w-3/5 items-center justify-between flex-row">
                  <p className="mt-2 text-xl font-bold text-violet-900">
                    {product.discount_percentage > 0 ? (
                      <span className="me-2">
                        $
                        {Math.floor(
                          product.price *
                            (1 - product.discount_percentage / 100)
                        )}
                      </span>
                    ) : (
                      ""
                    )}
                    <span
                      className={`${
                        product.discount_percentage > 0
                          ? "line-through opacity-50 text-red-400"
                          : ""
                      }`}
                    >
                      ${product.price}
                    </span>
                  </p>

                  <div className="mt-2 flex items-center">
                    <button
                      className="w-full px-2 bg-amber-400 py-2 lg:px-5"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </button>

                    <i className="ml-5 cursor-pointer text-[30px] hover:text-red-600">
                      <MdDeleteSweep
                        onClick={() => handleAddToWishlist(product)}
                      />
                    </i>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">Your wishlist is empty!!</p>
        )}
      </section>
      {/* Desktop Product Cards End */}

      {/* Option Cards End */}
    </>
  );
}
