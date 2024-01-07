import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/header";
import HomePage from "./pages/home-page";
import Footer from "./layout/footer";
// import {users} from "./data"
// import users from "./data/index.js";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HomePage/> 
      <Footer />
    </>
  );
}

export default App;
