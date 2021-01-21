import React from 'react';


class Cooling extends React.Component {
    render() {
        return (
            <div className="settingsSubclass">
                <div className="subclass">
                    <label htmlFor="enablePrintCooling">Enable Print Cooling</label>
                    <input type="checkbox" name="enablePrintCooling" value="enablePrintCooling" id="enablePrintCooling" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="fanSpeed">Fan Speed</label>
                    <input type="number" name="fanSpeed" id="fanSpeed" className="subClassInput" /><p className="unit">%</p>
                </div>
                <div className="subclass">
                    <label htmlFor="regularFanSpeed">Regular Fan Speed</label>
                    <input type="number" name="regularFanSpeed" id="regularFanSpeed" className="subClassInput" /><p className="unit">%</p>
                </div>
                <div className="subclass">
                    <label htmlFor="maximumFanSpeed">Maximum Fan Speed</label>
                    <input type="number" name="maximumFanSpeed" id="maximumFanSpeed" className="subClassInput" /><p className="unit">%</p>
                </div>
                <div className="subclass">
                    <label htmlFor="regularMaximumFanSpeedThreshold">Regular/Maximum Fan Speed Threshold</label>
                    <input type="number" name="regularMaximumFanSpeedThreshold" id="regularMaximumFanSpeedThreshold" className="subClassInput" /><p className="unit">s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="initialFanSpeed">Initial Fan Speed</label>
                    <input type="number" name="initialFanSpeed" id="initialFanSpeed" className="subClassInput" /><p className="unit">%</p>
                </div>
                <div className="subclass">
                    <label htmlFor="regularFanSpeedAtHeight">Regular Fan Speed at Height</label>
                    <input type="number" name="regularFanSpeedAtHeight" id="regularFanSpeedAtHeight" className="subClassInput" /><p className="unit">mm</p>
                </div>
                <div className="subclass">
                    <label htmlFor="regularFanSpeedAtLayer">Regular Fan Speed at Layer</label>
                    <input type="number" name="regularFanSpeedAtLayer" id="regularFanSpeedAtLayer" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="minimumLayerTime">Minimum Layer Time</label>
                    <input type="number" name="minimumLayerTime" id="minimumLayerTime" className="subClassInput" /><p className="unit">s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="minimumSpeed">Minimum Speed</label>
                    <input type="number" name="minimumSpeed" id="minimumSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="liftHead">Lift Head</label>
                    <input type="checkbox" name="liftHead" value="liftHead" id="liftHead" className="subClassInput" />
                </div>
            </div>
        );
    }
};

export default Cooling;