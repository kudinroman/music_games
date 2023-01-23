import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <h2 class="my-class">
        <span
          class="flex-grow block border-t border-black"
          aria-hidden="true"
          role="presentation"
        ></span>
        <span class="flex-none block mx-4   px-4 py-2.5 text-xxl leading-none font-medium uppercase bg-blue-800 text-white"></span>
        {this.props.name}
        <span
          class="flex-grow block border-t border-black"
          aria-hidden="true"
          role="presentation"
        ></span>
      </h2>
    );
  }
}

export default App;
