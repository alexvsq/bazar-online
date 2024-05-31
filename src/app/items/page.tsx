"use client";

import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  description: string;
}

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();

  const [items, setItems] = useState<Item[]>([]);

  async function getData(): Promise<void> {
    if (!search) return;
    const response = await axios.get<Item[]>(
      `http://localhost:3000/api/items?q=${search}`
    );

    setItems(response.data);
  }
  function setUrlItemId(x: number) {
    router.push(`/items/${x}`);
  }

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="p-4">
      <header className=" flex justify-between items-center">
        <h1 className="text-2xl my-4">
          Resultados para : <strong className=" font-bold">"{search}"</strong>
        </h1>

        <div>
          <button onClick={() => router.push("/")}>Inicio</button>
        </div>
      </header>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {items.map((item) => (
          <article
            onClick={() => setUrlItemId(item.id)}
            key={item.id}
            className=" bg-gray-700 hover:bg-gray-600 cursor-pointer m-2 p-3"
          >
            <p className=" text-xl font-bold my-1">{item.title}</p>
            <p>{item.name}</p>
            <p>
              <small>{item.description}</small>
            </p>
            <p>
              <small className=" text-gray-300"> Marca :</small> {item.brand}
            </p>
            <p>
              <small className=" text-gray-300"> Categoria: </small>
              {item.category}
            </p>
            <p>
              <small className=" text-gray-300">Precio: </small>
              {item.price}$
            </p>
            <p>
              <small className=" text-gray-300"> Rating: </small>
              {item.rating}
            </p>
            <p>
              <small className=" text-gray-300">stock :</small> {item.stock}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
