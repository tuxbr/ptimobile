import Card from "@/componentes/Card";
import Image from "next/image";

export default function Home() {
  const dados1 = {
    imageUrl: "https://img.freepik.com/vetores-gratis/hamburguer-de-carne-e-queijo-no-fundo-branco_1308-81858.jpg?size=626&ext=jpg",
    title: "Beef Burger",
    calories: 70,
    price: '$1.98'
  }

  const dados2 = {
    imageUrl: "https://img.freepik.com/vetores-gratis/panquecas-realistas-de-cafe-da-manha-vista-superior_1284-14472.jpg?t=st=1709445779~exp=1709449379~hmac=c810a5c9935371b84f4fc9d2a7a192ff175962b398278929ebaa64f457eb71aa&w=740",
    title: "Pancakes",
    calories: 60,
    price: '$12.88'
  }

  return (
    <main>
      <section className="">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 w-60">
            <Card data={dados1} />
            <Card data={dados2} />
          </div>
        </div>
      </section>
    </main>
  );
}

