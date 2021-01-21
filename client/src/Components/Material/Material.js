import React from 'react';


class Material extends React.Component {
    render() {
        return (
            <div className="settingsSubclass" >
                <div className="subclass">
                    <label htmlFor="printingTemperature">Printing Temperature</label>
                    <input type="number" name="printingTemperature" id="printingTemperature" className="subClassInput" /><p className="unit">°C</p>
                </div>
                <div className="subclass">
                    <label htmlFor="printingTemperatureInitialLayer">Printing Temperature Initial Layer</label>
                    <input type="number" name="printingTemperatureInitialLayer" id="printingTemperatureInitialLayer" className="subClassInput" /><p className="unit">°C</p>
                </div>
                <div className="subclass">
                    <label htmlFor="initialPrintingTemperature">Initial Printing Temperature</label>
                    <input type="number" name="initialPrintingTemperature" id="initialPrintingTemperature" className="subClassInput" /><p className="unit">°C</p>
                </div>
                <div className="subclass">
                    <label htmlFor="finalPrintingTemperature">Final Printing Temperature</label>
                    <input type="number" name="finalPrintingTemperature" id="finalPrintingTemperature" className="subClassInput" /><p className="unit">°C</p>
                </div>
                <div className="subclass">
                    <label htmlFor="buildPlateTemperature">Build Plate Temperature</label>
                    <input type="number" name="buildPlateTemperature" id="buildPlateTemperature" className="subClassInput" /><p className="unit">°C</p>
                </div>
                <div className="subclass">
                    <label htmlFor="buildPlateTemperatureInitialLayer">Build Plate Temperature Initial Layer</label>
                    <input type="number" name="buildPlateTemperatureInitialLayer" id="buildPlateTemperatureInitialLayer" className="subClassInput" /><p className="unit">°C</p>
                </div>
            </div>
        );
    }
};

export default Material;