import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            src={"/images/logo_black.png"}
            width={50}
            height={50}
            alt={"logo"}
          />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events{" "}
                </Link>
              </li>
              <li>
                <Link href="aboutUs" passHref>
                  About Us{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> lorem sed ut percipeler unde</p>
      </div>
    </header>
  );
};

export default Header;
