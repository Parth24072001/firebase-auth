import "./App.css";
import { Route, Outlet, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./module/Login";
import withAuthentication from "../src/withAuthentication";
import withoutAuthentication from "../src/withoutAuthentication";
import Home from "./module/Home";

function App() {
  const UnAuthenticated = () => <Outlet />;
  return (
    <>
      <Routes>
        <Route path="/*" element={withAuthentication(Home)} />
        <Route path="/" element={withoutAuthentication(UnAuthenticated)}>
          <Route path="login" index element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
