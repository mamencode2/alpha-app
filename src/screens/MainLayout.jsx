import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import BottomNav from "../components/navs/BottomNav";
//import BottomNav from "../components/nav/BottomNav";
const PageLayout = ({ children }) => children;

export default function MainLayout() {
  return (
    <PageLayout>
      <BottomNav />
      <Outlet />

      <ScrollRestoration />
    </PageLayout>
  );
}
