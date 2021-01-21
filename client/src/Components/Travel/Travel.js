import React from 'react';


class Travel extends React.Component {
    render() {
        return (
            <div className="settingsSubclass" >
                <div className="subclass">
                    <label htmlFor="enableRetraction">Enable Retraction</label>
                    <input type="checkbox" name="enableRetraction" value="enableRetraction" id="enableRetraction" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="retractAtLayerChange">Retract At Layer Change</label>
                    <input type="checkbox" name="retractAtLayerChange" value="retractAtLayerChange" id="retractAtLayerChange" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="retractionDistance">Retraction Distance</label>
                    <input type="number" name="retractionDistance" id="retractionDistance" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="retractionSpeed">Retraction Speed</label>
                    <input type="number" name="retractionSpeed" id="retractionSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="combingMode">Combing Mode</label>
                    <select name="combingMode" id="combingMode" className="subClassInput">
                        <option value="off">Off</option>
                        <option value="all">All</option>
                        <option value="notInSkin">Not In Skin</option>
                        <option value="withinInfill">Within Infill</option>
                    </select>
                </div>
                <div className="subclass">
                    <label htmlFor="avoidPrintedPartsWhenTraveling">Avoid Printed Parts When Traveling</label>
                    <input type="checkbox" name="avoidPrintedPartsWhenTraveling" value="avoidPrintedPartsWhenTraveling" id="avoidPrintedPartsWhenTraveling" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="avoidSupportsWhenTraveling">Avoid Supports When Traveling</label>
                    <input type="checkbox" name="avoidSupportsWhenTraveling" value="avoidSupportsWhenTraveling" id="avoidSupportsWhenTraveling" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="travelAvoidDistance">Travel Avoid Distance</label>
                    <input type="number" name="travelAvoidDistance" id="travelAvoidDistance" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="zHopWhenRetracted">Z Hop When Retracted</label>
                    <input type="checkbox" name="zHopWhenRetracted" value="zHopWhenRetracted" id="zHopWhenRetracted" className="subClassInput" />
                </div>
            </div>
        );
    }
};

export default Travel;