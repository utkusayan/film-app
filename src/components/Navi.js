import React, { useEffect, useState } from "react";

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SearchIcon,
  InputBase,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },

  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Navi() {
  const classes = useStyles();
  const [siralamaTuru, setSiralamaTuru] = React.useState("");
  const handleChange = (event) => {
    setSiralamaTuru(event.target.value);
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar classes={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Film App
        </Typography>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-helper-label">Sıralama</InputLabel>
          <Select
            labelId="demo-simple-helper-label"
            id="demo-simple-helper"
            value={siralamaTuru}
            onChange={handleChange}
          >
            <MenuItem value={10}>Görüntülenme</MenuItem>
            <MenuItem value={20}>Tarih</MenuItem>
            <MenuItem value={30}>IMDB</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        
        <Button
          href="#"
          color="primary"
          variant="outlined"
          className={classes.link}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navi;
