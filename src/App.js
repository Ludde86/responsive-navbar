import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
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

  /* 
  we pass a function to setState, and in that function we will receive the previous state 
  as an argument (this is passed into the function by react).
  */

  /* 
  then we return our object which updates the state and there we can now set the 
  sideDrawerOpen to the opposite of previous state.
  This will make sure that if the sideDrawerOpen is true it will be saved as false and the 
  other way around.
  */

  /*
  We can now use the state of sideDrawerOpen to decide whether the SideDrawer and the 
  Backdrop are shown.
  */

  /* 
  To make sure that this handler can get triggered, we'll pass it to the Toolbar, because the 
  Toolbar will hold the button which triggers that. So we need tp pass the props to the 
  Toolbar, and then point it to this.drawerToogleClickHandler.
  */

  /* 
  In the Toolbar we can work with that prop with the drawerClickHandler prop, and there we 
  receive props, and then we need to forward this to the DrawerToggleButton (in Toolbar).
  */
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    let sideDrawer;
    let backdrop;

    // If the state of sideDrawerOpen is true, we will render out via these references.
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }
    return (
      <div style={{ height: "100%" }}>
        {/* Here we pass the function as a reference (with props) to Toolbar*/}
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;
