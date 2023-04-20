import React, { useState, Suspense, createContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";

import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { ThemeProviderComp } from "./components/ThemeProvider";
import { ItemsContextProvider } from "./context/ItemsContextProvider";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUp";

export const AppContext = createContext()
const queryClient = new QueryClient();

function App() {
  const [authState, setAuthState] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState({})

  return (
    <AppContext.Provider value={{ authState, setAuthState, darkMode, setDarkMode, user, setUser }}>
      <QueryClientProvider client={queryClient}>
        <ItemsContextProvider>
          <BrowserRouter>
            <ThemeProviderComp darkMode={darkMode}>
              <Suspense fallback={<LoadingSkeleton />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ThemeProviderComp>
          </BrowserRouter>
        </ItemsContextProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
