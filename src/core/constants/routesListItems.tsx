import { PrivateRoutes, PublicRoutes } from "@/core/enums";
import ArticleIcon from "@mui/icons-material/Article";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import LoginIcon from "@mui/icons-material/Login";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

interface RouteItem {
  route: string;
  name: string;
  icon: JSX.Element;
  params: unknown;
}

const privateRoutesList: RouteItem[] = [
  {
    route: PrivateRoutes.DASHBOARD,
    name: "Dashboard",
    icon: <EqualizerIcon />,
    params: {},
  },
  {
    route: PrivateRoutes.MEMBERS,
    name: "Members",
    icon: <GroupIcon />,
    params: {},
  },
  {
    route: PrivateRoutes.PLANS,
    name: "Plans",
    icon: <ArticleIcon />,
    params: {},
  },
  {
    route: PrivateRoutes.SUBSCRIPTIONS,
    name: "Subscriptions",
    icon: <CardMembershipIcon />,
    params: {},
  },
  {
    route: PrivateRoutes.PRODUCTS,
    name: "Products",
    icon: <InventoryIcon />,
    params: {},
  },
  {
    route: PrivateRoutes.SALES,
    name: "Sales",
    icon: <PointOfSaleIcon />,
    params: {},
  },
];

const publicRoutesList: RouteItem[] = [
  {
    route: PublicRoutes.START,
    name: "Start",
    icon: <HomeIcon />,
    params: {},
  },
  {
    route: PublicRoutes.LOGIN,
    name: "Login",
    icon: <LoginIcon />,
    params: {},
  },
];

export { privateRoutesList, publicRoutesList };
