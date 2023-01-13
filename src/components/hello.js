import React from "react";

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.firstname} {this.props.lastname}!</div>;
  }
}

export default Hello;
