import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dropzone from 'react-dropzone-uploader'
import Grid from '@material-ui/core/Grid';


// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";

// core components
import styles from "assets/jss/material-dashboard-react/components/imageInputFIeldStyle.js";

const useStyles = makeStyles(styles);

const ImageInputField = () => {

  const classes = useStyles();

  const getUploadParams = ({ meta }) => {
    const url = 'https://httpbin.org/post'
    return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
  }
  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }
  return (
    <Grid className={classes.grid} container spacing={2} justify="center" alignItems="center">
      <Dropzone
        className={classes.dropzone}
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*"
        inputContent={(files, extra) => (extra.reject ? 'Image' : 'Drag Files')}
      />
    </Grid>
  )
}

export default ImageInputField;
