import Image from "next/image";
import Link from "next/link";

interface Propss {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
}

const CatEvents = (props: any) => {
  const { data } = props;
  const { pageName } = props;

  return (
    <div className="catEvents">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((ev: Propss) => (
          <Link
            className="card"
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
          >
            <Image src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvents;
