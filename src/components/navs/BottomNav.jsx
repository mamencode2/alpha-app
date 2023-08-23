import React from "react";
import {
  HomeRounded,
  PersonRounded,
  HomeOutlined,
  Search,
  SearchRounded,
  Book,
  BookOutlined,
  PersonOutlineOutlined,
  ManageSearchOutlined,
  VpnKeyOutlined,
  VpnKey,
  CompareArrows,
  CompareArrowsOutlined
} from "@mui/icons-material";
import {
  NavLink,
  useMatch,
  useParams,
  useLocation,
  useMatches,
  useRoutes
} from "react-router-dom";
import "./btmNav.css";

let routes = [
  {
    routeLabel: "Lessons",
    amRouteLabel: "ትምህርቶች",
    path: "/",
    component: (isActive) => {
      return <div>{isActive ? <HomeRounded /> : <HomeOutlined />}</div>;
    }
  },
  {
    routeLabel: "Dictionery",
    amRouteLabel: "መዝገበ ቃላት",

    path: "/dectionery",
    component: (isActive) => {
      return <div>{isActive ? <Search /> : <SearchRounded />}</div>;
    }
  },
  {
    routeLabel: "Treasure",
    amRouteLabel: "ስጦታዎች",

    path: "/treasure",
    component: (isActive) => {
      return <div>{isActive ? <VpnKey /> : <VpnKeyOutlined />}</div>;
    }
  },
  {
    routeLabel: "Alphabet",
    amRouteLabel: "ፊደላት",

    path: "/alphabet",
    component: (isActive) => {
      return <div>{isActive ? <Book /> : <BookOutlined />}</div>;
    }
  },
  {
    routeLabel: "Study",
    amRouteLabel: "ጥናት",

    path: "/study",
    component: (isActive) => {
      return (
        <div>{isActive ? <CompareArrows /> : <CompareArrowsOutlined />}</div>
      );
    }
  }
];
export default function BottomNav() {
  const activeRoutes = useRoutes(routes);

  let { pathname } = useLocation();
  return (
    <div className="header">
      <nav>
        <ul>
          {routes.map((route) => {
            let isActive = route.path === pathname;
            return (
              <NavLink key={route.path} to={route.path}>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: isActive ? "#000" : ""
                  }}
                >
                  {route.component(isActive)}

                  <span
                    style={{
                      fontSize: "10px",
                      color: isActive ? "#000" : ""
                    }}
                  >
                    {route.amRouteLabel}
                  </span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
