import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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



export default function App() {
  // LocalStorage hooks
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
    setInstalledIds(installedIds.filter(i => i !== id));
    setInstalledData(installedData.filter(d => d.id !== id));
    setToast({ type: "success", text: `App uninstalled` });
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Loader show={false} />

        <Routes>
          <Route path="/" element={<Home apps={APPS} />} />
          <Route path="/apps" element={<AllApps apps={APPS} />} />
          <Route
            path="/apps/:id"
            element={
              <AppDetails
                apps={APPS}
                onInstall={handleInstall}
                installedIds={installedIds}
              />
            }
          />
          <Route
            path="/installation"
            element={
              <MyInstallation
                installedApps={installedData}
                onUninstall={handleUninstall}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <div style={{ height: 40 }} />
        <Footer />

        {toast && <ToastMsg toast={toast} />}
      </div>
    </Router>
  );
}
