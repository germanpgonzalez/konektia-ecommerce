import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"


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

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
    .then((response) => response.json())
    .then((data: ProductsResponse) => setProducts(data.products))
    .catch((error) => console.log(error))
  },[]);

  return (
    <>
      <h3>Celulares</h3>
      <ul className="grid grid-cols-4 gap-6 top-3">
        {
          products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product}/>
            </li>
          ))
        }
      </ul>

    </>
  )
}
