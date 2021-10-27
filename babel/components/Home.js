class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prueba_field: 0,
    };

    this.arribaHandler = this.arribaHandler.bind(this);
    this.abajoHandler = this.abajoHandler.bind(this);
  }

  componentDidMount() {
    alert("Hello como subir archivos con Babel en el Browser");
  }
  arribaHandler(e) {
    this.setState({ prueba_field: this.state.prueba_field + 1 });
  }

  abajoHandler() {
    this.setState({ prueba_field: this.state.prueba_field - 1 });
  }

  render() {
    return (
      <div>
        <Contador sign={"-"} handler={this.abajoHandler} />
        <Contador sign={"+"} handler={this.arribaHandler} />
        <p>{`${resources.getResource("es", "nsAccesoCitasMedicas", "total")} ${
          this.state.prueba_field
        }`}</p>
      </div>
    );
  }
}
