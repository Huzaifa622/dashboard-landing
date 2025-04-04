import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Layout from "./layout/layout";
import Pricing from "./pages/pricing";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
