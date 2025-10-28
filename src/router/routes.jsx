import React from "react";
import { createBrowserRouter } from "react-router-dom";


import RootLayout from "../RootLayout";


import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import AppDetails from "../pages/AppDetails";
import MyInstallation from "../pages/MyInstallation";
import ErrorPage from "../pages/ErrorPage";


import APPS from "../data/appsData";


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
