import {
  blackColor,
  whiteColor,
  subeeColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

const cardStyle = {
  card: {
    border: "1",
    borderColor:'#000',
    marginBottom: "25px",
    marginTop: "10px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(subeeColor) + ", 0.87)",
    background: whiteColor,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    },
  cardTitle: {
      marginTop: "0px",
      marginBottom: "0px",
      textAlign: "center"
    }
  }
};

export default cardStyle;
