import { ToastContainer } from "react-toastify";
import { Header } from "./assets/components/Header";
import { Orders } from "./assets/components/Orders";
import { GlobalStyles } from "./styles/GlobalStyles";
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position="bottom-center"/>
    </>
  );
}
