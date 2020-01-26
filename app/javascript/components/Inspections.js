import React from "react";
import PropTypes from "prop-types";

class Inspections extends React.Component {
  render () {
    return (
      <React.Fragment>
        <header className="pagelet">
          <h1><span className="visually-hidden">Phoenix Motors</span></h1>
        </header>
        <form id="wrapper" class="pagelet">
          <details open>
            <summary><h2>Vehicle Info</h2></summary>
            <div>
              {/* @TODO default, min to today */}
              <label htmlFor="date">Date</label>
              <input type="date" />
            </div>
            <div>
              <label htmlFor="vin">VIN</label>
              <input required id="vin" type="vin" minlength="16" maxlength="17" autocomplete="off" pattern="^(?<wmi>[A-HJ-NPR-Z\d]{3})(?<vds>[A-HJ-NPR-Z\d]{5})(?<check>[\dX])(?<vis>(?<year>[A-HJ-NPR-Z\d])(?<plant>[A-HJ-NPR-Z\d])(?<seq>[A-HJ-NPR-Z\d]{6}))$" />
            </div>
          </details>

          <details open>
            <summary><h2>Condition &amp; Appearance</h2></summary>
            <p><em>Note debris and&nbsp;marks</em></p>
            <fieldset>
              <legend>Exterior</legend>
              <div>
                <input required id="exterior_good" type="radio" name="exterior" value="good" />
                <label htmlFor="exterior_good"><span>Good</span></label>
              </div>

              <div>
                <input required id="exterior_ok" type="radio" name="exterior" value="ok" />
                <label htmlFor="exterior_ok"><span>Ok</span></label>
              </div>

              <div>
                <input required id="exterior_bad" type="radio" name="exterior" value="bad" />
                <label htmlFor="exterior_bad"><span>Bad</span></label>
              </div>
            </fieldset>
            <div>
              <label htmlFor="condition_other">Other</label>
              <input type="text" name="condition_other" id="condition_other" />
            </div>
          </details>

          <details open>
            <summary><h2>Brakes</h2></summary>
            <div>
              <label htmlFor="exterior_good"><span>Left Pads&emsp;</span></label>
              <select required name="brakes_left-pads" id="brakes_left-pads">
                <option value="">Choose a measurement</option>
                <option value="10mm">10mm</option>
                <option value="11mm">11mm</option>
                <option value="12mm">12mm</option>
              </select>
              <fieldset>
                <legend>Condition</legend>
                <div>
                  <input required id="brakes_left-pads__good" type="radio" name="exterior" value="good" />
                  <label htmlFor="brakes_left-pads__good"><span>Good</span></label>
                </div>

                <div>
                  <input required id="brakes_left-pads__ok" type="radio" name="exterior" value="ok" />
                  <label htmlFor="brakes_left-pads__ok"><span>Ok</span></label>
                </div>

                <div>
                  <input required id="brakes_left-pads__bad" type="radio" name="exterior" value="bad" />
                  <label htmlFor="brakes_left-pads__bad"><span>Bad</span></label>
                </div>
              </fieldset>
            </div>
          </details>

          <details open>
            <summary><h2>Tires</h2></summary>
            <fieldset>
              <legend>Front</legend>
              <div>
                <label htmlFor="front_left_psi"><span>Left</span></label>
                <select required name="front_left_psi" id="front_left_psi">
                  <option value="">Choose a pressure amount</option>
                  <option value="10psi">10psi</option>
                  <option value="11psi">11psi</option>
                  <option value="12psi">12psi</option>
                </select>
              </div>
              <div>
                <label htmlFor="front_right_psi"><span>Right</span></label>
                <select required name="front_right_psi" id="front_right_psi">
                  <option value="">Choose a pressure amount</option>
                  <option value="10psi">10psi</option>
                  <option value="11psi">11psi</option>
                  <option value="12psi">12psi</option>
                </select>
              </div>
            </fieldset>
            <fieldset>
              <legend>Rear</legend>
              <div>
                <label htmlFor="rear_left_psi"><span>Left</span></label>
                <select required name="rear_left_psi" id="rear_left_psi">
                  <option value="">Choose a pressure amount</option>
                  <option value="10psi">10psi</option>
                  <option value="11psi">11psi</option>
                  <option value="12psi">12psi</option>
                </select>
              </div>
              <div>
                <label htmlFor="rear_right_psi"><span>Right</span></label>
                <select required name="rear_right_psi" id="rear_right_psi">
                  <option value="">Choose a pressure amount</option>
                  <option value="10psi">10psi</option>
                  <option value="11psi">11psi</option>
                  <option value="12psi">12psi</option>
                </select>
              </div>
            </fieldset>
            <div>
              <input type="checkbox" name="all_hub_caps" id="all_hub_caps" />
              <label htmlFor="all_hub_caps">All Hub Caps</label>
            </div>
            <div>
              <label htmlFor="tire_size">Tire Size</label>
              {/* @TODO set pattern attribute to regex of valid inputs? */}
              <input type="text" name="tire_size" id="tire_size" autocomplete="off" />
            </div>
          </details>

          <details>
            <summary><h2>Misc</h2></summary>
            <label htmlFor="misc_notes"></label>
            <textarea name="misc_notes" id="misc_notes" cols="30" rows="4" autocomplete="off"></textarea>
          </details>

          <button type="submit">Submit Inspection Report</button>
        </form>
        <footer role="contentinfo" class="pagelet">
          <p>©2020 Phoenix&nbsp;Motors</p>
        </footer>
      </React.Fragment>
    );
  }
}

Inspections.propTypes = {
  inspectionss: PropTypes.array
};
export default Inspections
