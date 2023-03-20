import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

interface Propss {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Events = (props: any) => {
  const { data } = props;

  return (
    <>
      <header>
        <nav>
          <Link href="/events" passHref>
            Events{" "}
          </Link>
          <Link href="/" passHref>
            Home{" "}
          </Link>
          <Link href="aboutUs" passHref>
            About Us{" "}
          </Link>
        </nav>
      </header>

      <main>
        <h1>Event Page</h1>
        <div>
          {data.map((ev: Propss) => (
            <>
              <Link key={ev.id} href={`/events/${ev.id}`} passHref>
                <Image src={ev.image} alt={ev.title} width={300} height={300} />
                <h2>{ev.title}</h2>
              </Link>
            </>
          ))}
        </div>
      </main>
    </>
  );
};

export default Events;

export const getServerSideProps: GetServerSideProps = async () => {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
};
