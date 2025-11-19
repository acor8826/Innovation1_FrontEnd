import './styles/globals.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Innovation1Landing from './pages/Innovation1Landing';
import Innovation1Login from './pages/Innovation1Login';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Innovation1Landing />} />
        <Route path="/login" element={<Innovation1Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <ProtectedRoute>
              <ProjectDetail />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
