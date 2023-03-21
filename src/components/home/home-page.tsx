import Image from "next/image";
import Link from "next/link";

interface Propss {
  id: string;
  title: string;
  description: string;
  image: string;
}

const HomePage = (props: any) => {
  const { data } = props;
  return (
    <main>
      {data.map((ev: Propss) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <Image src={ev.image} alt={""} width={300} height={300} />{" "}
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
