import Modal from "./components/modais";
import { ModalProvider } from "./contexts/ModalContext";
import Routes from "./routes";

function App() {
  return (
    <ModalProvider>
      <Routes />
      <Modal />
    </ModalProvider>
  );
}

export default App;
