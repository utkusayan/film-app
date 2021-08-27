import React, { useEffect, useState } from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import {
  makeStyles,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
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
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Body() {
  const classes = useStyles();
  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f1047d7c7e8aa620dbaf91903e091cd21c77d2ac149654daaf7ae5e296c8ccad._RI_V_TTW_.jpg"
                  title="Image"
                ></CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Film İsmi
                  </Typography>
                  <Typography>IMDB puanı :</Typography>
                  <Divider></Divider>
                  <Typography>Görüntülenme Sayısı :</Typography>
                  <Divider></Divider>
                  <Typography>Yapım yılı :</Typography>
                  <Typography>
                    <SvgIcon></SvgIcon>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    color="default"
                  >
                    Film Bilgileri
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default Body;
