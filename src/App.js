import { React, Component } from "react";
import { Container } from "react-bootstrap";
import Navi from "./Navi";
import { Grid } from "@material-ui/core";
import FilmCard from "./FilmCard";

export default class App extends Component {
  state = {
    films: [
      { isim: "Captain Fantastic", goruntulenmeSayisi: 200000, imdbPuani: 7.1,imageUrl : "https://upload.wikimedia.org/wikipedia/tr/1/15/Captain_Fantastic_film_posteri.jpg" },
      { isim: "Yuzuklerin Efendisi", goruntulenmeSayisi: 170000, imdbPuani: 8.4 ,imageUrl :"https://tr.web.img4.acsta.net/pictures/bzp/01/27070.jpg"},
      { isim: "Harry Potter" , goruntulenmeSayisi : 0 , imdbPuani:9.0,imageUrl :"https://tr.web.img3.acsta.net/pictures/bzp/01/58608.jpg"},
      { isim: "Kuzuların Sessizligi" , goruntulenmeSayisi : 0 , imdbPuani:8.3,imageUrl :"https://tr.web.img4.acsta.net/pictures/bzp/01/6641.jpg"}
    ],
  };
  render() {
    return (
      <div>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Navi></Navi>
            </Grid>
            {this.state.films.map((film) => (
              <Grid item xs={6} sm={3}>
                <FilmCard film={film}></FilmCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}
