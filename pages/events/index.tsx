import AllEvents from "@/src/components/events/eventPage";
import { GetServerSideProps } from "next";

const Events = (props: any) => {
  const { data } = props;
  return <AllEvents data={data} />;
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
