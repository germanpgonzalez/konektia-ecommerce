import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"
import { SkeletonCard } from "./SkeletonCard";


export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductsResponse = {
  products: ProductType[];
};


export const ProductList = () => {
  const [loading, setLoading] = useState(true);	
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
    .then((response) => response.json())
    .then((data: ProductsResponse) => {
      setProducts(data.products);
      setLoading(false);
    })
    .catch((error) => console.log(error))
  },[]);

  return (
    <>
      { loading ? ( 
        <ul className="grid grid-cols-4 gap-6 top-3">
        {[...Array(10)].map((_, index) => (
          <li key={index}>
            <SkeletonCard />
          </li>
        ))}
      </ul>
      ) : (
        <ul className="grid grid-cols-4 gap-6 top-3">
          {
            products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product}/>
              </li>
            ))
          }
        </ul>
      )}

    </>
  )
}
