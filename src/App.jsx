import { HashRouter as Router } from "react-router-dom";
import StoreProvider from "./store/StoreProvider";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <StoreProvider>
        <Router>
          <Header />
          <Main />
        </Router>
        <Footer />
      </StoreProvider>
    </>
  )
}

export default App
