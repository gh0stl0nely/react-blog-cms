import React from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";

const PostsList = () => {
  const { state, dispatch } = useStoreContext();

  return (
    <div>
      <h1>All Blog Posts</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {/* Replace `[]` with the appropriate arrays */}
      {state.length ? (
        <List>
          {state.map(post => (
            <ListItem key={post.id}>
              <Link to={"/posts/" + post.id}>
                <strong>
                  {post.title} by {post.screenName}
                </strong>
              </Link>
              <DeleteBtn onClick={() => dispatch({type: "delete", id: post.id})} />
              <span style={{paddingRight: "10px"}} className="delete-btn" role="button" tabIndex="0">
                <button onClick={() => dispatch({type: "favor", id:post.id})}>
                  Favoritize 
                </button>
              </span>
          );
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
  );
};

export default PostsList;
