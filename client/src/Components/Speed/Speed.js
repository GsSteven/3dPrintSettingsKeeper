import React from 'react';


class Speed extends React.Component {
    render() {
        return (
            <div className="settingsSubclass" >
                <div className="subclass">
                    <label htmlFor="printSpeed">Print Speed</label>
                    <input type="number" name="printSpeed" id="printSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="infillSpeed">Infill Speed</label>
                    <input type="number" name="infillSpeed" id="infillSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="wallSpeed">Wall Speed</label>
                    <input type="number" name="wallSpeed" id="wallSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="outerWallSpeed">Outer Wall Speed</label>
                    <input type="number" name="outerWallSpeed" id="outerWallSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="innerWallSpeed">Inner Wall Speed</label>
                    <input type="number" name="innerWallSpeed" id="innerWallSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="topBottomSpeed">Top/Bottom Speed</label>
                    <input type="number" name="topBottomSpeed" id="topBottomSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="supportSpeed">Support Speed</label>
                    <input type="number" name="supportSpeed" id="supportSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="travelSpeed">Travel Speed</label>
                    <input type="number" name="travelSpeed" id="travelSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="initialLayerSpeed">Initial Layer Speed</label>
                    <input type="number" name="initialLayerSpeed" id="initialLayerSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="skirtBrimSpeed">Skirt/Brim Speed</label>
                    <input type="number" name="skirtBrimSpeed" id="skirtBrimSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                </div>
                <div className="subclass">
                    <label htmlFor="enableAccelerationControl">Enable Acceleration Control</label>
                    <input type="checkbox" name="enableAccelerationControl" value="enableAccelerationControl" id="enableAccelerationControl" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="enableJerkControl">Enable Jerk Control</label>
                    <input type="checkbox" name="enableJerkControl" value="enableJerkControl" id="enableJerkControl" className="subClassInput" />
                </div>
            </div>
        );
    }
};

export default Speed;