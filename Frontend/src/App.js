import { Component, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { AuthProvider } from "./context/ProtectedRoutes";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <HashRouter>
          <Suspense>
            <Routes>
              <Route path="/login" name="Login" element={<Login />} />
              <Route
                path="/registration"
                name="Registration"
                element={<Registration />}
              />
              <Route path="*" name="Home" element={<Home />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </AuthProvider>
    );
  }
}

export default App;
