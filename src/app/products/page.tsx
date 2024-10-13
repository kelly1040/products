import Image from "next/image";
import { StarIcon } from "lucide-react";
import Rating from "@mui/material/Rating";

export default async function Home() {
  let data = await fetch(
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/voyager-hoodie"
  );
  let product = await data.json();
  return (
    <div className="flex self-stretch p-24">
      <main className="flex grow gap-8">
        <div className="w-1/2">
          <div className="">
            <img
              className="object-cover rounded-lg"
              src={product.images[0].image_url}
            ></img>
          </div>
          <div className="small-picture">small pictures</div>
        </div>
        <div className="flex flex-col w-1/2  gap-8">
          <div className="flex flex-col gap-6">
            <div className="font-semibold text-5xl text-neutral-900">
              {product.name}
            </div>
            <div className="flex flex-col gap-3 self-stretch">
              <div className="flex flex-col justify-center gap-2 self-stretch">
                <div className="flex items-end gap-2">
                  <span className="font-medium text-3xl text-neutral-600">
                    ${product.inventory[0].sale_price}
                  </span>
                  <span className="font-medium text-lg line-through text-neutral-400">
                    ${product.inventory[0].list_price}
                  </span>
                </div>
                <div>
                  <span className="font-normal text-sm text-center text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-solid border-amber-200">
                    {product.inventory[0].discount_percentage}% OFF
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-normal text-xl text-neutral-900">
                  {product.rating}
                </span>
                <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                <button className="font-medium text-sm text-indigo-700">
                  See all 62 reviews
                </button>
              </div>
            </div>
          </div>
          <div className="font-normal text-base text-neutral-600">
            {product.description}
          </div>
          <div className="flex flex-col gap-4 self-stretch">
            <span className="font-normal text-sm text-neutral-500">
              Available Colors
            </span>
            <div className="flex items-center gap-4 self-stretch">
              {product.colors}
            </div>
          </div>
          <div>
            <span className="font-normal text-sm text-neutral-500">
              Available sizes
            </span>
          </div>
          <div>
            <span className="font-normal text-sm text-neutral-500">
              Quantity
            </span>
          </div>
            <button className="flex justify-center items-center gap-2.5 self-stretch px-6 py-4 rounded bg-indigo-700 hover:bg-indigo-800 ...">
              <span className="font-medium text-lg text-white">Add to Cart</span>
            </button>
          <div>
            Additional info
            <ul>
              <li>Features</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
