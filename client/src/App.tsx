import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
        <ToastContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
