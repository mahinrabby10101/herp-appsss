import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import useLocalStorage from "./utils/useLocalStorage";
import { createAppRouter } from "./router/routes";

export default function App() {
  const [installedIds, setInstalledIds] = useLocalStorage("hero_installed_ids", []);
  const [installedData, setInstalledData] = useLocalStorage("hero_installed_data", []);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!Array.isArray(installedIds)) setInstalledIds([]);
    if (!Array.isArray(installedData)) setInstalledData([]);
  }, []);

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

  const handleUninstall = (id) => {
    setInstalledIds(installedIds.filter((i) => i !== id));
    setInstalledData(installedData.filter((d) => d.id !== id));
    setToast({ type: "success", text: `App uninstalled` });
    setTimeout(() => setToast(null), 2000);
  };

 
  const router = createAppRouter({
    handleInstall,
    handleUninstall,
    installedIds,
    installedData,
    toast,
  });

  return <RouterProvider router={router} />;
}
