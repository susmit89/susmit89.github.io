import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { imageUrl } from "../services/imageService";
import PostTable from "./postTable";

class BlogForm extends Form {
  state = {
    _id: this.props.blog._id,
    title: this.props.blog.title,
    topicId: this.props.blog.topic.name,
    numberInStock: this.props.blog.numberInStock,
    dailyRentalRate: this.props.blog.dailyRentalRate,
    content: this.props.blog.content.text,

    topics: this.props.topics,
    errors: {},
    sortColumn: { path: "row", order: "asc" },
  };

  /*
  doSubmit = async () => {
    await saveblog(this.state.data);
    this.props.history.push("/blogs");
  };
*/
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div>Topic: {this.state.topicId}</div>
        <PostTable
          blogs={this.state.content}
          sortColumn={this.state.sortColumn}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        />
      </div>
    );
  }
}

export default BlogForm;
