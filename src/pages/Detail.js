import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { useStoreContext } from "../utils/GlobalState";

function Detail(props) {
  const { state , dispatch} = useStoreContext();
 
  // console.log(props.location.pathname);
  const slashIndex = props.location.pathname.indexOf("/", 1);
  const id = props.location.pathname.substring(slashIndex+1);
  const selectedList = state.filter(item => item.id == id)[0];
  console.log(selectedList);

  return (
    <div>
      {selectedList ? (
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>TITLE by {selectedList.screenName}</h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-10 md-offset-1">
              <article>
                <h1>Content: {selectedList.title}</h1>
                <p>Body: {selectedList.screenName}</p>
              </article>
            </Col>
            {/* Replace `false` to check if the current post is in the favorites list */}
            {selectedList.isFavorite ? (
              <button className="btn btn-danger" onClick={() => dispatch({type: "remove", id: selectedList.id})}>Remove from Favorites!</button>
            ) : (
              <button className="btn"  onClick={() => dispatch({type: "favor", id: selectedList.id})}>❤️ Add to Favorites</button>
            )}
          </Row>
          <Row>
            <Col size="md-2">
              <Link to="/">← Back to Posts</Link>
            </Col>
          </Row>
        </Container>
      ) : (
        <div>No article available here...</div>
    )}</div>
  );
}

export default Detail;
