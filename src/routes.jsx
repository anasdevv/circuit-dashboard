import { createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import TunnelView from './Pages/TunnelView';
import MaintenanceInfo from './Pages/MaintenanceInfo';
import CircuitDashboard from './Pages/CircuitDashboard';

export const routes = createBrowserRouter([
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'tunnel-view',
        element: <TunnelView />,
      },
      {
        path: 'maintenance-info',
        element: <MaintenanceInfo />,
      },
      {
        path: 'circuit-dashboard',
        element: <CircuitDashboard />,
      },
    ],
  },
]);
