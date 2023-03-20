import { GetStaticPaths, GetStaticProps } from "next";
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

const EventCategories = (props: any) => {
  const { data } = props;
  const { pageName } = props;

  return (
    <div>
      <h1>Events in {pageName}</h1>
      {data.map((ev: Propss) => (
        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
          <Image src={ev.image} alt={ev.title} width={300} height={300} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default EventCategories;

export const getStaticPaths: GetStaticPaths = async () => {
  const { events_categories } = await import("../../../data/data.json");

  const allPaths = events_categories.map((event) => {
    return {
      params: {
        cat: event.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.cat;
  const { allEvents } = await import("../../../data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, pageName: id } };
};
