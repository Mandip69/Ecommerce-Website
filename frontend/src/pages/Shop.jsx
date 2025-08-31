import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((p) => (
        <div key={p._id} className="border p-2 rounded">
          <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
          <h3 className="font-bold">{p.name}</h3>
          <p>₨ {p.price}</p>
          <button
            onClick={() => addToCart(p)}
            className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
