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
    <div className="homeBody">
      {data.map((ev: Propss) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
          <Image src={ev.image} alt={""} width={500} height={300} />

          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
