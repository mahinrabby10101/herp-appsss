import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Layout
import RootLayout from "../RootLayout";

// Pages
import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import AppDetails from "../pages/AppDetails";
import MyInstallation from "../pages/MyInstallation";
import ErrorPage from "../pages/ErrorPage";

// Data
import APPS from "../data/appsData";

// 👇 This function builds your router with props passed in from App.jsx
export const createAppRouter = ({
  handleInstall,
  handleUninstall,
  installedIds,
  installedData,
  toast,
}) =>
  createBrowserRouter([
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
