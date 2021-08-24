import React, { Component } from "react";
import { Form,  Nav,  } from "react-bootstrap";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Film App</Nav.Link>
          </Nav.Item>
          <Form>
            <Form.Control placeholder="Search"></Form.Control>
          </Form>
          <Nav.Item>
            <Form.Select>
              <option>Sıralama</option>
              <option value="1">İzlenme Sayısı</option>
              <option value="2">IMDB puanı</option>
              <option value="3">Tarih</option>
            </Form.Select>
          </Nav.Item>
          
        </Nav>
      </div>
    );
  }
}
