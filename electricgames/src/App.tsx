import NavbarComponent from "./components/Navigation/NavbarComponent";
import { Home, AllChampions, UpdateChampion, SearchChampion } from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AddNew } from "./pages/AddNew";
import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavbarComponent></NavbarComponent>
        <Routes>
          <Route path="/AllChampions" element={<AllChampions />}></Route>

          <Route path="/AddNew" element={<AddNew />}></Route>
          <Route path="/UpdateChampion" element={<UpdateChampion />}></Route>

          <Route path="/SearchChampion" element={<SearchChampion />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
