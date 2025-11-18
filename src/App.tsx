import { HashRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { Innovation1Landing } from './pages/Innovation1Landing';
import { Innovation1Login } from './pages/Innovation1Login';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Innovation1 Landing - Homepage */}
        <Route path="/" element={<Innovation1Landing />} />
        <Route path="/login" element={<Innovation1Login />} />

        {/* Dashboard Routes */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-gray-50">
              <Sidebar />
              <div className="ml-64">
                <Routes>
                  <Route
                    path="/dashboard"
                    element={
                      <>
                        <Header title="Dashboard" />
                        <main className="p-8">
                          <Dashboard />
                        </main>
                      </>
                    }
                  />
                  <Route
                    path="/projects"
                    element={
                      <>
                        <Header title="Projects" />
                        <main className="p-8">
                          <Projects />
                        </main>
                      </>
                    }
                  />
                  <Route
                    path="/projects/:id"
                    element={
                      <>
                        <Header title="Project Details" />
                        <main className="p-8">
                          <ProjectDetail />
                        </main>
                      </>
                    }
                  />
                  <Route
                    path="/tasks"
                    element={
                      <>
                        <Header title="Tasks" />
                        <main className="p-8">
                          <PlaceholderPage
                            title="Tasks"
                            description="Task management coming soon"
                          />
                        </main>
                      </>
                    }
                  />
                  <Route
                    path="/team"
                    element={
                      <>
                        <Header title="Team" />
                        <main className="p-8">
                          <PlaceholderPage
                            title="Team"
                            description="Team management coming soon"
                          />
                        </main>
                      </>
                    }
                  />
                  <Route
                    path="/activity"
                    element={
                      <>
                        <Header title="Activity" />
                        <main className="p-8">
                          <PlaceholderPage
                            title="Activity"
                            description="Activity feed coming soon"
                          />
                        </main>
                      </>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <>
                        <Header title="Settings" />
                        <main className="p-8">
                          <PlaceholderPage
                            title="Settings"
                            description="Settings coming soon"
                          />
                        </main>
                      </>
                    }
                  />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}