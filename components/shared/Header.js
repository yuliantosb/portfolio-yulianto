import React from "react";
import Link from "next/link";
import "../../styles/main.scss";

class Header extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <React.Fragment>
        <a>{title}</a>
        {this.props.children}
        <a className="customClass">I am a custom class</a>
        <a className="customClassFromFile">I am a custom class</a>
        <Link href="/">
          <a style={{ fontSize: "20px" }}>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
            .customClass {
              color: red;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header;
