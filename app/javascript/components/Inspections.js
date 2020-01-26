import React from "react"
import PropTypes from "prop-types"
class Inspections extends React.Component {
  render () {
    return (
      <React.Fragment>
        Inspections: {this.props.inspectionss}
      </React.Fragment>
    );
  }
}

Inspections.propTypes = {
  inspectionss: PropTypes.array
};
export default Inspections
