import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { MainLayout } from "@/components/layout/MainLayout";
import { Dashboard } from "@/pages/Dashboard";
import { DetailedAnalytics } from "@/pages/DetailedAnalytics";
import { UserManagement } from "@/pages/UserManagement";
import { Revenue } from "@/pages/Revenue";
import { Settings } from "@/pages/Settings";
import { routes } from "@/config/routes";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.dashboard}
            element={
              <MainLayout title="Dashboard Overview">
                <Dashboard />
              </MainLayout>
            }
          />
          <Route
            path={routes.analytics}
            element={
              <MainLayout title="Analytics Dashboard">
                <DetailedAnalytics />
              </MainLayout>
            }
          />
          <Route
            path={routes.users}
            element={
              <MainLayout title="User Management" showExport={false}>
                <UserManagement />
              </MainLayout>
            }
          />
          <Route
            path={routes.revenue}
            element={
              <MainLayout title="Revenue" showExport={false}>
                <Revenue />
              </MainLayout>
            }
          />
          <Route
            path={routes.settings}
            element={
              <MainLayout title="Settings" showExport={false}>
                <Settings />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
