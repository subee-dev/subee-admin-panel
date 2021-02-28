import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// core components
import styles from "assets/jss/material-dashboard-react/components/textInputFieldStyle.js";

const useStyles = makeStyles(styles);

export default function TextInputField(props) {
  const classes = useStyles();
  const { id, label, defaultValue, onChange } = props;

  return (
    <form noValidate autoComplete="off">
      <TextField
        key={id}
        className={classes.textfield}
        label={label}
        defaultValue={defaultValue}
        variant="outlined"
        onChange={onChange}
      />
    </form>
  );
}

TextInputField.proptype = {
  id: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};
