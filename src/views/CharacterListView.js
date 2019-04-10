import React from "react";
import { connect } from "react-redux";
import { fetchPeople } from '../actions';
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    if (this.props.fetching) {
      return (<div>Loading...</div>);
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => (
  state.charsReducer
);
export default connect(
  mapStateToProps,
  {
    fetchPeople
  }
)(CharacterListView);
