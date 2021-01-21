import React from 'react';


class Shell extends React.Component {
    render() {
        return (
            <div className="settingsSubclass" id="shellSettings">
                <div className="subclass">
                    <label htmlFor="wallThickness">Wall Thickness</label>
                    <input type="number" name="wallThickness" id="wallThickness" className="subClassInput" /><p className="unit">mm</p>
                </div>
                <div className="subclass">
                    <label htmlFor="wallLineCount">Wall Line Count</label>
                    <input type="number" name="wallLineCount" id="wallLineCount" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="topBottomThickness">Top/Bottom Thickness</label>
                    <input type="number" name="topBottomThickness" id="topBottomThickness" className="subClassInput" /><p className="unit">mm</p>
                </div>
                <div className="subclass">
                    <label htmlFor="topThickness">Top Thickness</label>
                    <input type="number" name="topThickness" id="topThickness" className="subClassInput" /><p className="unit">mm</p>
                </div>
                <div className="subclass">
                    <label htmlFor="topLayers">Top Layers</label>
                    <input type="number" name="topLayers" id="topLayers" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="bottomThickness">Bottom Thickness</label>
                    <input type="number" name="bottomThickness" id="bottomThickness" className="subClassInput" /><p className="unit">mm</p>
                </div>
                <div className="subclass">
                    <label htmlFor="bottomLayers">Bottom Layers</label>
                    <input type="number" name="bottomLayers" id="bottomLayers" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="fillGapsBetweenWalls">Fill Gaps Between Walls</label>
                    <select type="" name="fillGapsBetweenWalls" id="fillGapsBetweenWalls" className="subClassInput">
                        <option value="everywhere">Everywhere</option>
                        <option value="nowhere">Nowhere</option>
                    </select>
                </div>
                <div className="subclass">
                    <label htmlFor="horizontalExpansion">Horizontal Expansion</label>
                    <input type="number" name="horizontalExpansion" id="horizontalExpansion" className="subClassInput" /><p className="unit">mm</p>
                </div>
                <div className="subclass">
                    <label htmlFor="enableIroning">Enable Ironing</label>
                    <input type="checkbox" name="enableIroning" id="enableIroning" className="subClassInput" />
                </div>
            </div>
        );
    }
};

export default Shell;