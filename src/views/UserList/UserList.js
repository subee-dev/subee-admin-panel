import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function UserList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const [url, setUrl] = useState("http://localhost:3000/api/v1/users");
  const [tableHead, setTableHead] = useState([]);

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios.get(url, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1YmVlLmFkbWluQHN1YmVlLmFwcCIsImVtYWlsUHJvdmlkZXIiOiJnb29nbGUiLCJyb2xlcyI6WyJzdXBlcl9hZG1pbiJdLCJpYXQiOjE2MTA4NTcyMDEsImV4cCI6MTYxMDg2MDgwMX0.tRtfd8aObEEd5LWixXPhFNpCS1-ISPZswiSKEZPH_lM`
        }
      });
      // TODO: handle error
      // .catch(err => throw new Error(`Data Fetch Failed: ${url} fail`));

      const data = result.data.data;
      const users = data.map(e => Object.values(e));

      setData(users);
      setTableHead(Object.keys(data[0]));
    };

    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>User List</h4>
            <p className={classes.cardCategoryWhite}>
              모든 써비들의 중요한 정보
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={tableHead}
              tableData={data}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
