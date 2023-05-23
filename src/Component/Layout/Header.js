import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>XOMO</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-img"]}>
        {/* <img
          src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=1060&t=st=1684326281~exp=1684326881~hmac=e3c2e2380e5db2b5cdd02b31ad373bed7063c2941083fa14a88c9ca9c5543c38"
          alt=""
          srcset=""
        /> */}
      </div>
    </>
  );
};

export default Header;
