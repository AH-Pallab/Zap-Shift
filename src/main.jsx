import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/routes';
import AuthProvider from './Providers/AuthProvider';


createRoot(document.getElementById("root")).render(
  <div className="urbanist">
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>,
);
