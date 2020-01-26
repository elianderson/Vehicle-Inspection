import React from "react"
import PropTypes from "prop-types"
class Inspections extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Phoenix Motors</h1>
        <p><em>Complete Vehicle Inspection</em></p>
        <form action="">
          <h2>Vehicle Info</h2>
          <div>
            <label for="date">Date</label>
            <input type="date" />
          </div>
          <div>
            <label for="vin"></label>
          </div>
          <h2>Condition &amp; Apperance</h2>
          <p>Note debris and&nbsp;marks</p>
          <div>
            <label for="exterior">Exterior</label>
            <input type="radio" name="exterior" value="good" />
            <input type="radio" name="exterior" value="ok" />
            <input type="radio" name="exterior" value="bad" />
          </div>
          <div>
            <label for="condition_interior">Interior</label>
            <input required type="radio" name="condition_interior" value="good" />
            <input required type="radio" name="condition_interior" value="ok" />
            <input required type="radio" name="condition_interior" value="bad" />
          </div>
          <div>
            <label for="condition_windsheild_glass">Windshield &amp; Glass</label>
            <input required type="radio" name="condition_windsheild_glass" value="good" />
            <input required type="radio" name="condition_windsheild_glass" value="ok" />
            <input required type="radio" name="condition_windsheild_glass" value="bad" />
          </div>
          <div>
            <label for="condition_headlamp_lens_condition">Headlamp Lens Condition</label>
            <input required type="radio" name="condition_headlamp_lens_condition" value="good" />
            <input required type="radio" name="condition_headlamp_lens_condition" value="ok" />
            <input required type="radio" name="condition_headlamp_lens_condition" value="bad" />
          </div>
          <div>
            <label for="condition_other">Other</label>
            <input required type="radio" name="condition_other" value="good" />
            <input required type="radio" name="condition_other" value="ok" />
            <input required type="radio" name="condition_other" value="bad" />
          </div>

          <h2>Road Test</h2>

          <h2>Lights</h2>

          <h2>Under Car &ndash; Drivetrain</h2>

          <h2>Steering &amp; Suspension</h2>

          <h2>Exhaust</h2>

          <h2>Brakes</h2>

          <h2>Under&nbsp;Hood &ndash; Tune&nbsp;Up</h2>

          <h2>Accessories</h2>
        </form>
      </React.Fragment>
    );
  }
}

Inspections.propTypes = {
  inspectionss: PropTypes.array
};
export default Inspections
