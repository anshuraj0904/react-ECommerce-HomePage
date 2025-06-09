import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.jsx";
import { Provider } from "react-redux"; // We'll have to wrap the entire application with this Provider inorder to ensure that we can use it from anywhere in the applicatiom, just the way we did in the case of UserContext.Provider
import AppStore from "./Store/Store.js";

function App() {
  const [modeName, changeModeName] = useState("Light");
  const [name, changeName] = useState("Anshu Raj");

  return (
    <Provider store={AppStore}>
      {/* // Here, we've wrapped the entire of our application with UserContext
      using USerContext.Provider . // Also we've passed name :name, and, this
      means ki the value of name(in the UserContext variable) now is name(the
      useState). // And, passing the changeName here inside the value makes us
      legible to use this from anywhere in our application, using the
      useContext. */}
      <UserContext.Provider value={{ name: name, changeName }}>
        <div>
          <Navbar modeName={modeName} changeModeName={changeModeName} />

          {/* Only modeName passed in context, no need for changeModeName */}
          <Outlet context={{ modeName }} />

          <Footer modeName={modeName} />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
