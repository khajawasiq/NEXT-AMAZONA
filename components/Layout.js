import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React, { Children } from "react";
import useStyles from "../Utils/styles"
export default function Layout({ children }) {
    const classes= useStyles ();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
          <Typography>
              ALL Rights Reserved.  Next Amazonz..
          </Typography>
      </footer>
    </div>
  );
}
