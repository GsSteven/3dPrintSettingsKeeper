import React from 'react';


class Support extends React.Component {
    render() {
        return (
            <div className="settingsSubclass">
                <div className="subclass">
                    <label htmlFor="generateSupport">Generate Support</label>
                    <input type="checkbox" name="generateSupport" value="generateSupport" id="generateSupport" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="supportPlacement">Support Placement</label>
                    <select name="supportPlacement" id="supportPlacement" className="subClassInput">
                        <option value="everywhere">Everywhere</option>
                        <option value="touchingBuildPlate">Touching Build Plate</option>
                    </select>
                </div>
                <div className="subclass">
                    <label htmlFor="supportOverhangAngle">Support Overhang Angle</label>
                    <input type="number" name="supportOverhangAngle" id="supportOverhangAngle" className="subClassInput" /><p className="unit">°</p>
                </div>
                <div className="subclass">
                    <label htmlFor="supportPattern">Support Pattern</label>
                    <select name="supportPattern" id="supportPattern" className="subClassInput">
                        <option value="lines">Lines</option>
                        <option value="grid">Grid</option>
                        <option value="triangles">Triangles</option>
                        <option value="concentric">Concentric</option>
                        <option value="zigZag">Zig Zag</option>
                        <option value="cross">Cross</option>
                        <option value="gyroid">Gyroid</option>
                    </select>
                </div>
                <div className="subclass">
                    <label htmlFor="supportDensity">Support Density</label>
                    <input type="number" name="supportDensity" id="supportDensity" className="subClassInput" /><p className="unit">%</p>
                </div>
                <div className="subclass">
                    <label htmlFor="supportHorizontalExpansion">Support Horizontal Expansion</label>
                    <input type="number" name="supportHorizontalExpansion" id="supportHorizontalExpansion" className="subClassInput" /><p className="unit">mm</p>
                </div>
                <div className="subclass">
                    <label htmlFor="supportInfillLayerThickness">Support Infill Layer Thickness</label>
                    <input type="number" name="supportInfillLayerThickness" id="supportInfillLayerThickness" className="subClassInput" /><p className="unit">mm</p>
                </div>
                <div className="subclass">
                    <label htmlFor="gradualSupportInfillSteps">Gradual Support Infill Steps</label>
                    <input type="number" name="gradualSupportInfillSteps" id="gradualSupportInfillSteps" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="enableSupportInterface">Enable Support Interface</label>
                    <input type="checkbox" name="enableSupportInterface" value="enableSupportInterface" id="enableSupportInterface" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="enableSupportRoof">Enable Support Roof</label>
                    <input type="checkbox" name="enableSupportRoof" value="enableSupportRoof" id="enableSupportRoof" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="enableSupportFloor">Enable Support Floor</label>
                    <input type="checkbox" name="enableSupportFloor" value="enableSupportFloor" id="enableSupportFloor" className="subClassInput" />
                </div>
            </div>
        );
    }
};

export default Support;