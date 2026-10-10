import ShopByCategory from "@/components/ShopCategory/ShopByCategory";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black w-full flex flex-col justify-between">
      <div className="pt-10 flex-grow">
        {/* Menggunakan component ShopByCategory yang baru saja dibuat */}
        <ShopByCategory />
      </div>
      
      {/* Menampilkan Footer sementara untuk preview */}
      <Footer />
    </main>
  );
}
