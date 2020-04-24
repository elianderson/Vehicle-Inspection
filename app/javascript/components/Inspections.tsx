import PropTypes from "prop-types";
import Area from './Area';
import React from "react";

class Inspections extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: {
        areas: [],
      },
    };
  }
  async componentDidMount() {
    const data = await fetch('/api/inspections/10.json')
      .then(res => res.json());
    this.setState({
      data: {
        vin: '12345',
        areas: [1, 2, 3]
      },
    });
  }
  render () {
    const { data } = this.state;

    if (!data.areas.length) {
      return <p>Loading Bitch&hellip;</p>;
    }

    const areas = data.areas.map(area => (
      <Area open {...area} />
    ));

    return (
      <React.Fragment>
        <header className="pagelet">
          <h1><span className="visually-hidden">Phoenix Motors</span></h1>
        </header>
        <form id="wrapper" className="pagelet">
          {areas}
          <button type="submit">Submit Inspection Report</button>
        </form>
        <footer role="contentinfo" className="pagelet">
          <p>©2020 Phoenix&nbsp;Motors</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default Inspections
