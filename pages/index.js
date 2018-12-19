import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import SuperComponent from "../components/SuperComponent";
import axios from "axios";

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      userData = response.data;
    } catch (err) {
      console.error(err);
    }

    return { initialData: [1, 2, 3, 4], userData: userData };
  }

  constructor() {
    super();
    this.state = {
      title: "I am index page"
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("ComponenDidMount");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  updateTitle() {
    this.setState({ title: "I am updated Index Page" });
  }

  render() {
    // debugger;
    // console.log("render");
    const { userData, initialData } = this.props;

    return (
      <BaseLayout>
        <h1>I am Index Page</h1>
        <h2>{this.state.title}</h2>
        <h2>{userData.title}</h2>
        <button onClick={() => this.updateTitle()}>Change Title</button>
      </BaseLayout>
    );
  }
}

export default Index;
