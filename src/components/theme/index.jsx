import React, { useEffect, useState } from "react";
import { ImCog } from "react-icons/im";
import classnames from "classnames";
import setTheme from "../../helpers/Theme";
import "./styles.scss";

const colorArray = [
  {
    id: "yellow",
    bgColor: "#ffdd40",
  },
  {
    id: "red",
    bgColor: "#e82a2a",
  },
  {
    id: "green",
    bgColor: "#6ac045",
  },
  {
    id: "blue",
    bgColor: "#5078ff",
  },
];

const Theme = (props) => {
  const [theme, setCurrentTheme] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  const toggleTheme = (colorId) => {
    setCurrentTheme(colorId);
    setToggle(false);
  };

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <div
      className={classnames(
        "theme-wrapper",
        { active: toggle },
        { hasHeader: props.hasHeader }
      )}
    >
      <div className="theme-wrapper__toggle-icon">
        <ImCog onClick={() => setToggle(!toggle)} size={40} />
      </div>
      <div className="theme-wrapper__menu">
        <ul className="theme-color">
          {colorArray.map((item, key) => (
            <li
              key={key}
              onClick={() => toggleTheme(item.id)}
              style={{ backgroundColor: item.bgColor }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Theme;
