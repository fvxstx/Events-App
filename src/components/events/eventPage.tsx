import Image from "next/image";
import Link from "next/link";

interface Propss {
  id: string;
  title: string;
  description: string;
  image: string;
}

const AllEvents = (props: any) => {
  const { data } = props;

  return (
    <div className={"eventsPage"}>
      {data.map((ev: Propss) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
          <Image src={ev.image} alt={ev.title} width={400} height={400} />
          <h2>{ev.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
