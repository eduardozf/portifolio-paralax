import Link from "next/link";

interface IButtonProps {
  text: string;
  to: string;
  styles?: "disabled" | "normal" | "ghost";
  openNewTab?: boolean;
}

const HeaderButton = ({
  text = "Button",
  styles = "ghost",
  to,
  openNewTab,
}: IButtonProps) => {
  const stylesList = {
    disabled: "cursor-not-allowed opacity-50 pointer-events-none",
    normal: "bg-white text-black hover:scale-110",
    ghost: "bg-none text-white drop-shadow-md hover:scale-110",
  };

  return (
    <Link
      href={to}
      className={`h-fit text-md uppercase ${stylesList[styles]}`}
      target={openNewTab ? "_blank" : undefined}
    >
      {text}
    </Link>
  );
};

export default HeaderButton;
