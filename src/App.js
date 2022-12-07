import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import { SelectContextProvider } from "./contexts/SelectContext";
import { WheatherContextProvider } from "./contexts/WheatherContext";

function App() {
  return (
    <div className="App">
      <SelectContextProvider>
        <WheatherContextProvider>
          <Header />
          <Main />
          <Footer />
        </WheatherContextProvider>
      </SelectContextProvider>
    </div>
  );
}

export default App;