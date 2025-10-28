import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Components
import Header from "./components/AppHeader";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ToastMsg from "./components/ToastMsg";

// Pages
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails";
import MyInstallation from "./pages/MyInstallation";
import ErrorPage from "./pages/ErrorPage";
import APPS from "./data/appsData";

// Utils
import useLocalStorage from "./utils/useLocalStorage";

// ------------------ Layout Component ------------------
function RootLayout({
  handleInstall,
  handleUninstall,
  installedIds,
  installedData,
  toast,
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Loader show={false} />

      {/* The Outlet is where child routes render */}
      <Outlet
        context={{
          handleInstall,
          handleUninstall,
          installedIds,
          installedData,
        }}
      />

      <div style={{ height: 40 }} />
      <Footer />

      {toast && <ToastMsg toast={toast} />}
    </div>
  );
}

// ------------------ Main App Component ------------------
export default function App() {
  const [installedIds, setInstalledIds] = useLocalStorage("hero_installed_ids", []);
  const [installedData, setInstalledData] = useLocalStorage("hero_installed_data", []);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!Array.isArray(installedIds)) setInstalledIds([]);
    if (!Array.isArray(installedData)) setInstalledData([]);
  }, []);

  // Install app
  const handleInstall = (app) => {
    if (installedIds.includes(app.id)) {
      setToast({ type: "info", text: "Already installed" });
      setTimeout(() => setToast(null), 1500);
      return;
    }
    setInstalledIds([...installedIds, app.id]);
    setInstalledData([...installedData, app]);
    setToast({ type: "success", text: `${app.title} installed` });
    setTimeout(() => setToast(null), 2000);
  };

  // Uninstall app
  const handleUninstall = (id) => {
    setInstalledIds(installedIds.filter((i) => i !== id));
    setInstalledData(installedData.filter((d) => d.id !== id));
    setToast({ type: "success", text: `App uninstalled` });
    setTimeout(() => setToast(null), 2000);
  };

  // ------------------ Data Router Definition ------------------
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout
          handleInstall={handleInstall}
          handleUninstall={handleUninstall}
          installedIds={installedIds}
          installedData={installedData}
          toast={toast}
        />
      ),
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home apps={APPS} /> },
        { path: "apps", element: <AllApps apps={APPS} /> },
        {
          path: "apps/:id",
          element: (
            <AppDetails
              apps={APPS}
              onInstall={handleInstall}
              installedIds={installedIds}
            />
          ),
        },
        {
          path: "installation",
          element: (
            <MyInstallation
              installedApps={installedData}
              onUninstall={handleUninstall}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
