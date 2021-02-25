import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Group from "@material-ui/icons/Group";
import AccessTime from "@material-ui/icons/AccessTime";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailyUserChangeChart,
  monthlyuserChangeChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const mockData = {
  totalUser: 1000,
  dailyUserChange: 40,
  monthlyuserChange: 500,
  dailyActiveUsers: 300,
  monthlyActiveUsers: 600,


}

export default function Dashboard() {

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={6} sm={3} md={2}>
          <Card>
            <CardHeader color="success" stats icon>
              <p className={classes.cardCategory}>Total Number of Users</p>
              <h3 className={classes.cardTitle}>
                {mockData.totalUser} <small>써비</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <PersonAdd />
                {mockData.dailyUserChange}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={3} md={2}> 
          <Card>
            <CardHeader color="success" stats icon>
              <p className={classes.cardCategory}>Daily Active Users</p>
              <h3 className={classes.cardTitle}>
                {mockData.dailyActiveUsers} <small>써비</small>
              </h3>           
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <TrendingUp />
                Placeholder
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={3} md={2}> 
          <Card>
            <CardHeader color="success" stats icon>
              <p className={classes.cardCategory}>Monthly Active Users</p>
              <h3 className={classes.cardTitle}>
                {mockData.monthlyActiveUsers} <small>써비</small>
              </h3>           
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <TrendingUp />
                Placeholder
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      
        <GridItem xs={6} sm={3} md={2}>
          <Card>
            <CardHeader color="success" stats icon>
              <p className={classes.cardCategory}>Total Reviews</p>
              <h3 className={classes.cardTitle}>
                {mockData.totalUser} <small>reviews</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <PersonAdd />
                {mockData.dailyUserChange} 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={3} md={2}> 
          <Card>
            <CardHeader color="success" stats icon>
              <p className={classes.cardCategory}>Avg Reviews by Service</p>
              <h3 className={classes.cardTitle}>
                {mockData.dailyActiveUsers} <small>reviews</small>
              </h3>           
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <TrendingUp />
                Placeholder
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={3} md={2}> 
          <Card>
            <CardHeader color="success" stats icon>
              <p className={classes.cardCategory}>Avg Reviews by User</p>
              <h3 className={classes.cardTitle}>
                {mockData.monthlyActiveUsers} <small>reviews</small>
              </h3>           
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <TrendingUp />
                Placeholder
              </div>
            </CardFooter>
          </Card>
        </GridItem>

   
      </GridContainer>

      <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={dailyUserChangeChart.data}
                type="Bar"
                options={dailyUserChangeChart.options}
                responsiveOptions={dailyUserChangeChart.responsiveOptions}
                listener={dailyUserChangeChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Change in # of Users</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Today is //placeholder//
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={monthlyuserChangeChart.data}
                type="Line"
                options={monthlyuserChangeChart.options}
                listener={monthlyuserChangeChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Monthly Change in # of Users</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> total number of users //placeholder// for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailyUserChangeChart.data}
                type="Bar"
                options={dailyUserChangeChart.options}
                responsiveOptions={dailyUserChangeChart.responsiveOptions}
                listener={dailyUserChangeChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Change in # of Reviews</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Today is //placeholder//
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={monthlyuserChangeChart.data}
                type="Line"
                options={monthlyuserChangeChart.options}
                listener={monthlyuserChangeChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Monthly Change in # of Reviews</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> total number of users //placeholder// for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <br></br>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card title>
            <CardHeader title color="primary">
              <h4 className={classes.cardTitleWhite}>Others</h4>
            </CardHeader>
          </Card>
        </GridItem>

        <GridItem xs={6} sm={3} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <p className={classes.cardCategory}>Number of Reactions by User</p>
              <h3 className={classes.cardTitle}>
                {mockData.totalUser} <small>Reactions</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <PersonAdd />
                {mockData.dailyUserChange} 유저가 오늘 새로운 써비가 됐습니다.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={3} md={4}> 
          <Card>
            <CardHeader color="success" stats icon>
              <p className={classes.cardCategory}>Average Number of Reviews by Service</p>
              <h3 className={classes.cardTitle}>
                {mockData.dailyActiveUsers} <small>reviews</small>
              </h3>           
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <TrendingUp />
                Placeholder
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>찾아야 하는 구독 서비스</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Date", "Service Name", "Payment Period", "Price"]}
                tableData={[
                  ["2020-01-14", "Netflix", "매달", "3,500원"],
                  ["2020-01-14", "Netflix", "매달", "3,500원"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
