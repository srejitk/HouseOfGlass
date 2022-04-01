import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import "./App.css";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
