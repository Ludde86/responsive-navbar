import React from "react";
import DrawerToogleButton from "../SideDrawer/DrawerToogleButton";
import "./Toolbar.css";

// create a functional component
// storing it in a toolbar constant
// where we will get some props
// and then return some JSX

/* 
=> shortcut for using curly bracers and return statement

const toolbar = props => {

}
*/

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        {/* And here we forward it to the DrawerToggleButton by using the function reference */}
        {/* Which we receive on these props */}
        {/* And passing it to the click-props on the DrawerToogleButton */}
        <DrawerToogleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar-logo">
        <a href="/">THE LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar-navigation-items">
        <ul>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
