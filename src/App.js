import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard.html" element={<Dashboard />}></Route>
            <Route path="forms" element={<Forms />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
