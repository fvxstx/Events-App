import Footer from "../footer/footer";
import Header from "../header/Header";

const MainLayout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
