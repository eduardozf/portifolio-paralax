import Image from "next/image";
import Link from "next/link";

import HeaderButton from "../HeaderButton/index";

const Header = () => {
  return (
    <header className="w-full p-[55px] flex flex-row justify-between align-middle absolute inset-x-0 z-20">
      <div>
        <Link href="#">
          <Image
            src="/assets/logo.svg"
            height={128}
            width={128}
            alt="Blue Macaw Logo"
          ></Image>
        </Link>
      </div>
      <div className="flex gap-10 ">
        <HeaderButton text="Home" to="#" />
        <HeaderButton text="FAQ" to="#faq" />
        <HeaderButton
          text="LINKEDIN"
          to="https://www.linkedin.com/in/eduardozf1"
          openNewTab
        />
        <HeaderButton
          text="GITHUB"
          to="https://github.com/eduardozf/portifolio-paralax"
          openNewTab
        />
        {/* TODO Select language */}
        <HeaderButton text="LANGUAGE" to="/" />
      </div>
    </header>
  );
};

export default Header;
