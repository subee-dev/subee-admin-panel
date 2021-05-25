import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dropzone from "react-dropzone-uploader";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";

// core components
import styles from "assets/jss/material-dashboard-react/components/imageInputFIeldStyle.js";

const useStyles = makeStyles(styles);

const ImageInputField = (props) => {
  const { logo, setLogo } = props;
  const classes = useStyles();

  const toast = (innerHTML) => {
    const el = document.getElementById("toast");
    el.innerHTML = innerHTML;
    el.className = "show";
    setTimeout(() => {
      el.className = el.className.replace("show", "");
    }, 3000);
  };

  const handleChangeStatus = ({ meta, remove }, status) => {
    if (status === "headers_received") {
      toast(`${meta.name} uploaded!`);
      remove();
    } else if (status === "aborted") {
      toast(`${meta.name}, upload failed...`);
    }
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f));
    setLogo(files[0].file);
    // allFiles.forEach((f) => f.remove());
  };

  return (
    <Grid
      className={classes.grid}
      container
      spacing={2}
      justify="center"
      alignItems="center"
    >
      <Dropzone
        className={classes.dropzone}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        maxSizeBytes={100 * 1024}
        multiple={false}
        canCancel={false}
        onSubmit={handleSubmit}
        accept="image/*"
        inputContent={(files, extra) =>
          extra.reject ? "Image" : "Drop A File"
        }
      />
    </Grid>
  );
};

export default ImageInputField;
