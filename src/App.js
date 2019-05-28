import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  // set up an initial state whether the side drawer is visible or not.
  // we can call this state
  state = {
    sideDrawerOpen: false
  };

  // define a function that react to a click on the toolbar
  // we are using an arrow function to do that
  /* 
  which adds it as a property to the app component (to the app object), but ensures that THIS 
  keyword keeps its scope and will always refer to this component. 
  */
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  let sideDrawer;
  let backdrop;

  if (this.state.sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop />;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar />
      {sideDrawer}
      {backdrop}
      <main style={{ marginTop: "64px" }}>
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;
