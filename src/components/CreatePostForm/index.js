import React, {useRef} from "react";
import { StoreProvider, useStoreContext } from "../../utils/GlobalState";

const CreatePostForm = () => {
  const { dispatch } = useStoreContext();
  const title = useRef();
  const body = useRef();
  const screenName = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      id: Math.random() * 100,
      title: title.current.value,
      body: body.current.value,
      screenName: screenName.current.value,
      isFavorite: false
    }
    dispatch({type: "save", formData});
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input ref={title} className="form-control mb-5" required placeholder="Title" />
        <textarea ref={body} className="form-control mb-5" required placeholder="Body" />
        <input ref={screenName} className="form-control mb-5" placeholder="Screen name" />
        <button  className="btn btn-success mt-3 mb-5" type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
