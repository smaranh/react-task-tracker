import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

export const Header = ({title}) => {

    const onClick = () => {
        alert("From header");
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text="Add" color="green" onClick={onClick}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}