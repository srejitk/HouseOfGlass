import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import "./App.css";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
      <Toaster />
      <ToastContainer />
    </div>
  );
}

export default App;
