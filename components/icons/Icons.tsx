import HomeIcon from "../../assets/images/icons/tabs/Home.svg";

interface IconProps {
  name: "home";
  size?: number;
  fill?: string;
  stroke?: string;
}

export default function Icon({
  name,
  size = 29,
  fill = "none",
  stroke,
}: IconProps) {
  switch (name) {
    case "home":
      return <HomeIcon width={size} height={size} fill={fill} color={stroke} />;
    default:
      return null;
  }
}
