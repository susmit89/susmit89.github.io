import React, { Component } from "react";
import Table from "./common/table";
import postStyling from "./common/style";

class PostTable extends Component {
  columns = [
    {
      path: "value",
      label: "",
      content: (blog) => postStyling(blog),
    },
    {
      path: "row",
      label: "",
      //content: (blog) => <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>,
    },

    {
      path: "type",
      label: "",
      //content: (blog) => <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>,
    },
  ];

  render() {
    const { blogs, onSort, sortColumn } = this.props;

    return (
      <div class="hideme">
        <Table
          columns={this.columns}
          data={blogs}
          sortColumn={sortColumn}
          onSort={onSort}
        />
      </div>
    );
  }
}

export default PostTable;
