"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
  const router = useRouter();
  const { id } = useParams();
  const [items, setItems] = useState<Item[]>([]);

  interface Item {
    id: string;
    title: string;
    name: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    rating: number;
    stock: number;
  }

  function fetchItem() {
    axios.get<Item[]>(`http://localhost:3000/api/items/${id}`).then((res) => {
      setItems(res.data);
    });
  }

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      <header className=" flex justify-between items-center">
        <h1 className="text-2xl my-4">Resultados</h1>

        <div>
          <button onClick={() => router.push("/")}>Inicio</button>
        </div>
      </header>
      {items.length > 0 ? (
        items.map((item) => (
          <article key={item.id}>
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
        ))
      ) : (
        <p>No se encontraron elementos</p>
      )}
    </div>
  );
}
