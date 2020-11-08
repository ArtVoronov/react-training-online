import React from "react";
import menuList from "./menuList";
import "./index.css";

const MainMenu = () => {
  return (
    <>
      <ul className="list">
        {menuList.map(({ url, title, isActive }) => (
          <React.Fragment key={url}>
            <li className={`${isActive ? "list-item--isActive" : "list-item"}`}>
              <a href={url}>{title}</a>
            </li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
      <ul className="sub-list">
        <li>text</li>
        <li>text</li>
      </ul>
    </>
  );
};

export default MainMenu;
