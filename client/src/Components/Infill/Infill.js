import React from 'react';


class Infill extends React.Component {
    render() {
        return (
            <div className="settingsSubclass">
                <div className="subclass">
                    <label htmlFor="infillDesnsity">Infill Density</label>
                    <input type="number" name="infillDesnsity" id="infillDesnsity" className="subClassInput" /><p className="unit">%</p>
                </div>
                <div className="subclass">
                    <label htmlFor="infillLineDistance">Infill Line Distance</label>
                    <input type="number" name="infillLineDistance" id="infillLineDistance" className="subClassInput" /><p className="unit">mm</p>
                </div>
                <div className="subclass">
                    <label htmlFor="infillPattern">Infill Pattern</label>
                    <select name="infillPattern" id="infillPattern" className="subClassInput">
                        <option value="grid">Grid</option>
                        <option value="lines">Lines</option>
                        <option value="triangles">Triangles</option>
                        <option value="triHexagon">Tri-Hexagon</option>
                        <option value="cubic">Cubic</option>
                        <option value="cubicSubdivision">Cubic Subdivision</option>
                        <option value="octet">Octet</option>
                        <option value="quarterCubic">Quarter Cubic</option>
                        <option value="concentric">Concentric</option>
                        <option value="zigZag">Zig Zag</option>
                        <option value="cross">Cross</option>
                        <option value="cross3d">Cross 3D</option>
                        <option value="gyroid">Gyroid</option>
                    </select>
                </div>
                <div className="subclass">
                    <label htmlFor="infillLineMultiplier">Infill Line Multiplier</label>
                    <input type="number" name="infillLineMultiplier" id="infillLineMultiplier" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="infillOverlapPercentage">Infill Overlap Percentage</label>
                    <input type="number" name="infillOverlapPercentage" id="infillOverlapPercentage" className="subClassInput" /><p className="unit">%</p>
                </div>
                <div className="subclass">
                    <label htmlFor="infillLayerThickness">Infill Layer Thickness</label>
                    <input type="number" name="infillLayerThickness" id="infillLayerThickness" className="subClassInput" /><p className="unit">mm</p>
                </div>
                <div className="subclass">
                    <label htmlFor="gradualInfillSteps">Gradual Infill Steps</label>
                    <input type="number" name="gradualInfillSteps" id="gradualInfillSteps" className="subClassInput" />
                </div>
            </div>
        );
    }
};

export default Infill;