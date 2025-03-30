import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Layout from "./layout/layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
