import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem , Button } from "react-bootstrap";

export default class FilmCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Img
              variant="top"
              src={this.props.film.imageUrl}
            ></Card.Img>
            <Card.Title>{this.props.film.isim}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Görüntülenme Sayisi : {this.props.film.goruntulenmeSayisi}</ListGroupItem>
              <ListGroupItem>IMDB Puanı : {this.props.film.imdbPuani}</ListGroupItem>
              <ListGroupItem>Film Türü : asdasdsad</ListGroupItem>
            </ListGroup>
            <div className="d-grid gap-2">
              <Button variant="secondary" size="lg">
                Film Bilgileri
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
