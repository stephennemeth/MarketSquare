import React, { useState, lazy, Suspense, createContext} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { ThemeProviderComp } from "./components/ThemeProvider";
import { PrivateRoute } from "./components/PrivateRoute";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUp";
const ViewItem = lazy(() => import("./pages/ViewItem"));
const EditItem = lazy(() => import("./pages/EditItem"));
const CreateItem = lazy(() => import("./pages/CreateItem"));

export const AppContext = createContext()

function App() {
  const [authState, setAuthState] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState({})

  const updateAuthState = (newState) => {
    setAuthState(newState);
  };

  return (
    <AppContext.Provider value={{authState, setAuthState, darkMode, setDarkMode, user, setUser}}>
      <BrowserRouter>
        <ThemeProviderComp darkMode={darkMode}>
          <Suspense fallback={<LoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<Home authState={authState} setAuthState={setAuthState} setDarkMode={setDarkMode} />} />
              <Route path="/login" element={<Login authState={authState} setAuthState={updateAuthState} setDarkMode={setDarkMode} darkMode={darkMode} />} />
              <Route path="/signup" element={<SignUpPage authState={authState} setAuthState={updateAuthState} setDarkMode={setDarkMode} darkMode={darkMode}/>} />
              <Route path="/item/view/:slug" element={<ViewItem authState={authState} />} />
              <Route
                path="/item/edit/:slug"
                element={<PrivateRoute component={EditItem} authState={authState}/>}
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
    </AppContext.Provider>
  );
}

export default App;
