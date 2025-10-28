import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/AppHeader";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ToastMsg from "./components/ToastMsg";

export default function RootLayout({
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

      {/* Where pages render */}
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
