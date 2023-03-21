import CatEvents from "@/src/components/events/catEvents";
import { GetStaticPaths, GetStaticProps } from "next";

const EventCategories = (props: any) => {
  const { data } = props;
  const { pageName } = props;

  return <CatEvents data={data} pageName={pageName} />;
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
