import Link from "next/link";

const Header = () => {
  return (
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
  );
};

export default Header;
