import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
// Export Button

//CSS classes
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onclick,
  btnStyle,
  btnSize,
}) => {
    //ternary operation if btn false it will by default render btn primary
  const checkBtnStyle = STYLES.includes(btnStyle)
    ? btnStyle
    : STYLES[0];
    //if btn false it will by default render btn medium
    const checkBtnSize = SIZES.includes(btnSize)
    ? btnSize
    : SIZES[0];
    return (
        <Link to='/contact' className='btnMobile'>
            <button className={`btn ${checkBtnStyle} ${checkBtnSize}`}
            onclick= {onclick}
            type={type}>
                {children}
            </button>
        </Link>
    )
};
