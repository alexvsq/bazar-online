import SearchInupt from "@/components/searchInupt";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col items-center justify-center gap-4">
      <h1 className=" text-3xl font-bold">Bazar Online</h1>
      <SearchInupt />
    </div>
  );
}
