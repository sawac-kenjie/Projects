import { Home, List, Settings, Star } from "lucide-react";
import "./App.css";
import { Separator } from "./components/ui/separator";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./components/ui/sidebar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";
import QuizPage from "./pages/QuizPage";

const ApplicationSidebarGroup = () => {
  const menuItems = [
    { title: "Home", icon: Home, url: "/" },
    { title: "Categories", icon: List, url: "/categories" },
    { title: "Favorites", icon: Star, url: "/favorites" },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton asChild>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const SettingsSidebarGroup = () => {
  const menuItems = [{ title: "Preferences", icon: Settings, url: "#" }];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Settings</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight">
              Open Trivia
            </h1>
            <p className="text-muted-foreground text-xl">
              For every <em>Juan</em>
            </p>
            <Separator />
          </SidebarHeader>

          <SidebarContent>
            <ApplicationSidebarGroup />
            <SettingsSidebarGroup />
          </SidebarContent>

          <SidebarFooter>
            <p className="text-muted-foreground text-sm">
              WMAD-302 Group ? <br />© 2025
            </p>
          </SidebarFooter>
        </Sidebar>

        <main className="p-6 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
          </Routes>
        </main>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
