import React, { useState, Suspense, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";

import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { ThemeProvider } from "./components/ThemeProvider";
import { ItemsContextProvider } from "./context/ItemsContextProvider";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import axios from 'axios'

export const AppContext = createContext()
const queryClient = new QueryClient();

function App() {
  const [authState, setAuthState] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState({})

  useEffect(() => {
    checkLogin()
  }, [])

  const checkLogin = async () => {
    try {
      const token = localStorage.getItem("token")
      const id = localStorage.getItem("id")
      if (!token || !id) {
        localStorage.setItem('token', null)
        localStorage.setItem('username', null)
        setUser({})
        return
      }

      const tokenResponse = await axios.post(
        "http://localhost:8082/api/users/checkToken",
        null,
        {headers : {'token' : token}}
      )
      
      if (tokenResponse.data) {
        const userRes = await axios.get(
          `http://localhost:8082/api/users/${id}`,
          {headers : {'token' : token}}
        )
        setUser({
          token : token,
          name : userRes.data.firstName,
          username : userRes.data.username
        })
        setAuthState(true)
      } else {
        setUser({})
        setAuthState(false)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <AppContext.Provider value={{ authState, setAuthState, darkMode, setDarkMode, user, setUser }}>
      <QueryClientProvider client={queryClient}>
        <ItemsContextProvider>
          <BrowserRouter>
            <ThemeProvider darkMode={darkMode}>
              <Suspense fallback={<LoadingSkeleton />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ThemeProvider>
          </BrowserRouter>
        </ItemsContextProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
