import Image from "next/image";
import Link from "next/link";

import HeaderButton from "../HeaderButton/index";

const Header = () => {
  return (
    <header className="w-full  lg:p-[35px] 2xl:p-[55px] flex flex-row justify-between align-middle absolute inset-x-0 z-20">
      <div>
        <Link href="#">
          <Image
            src="/assets/Logo.svg"
            height={128}
            width={128}
            alt="Blue Macaw Logo"
            className="lg:h-[100px] lg:w-[100px] 2xl:h-[128px] 2xl:w-[128px]"
          ></Image>
        </Link>
      </div>
      <div className="flex gap-10 ">
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
      </div>
    </header>
  );
};

export default Header;
