import {Routes, Route,BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/products" exact element={<Products/>}></Route>
        <Route path="/analytics" exact element={<Analytics/>}></Route>
        <Route path="/settings" exact element={<Settings/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
