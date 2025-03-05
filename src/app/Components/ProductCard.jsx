import { IoMdSearch } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative flex">
          <img className="" src={product.image} alt={product.name} />
          <div className="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">
            <Link
              href={`/product-overview/${product.category_slug}/${product.id}`}
            >
              <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
                <IoMdSearch />
              </span>
            </Link>
            <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
              <IoIosHeartEmpty />
            </span>
          </div>

          {product.discount_percentage >= 1 ? (
            <div className="absolute right-1 mt-3 flex items-center justify-center bg-amber-400">
              <p className="px-2 py-2 text-sm">
                {product.discount_percentage}% OFF
              </p>
            </div>
          ) : (
            ""
          )}
        </div>

        <div>
          <p className="mt-2 whitespace-nowrap overflow-hidden text-ellipsis">
            {product.name}
          </p>
          <p className="font-medium text-violet-900">
            $
            {Math.floor(
              product.price * (1 - product.discount_percentage / 100)
            )}
            {product.discount_percentage >= 1 ? (
              <span className="text-sm text-gray-500 line-through ms-1">
                ${product.price}
              </span>
            ) : (
              ""
            )}
          </p>

          <div className="flex items-center">
            {[...Array(5)].map((_, i) =>
              i < Number(product.rating) ? (
                <GoStarFill key={i} className="text-[#FACC15]" />
              ) : (
                <GoStar key={i} className="text-[#E5E7EB]" />
              )
            )}
            <p className="text-sm text-gray-400">({product.rating})</p>
          </div>

          <div>
            <button className="my-5 h-10 w-full bg-violet-900 text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
