import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { createPost } from "../actions/postAction";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <br />
          <div>
            <label>Title:</label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(Postform);
