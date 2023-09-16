import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>This is About class component</h1>
        <h2>This is namaste react web series</h2>
        <UserClass name={"Sayani (class)"} location={"Kolkata (class)"} />
      </div>
    );
  }
}

export default About;
