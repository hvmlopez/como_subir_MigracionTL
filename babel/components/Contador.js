

class Contador extends React.Component {
    constructor(props) {
        super(props);
      }


      render(){
          return(
              <button onClick={this.props.handler} type="button">
                  {this.props.sign}
              </button>
          )
      }

}