import { ReactNode } from "react";

import { AuthProvider } from "./auth/authContext";
import AppRoutes from "./routes/AppRouter";

interface AppProps {
  children: ReactNode;
}

function App() {
  const AuthState = ({ children }: AppProps) => (
    <AuthProvider>{children}</AuthProvider>
  );

  return (
    <AuthState>
      <AppRoutes />
    </AuthState>
  );
}

export default App;
