import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// core components
import styles from "assets/jss/material-dashboard-react/components/textInputFieldStyle.js";

const useStyles = makeStyles(styles);

export default function TextInputField (props) {
  const classes = useStyles();
  const {
    label,
    defaultValue
  } = props;

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <form noValidate autoComplete="off">
            <TextField
            className={classes.textfield}
            id="outlined-required"
            label= {label}
            defaultValue= {defaultValue}
            variant="outlined"
          />
      </form>
    </Grid>
  );
}