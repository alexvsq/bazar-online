"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
  textSearch: string;
};

export default function searchInupt() {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();

  const search: SubmitHandler<Inputs> = (data) => {
    router.push(`/items?search=${data.textSearch}`);
  };

  return (
    <form onSubmit={handleSubmit(search)} className=" flex flex-col gap-4">
      <input
        {...register("textSearch")}
        className="text-black py-2 px-3"
        type="text"
        placeholder="Search..."
      />
      <button className="bg-gray-500 py-2 px-3">Search</button>
    </form>
  );
}
