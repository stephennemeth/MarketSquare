import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { ThemeProviderComp } from "./components/ThemeProvider";
import { PrivateRoute } from "./components/PrivateRoute";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
const ViewItem = lazy(() => import("./pages/ViewItem"));
const EditItem = lazy(() => import("./pages/EditItem"));
const CreateItem = lazy(() => import("./pages/CreateItem"));

function App() {
  const [authState, setAuthState] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const updateAuthState = (newState) => {
    setAuthState(newState);
  };

  return (
    <BrowserRouter>
      <ThemeProviderComp darkMode={darkMode}>
        <Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            <Route path="/" element={<Home authState={authState} setDarkMode={setDarkMode} />} />
            <Route path="/login" element={<Login authState={authState} setAuthState={updateAuthState} />} />
            <Route
              path="/item/view/:slug"
              element={<PrivateRoute component={ViewItem} authState={authState} />}
            />
            <Route
              path="/item/edit/:slug"
              element={<PrivateRoute component={EditItem} authState={authState} />}
            />
            <Route
              path="/item/create"
              element={<PrivateRoute component={CreateItem} authState={authState} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ThemeProviderComp>
    </BrowserRouter>
  );
}

export default App;
