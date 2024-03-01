import Card from "@/componentes/Card";
import Image from "next/image";

export default function Home() {
  const dados1 = {
    imageUrl: "https://cdn.pixabay.com/photo/2023/08/24/01/01/boy-8209561_640.jpg",
    title: "Titulo do card",
    calories: 70,
    price: 1.98
  }

  const dados2 = {
    imageUrl: "https://media.themoviedb.org/t/p/w94_and_h141_bestv2/eebNTSRa5Hh5skPKGdGJIJpo9Ls.jpg",
    title: "Titulo do card 2",
    calories: 100,
    price: 12.88
  }

  return (
    <main>
      <section className="flex gap-2 flex-wrap">
        <Card data={dados1} />
        <Card data={dados2} />
      </section>
    </main>
  );
}

