import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import LoadingSkeleton from "./components/LoadingSkeleton";
import PrivateRoute from "./components/PrivateRoute";

import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
const ViewItem = lazy(() => import("./pages/ViewItem"));
const EditItem = lazy(() => import("./pages/EditItem"));
const CreateItem = lazy(() => import("./pages/CreateItem"));

function App() {
  const [authState, setAuthState] = useState(false);

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
    </BrowserRouter>
  );
}

export default App;
