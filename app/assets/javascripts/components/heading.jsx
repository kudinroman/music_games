class Heading extends React.Component {
  render() {
    return (
      <h2 className="my-class">
        <span
          className="flex-grow block border-t border-black"
          aria-hidden="true"
          role="presentation"
        ></span>
        <span className="flex-none block mx-4   px-4 py-2.5 text-xxl leading-none font-medium uppercase bg-blue-800 text-white">
          {this.props.name}
        </span>
        <span
          className="flex-grow block border-t border-black"
          aria-hidden="true"
          role="presentation"
        ></span>
      </h2>
    );
  }
}
