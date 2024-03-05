import { useEffect, useState } from "react";

const ReactProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/api/getProducts.json");
      const data = await res.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div className="grid gap-6">
      {products.length > 0 &&
        products.map(({ data }) => (
          <ul className="p-4 rounded-md border-2 max-w-fit">
            <li>
              <strong>{data.product_name}</strong>
            </li>
            <li>{data.price}</li>
            <li>In Stock: {data.in_stock}</li>
          </ul>
        ))}
    </div>
  );
};
export default ReactProducts;
