import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";

// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-dashboard-react/components/buttonStyle.js";


const useStyles = makeStyles(styles);

export default function UpdateButton(props) { 
  const classes = useStyles();  
  const {
    address,
    buttonText
  } = props; 

  const handleClick = () =>{ 
    console.log("button pushed");
  }

  return (
    <Link to={address}>
      
      <Button className={classes.button} onClick={handleClick}>{buttonText}</Button>
    </Link>
  );
};

UpdateButton.propTypes = {
  routerAddress: PropTypes.string,
  buttonText: PropTypes.string,
};

