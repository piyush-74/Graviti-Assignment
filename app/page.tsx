import Image from "next/image";
import Home from '@/components/shared/Home'
import Header from '@/components/shared/Header'

export default function DefaultPage() {
  return (
    <main className="min-h-screen h-full bg-slate-200">
      <Header />
      <Home />
    </main>
  );
}
