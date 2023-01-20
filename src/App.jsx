import { HashRouter as Router } from "react-router-dom";
import StoreProvider from "./store/StoreProvider";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {

  return (
    <>
      <StoreProvider>
        <Router>
          <Header />
          <Main />
        </Router>
      </StoreProvider>
    </>
  )
}

export default App
