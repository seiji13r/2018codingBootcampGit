import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  inputOnChangeHandler = (event) => {
    const {name, value} = event.target;
    // console.log(event.target.value);
    this.setState({
      [name]: value
    });
  }

  btnOnClickHandler = (event) => {
    event.preventDefault();
    console.log("Button Clicked");
    if((this.state.title!=="")&&(this.state.author!=="")&&(this.state.synopsis!=="")){
      API.saveBook(
        {
          title: this.state.title,
          author: this.state.author,
          synopsis: this.state.synopsis
        }
      )
        .then(response => this.loadBooks())
        .catch(error => console.log(error))
    } else {
      alert("All Fields Should Be Filed Out!!")
    }
  }

  deleteBookHandler = (_id) => {
    API.deleteBook(_id)
      .then(response => this.loadBooks())
      .catch(error => console.log(error))
  }

  // <DeleteBtn onClick={() => this.deleteBookHandler(book._id)}/>

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" onChange={this.inputOnChangeHandler} placeholder="Title (required)" />
              <Input name="author" onChange={this.inputOnChangeHandler} placeholder="Author (required)" />
              <TextArea name="synopsis" onChange={this.inputOnChangeHandler} placeholder="Synopsis (Optional)" />
              <FormBtn onClick={this.btnOnClickHandler}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBookHandler(book._id)}/>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
