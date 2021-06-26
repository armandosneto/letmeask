import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import { NewRoom } from "./Pages/NewRoom";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
