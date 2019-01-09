import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Settings from "./Settings";
import {
  Segment,
  Search,
  Icon,
  Container,
  Popup,
  Accordion,
  Divider,
  Button
} from "semantic-ui-react";
import {
  updateTextInput,
  fetchHereGeocode,
  updateSelectedAddress,
  removeIsochronesControl
} from "../actions/actions";
import InlineEdit from "react-edit-inline2";

import { debounce } from "throttle-debounce";

class SearchControl extends React.Component {
  static propTypes = {
    userTextInput: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.dataChanged = this.dataChanged.bind(this);

    this.state = {
      isochronesTitle: "Isochrones -" + (props.controlIndex + 1),
      activeIndex: 0
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    //this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.fetchGeocodeResults = debounce(1000, this.fetchGeocodeResults);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  fetchGeocodeResults() {
    const { dispatch, userTextInput } = this.props;

    console.log(userTextInput);
    dispatch(
      fetchHereGeocode({
        inputValue: userTextInput,
        controlIndex: this.props.controlIndex
      })
    );
  }

  handleSearchChange = event => {
    this.props.dispatch(
      updateTextInput({
        inputValue: event.target.value,
        controlIndex: this.props.controlIndex
      })
    );
    this.fetchGeocodeResults();
  };

  // handleSelectionChange = event => {
  //   console.log(event.target.value);
  // };

  handleResultSelect = (e, { result }) => {
    this.props.dispatch(
      updateTextInput({
        inputValue: result.title,
        controlIndex: this.props.controlIndex
      })
    );

    this.props.dispatch(
      updateSelectedAddress({
        inputValue: result.title,
        controlIndex: this.props.controlIndex
      })
    );
  };

  customValidateText(text) {
    return text.length > 0 && text.length < 64;
  }

  dataChanged(data) {
    this.setState({ ...data });
  }

  fetchIsochrones() {

    console.log('fetching...')

  }
  render() {
    const { isFetching, userTextInput, results, controlIndex } = this.props;

    const handleRemoveControl = () => {
      console.log(controlIndex);
      if (controlIndex > 0) {
        this.props.dispatch(
          removeIsochronesControl({ controlIndex: controlIndex })
        );
      }
    };

    const isResultSelected = () => {
      for (let result of results) {
        if (result.selected) return false;
      }

      return true;
    };
    return (
      <Segment>
        <Container className="mb2" textAlign="left">
          <InlineEdit
            validate={this.customValidateText}
            activeClassName="editing"
            text={this.state.isochronesTitle}
            paramName="isochronesTitle"
            change={this.dataChanged}
            style={{
              minWidth: 200,
              display: "inline-block",
              margin: "0 0 0 0",
              padding: 0,
              fontWeight: "bold",
              fontSize: 15,
              outline: "none",
              border: "none"
            }}
          />
          <Popup
            trigger={
              <Icon
                name="close"
                style={{ float: "right" }}
                onClick={handleRemoveControl}
              />
            }
            content="Remove"
            size="mini"
          />
        </Container>
        <Divider fitted />
        <div className="flex justify-between items-center mt3">
          <Search
            onSearchChange={this.handleSearchChange}
            onResultSelect={this.handleResultSelect}
            type="text"
            fluid
            input={{ fluid: true }}
            loading={isFetching}
            className="flex-grow-1 mr2"
            results={results}
            value={userTextInput}
            placeholder="Find Address ..."
            {...this.props}
          />
          <Popup
            trigger={
              <Button
                circular
                disabled={isResultSelected()}
                color="purple"
                icon="globe"
                onClick={this.fetchIsochrones}
              />
            }
            content="Compute isochrones"
            size="mini"
          />
        </div>
        <Container className="mt2">
          <Accordion>
            <Accordion.Title
              active={this.state.activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Settings
            </Accordion.Title>
            <Accordion.Content active={this.state.activeIndex === 0}>
              <Settings />
            </Accordion.Content>
          </Accordion>
        </Container>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userTextInput =
    state.isochronesControls.controls[ownProps.controlIndex].userInput;
  const results =
    state.isochronesControls.controls[ownProps.controlIndex].geocodeResults;
  const isFetching =
    state.isochronesControls.controls[ownProps.controlIndex].isFetching;

  return {
    userTextInput,
    results,
    isFetching
  };
};

export default connect(mapStateToProps)(SearchControl);
