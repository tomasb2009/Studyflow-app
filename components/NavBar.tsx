import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { styled } from "nativewind";

const StyledView = styled(View);

const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
};

const NavBar = () => {
  const pathname = usePathname(); // Detectar la ruta actual

  return (
    <StyledView
      className="bg-white p-4 flex-row justify-around w-full"
      style={[shadowStyle, { position: "absolute", bottom: 0 }]}
    >
      <NavItem href="/" icon="home" active={pathname === "/"} />
      <NavItem
        href="/groups"
        icon="user-friends"
        active={pathname === "/groups"}
      />
      <NavItem href="/stats" icon="chart-line" active={pathname === "/stats"} />
      <NavItem href="/profile" icon="user" active={pathname === "/profile"} />
    </StyledView>
  );
};

const NavItem = ({
  href,
  icon,
  active,
}: {
  href: string;
  icon: string;
  active?: boolean;
}) => (
  <Link href={href} asChild>
    <FontAwesome5
      name={icon}
      size={24}
      color={active ? "#2563eb" : "#94a3b8"}
    />
  </Link>
);

export default NavBar;
