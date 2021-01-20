import React from 'react';
import './NewDesign.css';
import defaultImg from './../../images/defaultImage.png';


class NewDesign extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adhesionType: "skirt"
        }
        this.setAdhesionType = this.setAdhesionType.bind(this);
        this.getAdhesionType = this.getAdhesionType.bind(this);
    }

    setAdhesionType(e) {
        const value = e.target.value;

        switch (value) {
            case "skirt":
                this.setState({ adhesionType: "skirt" });
                break;
            case "brim":
                this.setState({ adhesionType: "brim" });
                break;
            case "raft":
                this.setState({ adhesionType: "raft" });
                break;
            case "none": this.setState({ adhesionType: "none" });
                break;
            default: console.log('error at adhesionType switch');
        }
    }

    getAdhesionType() {
        switch (this.state.adhesionType) {
            case "skirt":
                return (
                    <div className="subClass">
                        <label htmlFor="skirtLineCount" >Skirt Line Count</label>
                        <input type="number" name="skirtLineCount" id="skirtLineCount" className="subClassInput" />
                    </div>
                )
            case "brim":
                return (
                    <div>
                        <div className="subClass">
                            <label htmlFor="brimWidth" >Brim Width</label>
                            <input type="number" name="brimWidth" id="brimWidth" className="subClassInput" /><p className="unit">mm</p>
                        </div>
                        <div className="subClass">
                            <label htmlFor="brimLineCount" >Brim Line Count</label>
                            <input type="number" name="brimLineCount" id="brimLineCount" className="subClassInput" />
                        </div>
                        <div className="subClass">
                            <label for="brimOnlyOnOutside">Brim Only on Outside</label>
                            <input type="checkbox" name="brimOnlyOnOutside" id="brimOnlyOnOutside" value="brimOnlyOnOutside" className="subClassInput" />
                        </div>
                    </div>
                )
            case "raft":
                return (
                    <div className="subClass">
                        <label htmlFor="raftAirGap" >Raft Air Gap</label>
                        <input type="number" name="raftAirGap" id="raftAirGap" className="subClassInput" /><p className="unit">mm</p>
                    </div>
                )
            case "none":
                break;
            default: console.log('error at getAdhesionType switch');
        }
    }

    render() {
        return (
            <div className="newDesignWrapper">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title" className="mainLabel">Title</label>
                    <input id="title"
                        type="text" name="title"
                        onChange={this.handleInputChange}
                        required />
                    <div className="uploadWrapper">
                        <label htmlFor="img" className="mainLabel">
                            <p>Add image</p>
                            <div id="printImg">
                                <img src={defaultImg} alt=''></img>
                            </div>
                        </label>
                        <input id="img"
                            type="file" name="img"
                            accept=".jpg, .jpeg, .png, .gif"
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="settings">
                        <div className="settingsInput">
                            <h4 className="settingSubject" id="quality">Quality</h4>
                            <div className="settingsSubclass" id="qualitySettings">
                                <div className="subClass">
                                    <label for="layerHeight">Layer Height</label>
                                    <input type="number" name="layerHeight" id="layerHeight" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="initialLayerHeight">Initial Layer Height</label>
                                    <input type="number" name="initialLayerHeight" id="initialLayerHeight" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="lineWidth">Line Width</label>
                                    <input type="number" name="lineWidth" id="lineWidth" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="wallLineWidth">Wall Line Width</label>
                                    <input type="number" name="wallLineWidth" id="wallLineWidth" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="outerWallLineWidth">Outer Wall Line Width</label>
                                    <input type="number" name="outerWallLineWidth" id="outerWallLineWidth" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="innderWallLineWidth">Inner Wall Line Width</label>
                                    <input type="number" name="innderWallLineWidth" id="innderWallLineWidth" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="topBottomLineWidth">Top/Bottom Line Width</label>
                                    <input type="number" name="topBottomLineWidth" id="topBottomLineWidth" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="infillLineWidth">Infill Line Width</label>
                                    <input type="number" name="infillLineWidth" id="infillLineWidth" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="initialLayerLineWidth">Initial Layer Line Width</label>
                                    <input type="number" name="initialLayerLineWidth" id="initialLayerLineWidth" className="subClassInput" /><p className="unit">%</p>
                                </div>
                            </div>


                            <h4 className="settingSubject" id="shell">Shell</h4>
                            <div className="settingsSubclass" id="shellSettings">
                                <div className="subClass">
                                    <label for="wallThickness">Wall Thickness</label>
                                    <input type="number" name="wallThickness" id="wallThickness" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="wallLineCount">Wall Line Count</label>
                                    <input type="number" name="wallLineCount" id="wallLineCount" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="topBottomThickness">Top/Bottom Thickness</label>
                                    <input type="number" name="topBottomThickness" id="topBottomThickness" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="topThickness">Top Thickness</label>
                                    <input type="number" name="topThickness" id="topThickness" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="topLayers">Top Layers</label>
                                    <input type="number" name="topLayers" id="topLayers" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="bottomThickness">Bottom Thickness</label>
                                    <input type="number" name="bottomThickness" id="bottomThickness" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="bottomLayers">Bottom Layers</label>
                                    <input type="number" name="bottomLayers" id="bottomLayers" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="fillGapsBetweenWalls">Fill Gaps Between Walls</label>
                                    <select type="" name="fillGapsBetweenWalls" id="fillGapsBetweenWalls" className="subClassInput">
                                        <option value="everywhere">Everywhere</option>
                                        <option value="nowhere">Nowhere</option>
                                    </select>
                                </div>
                                <div className="subClass">
                                    <label for="horizontalExpansion">Horizontal Expansion</label>
                                    <input type="number" name="horizontalExpansion" id="horizontalExpansion" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="enableIroning">Enable Ironing</label>
                                    <input type="checkbox" name="enableIroning" id="enableIroning" className="subClassInput" />
                                </div>
                            </div>


                            <h4 className="settingSubject" id="infill">Infill</h4>
                            <div className="settingsSubclass">
                                <div className="subClass">
                                    <label for="infillDesnsity">Infill Density</label>
                                    <input type="number" name="infillDesnsity" id="infillDesnsity" className="subClassInput" /><p className="unit">%</p>
                                </div>
                                <div className="subClass">
                                    <label for="infillLineDistance">Infill Line Distance</label>
                                    <input type="number" name="infillLineDistance" id="infillLineDistance" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="infillPattern">Infill Pattern</label>
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
                                <div className="subClass">
                                    <label for="infillLineMultiplier">Infill Line Multiplier</label>
                                    <input type="number" name="infillLineMultiplier" id="infillLineMultiplier" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="infillOverlapPercentage">Infill Overlap Percentage</label>
                                    <input type="number" name="infillOverlapPercentage" id="infillOverlapPercentage" className="subClassInput" /><p className="unit">%</p>
                                </div>
                                <div className="subClass">
                                    <label for="infillLayerThickness">Infill Layer Thickness</label>
                                    <input type="number" name="infillLayerThickness" id="infillLayerThickness" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="gradualInfillSteps">Gradual Infill Steps</label>
                                    <input type="number" name="gradualInfillSteps" id="gradualInfillSteps" className="subClassInput" />
                                </div>
                            </div>


                            <h4 className="settingSubject" id="material">Matertial</h4>
                            <div className="settingsSubclass" >
                                <div className="subClass">
                                    <label for="printingTemperature">Printing Temperature</label>
                                    <input type="number" name="printingTemperature" id="printingTemperature" className="subClassInput" /><p className="unit">°C</p>
                                </div>
                                <div className="subClass">
                                    <label for="printingTemperatureInitialLayer">Printing Temperature Initial Layer</label>
                                    <input type="number" name="printingTemperatureInitialLayer" id="printingTemperatureInitialLayer" className="subClassInput" /><p className="unit">°C</p>
                                </div>
                                <div className="subClass">
                                    <label for="initialPrintingTemperature">Initial Printing Temperature</label>
                                    <input type="number" name="initialPrintingTemperature" id="initialPrintingTemperature" className="subClassInput" /><p className="unit">°C</p>
                                </div>
                                <div className="subClass">
                                    <label for="finalPrintingTemperature">Final Printing Temperature</label>
                                    <input type="number" name="finalPrintingTemperature" id="finalPrintingTemperature" className="subClassInput" /><p className="unit">°C</p>
                                </div>
                                <div className="subClass">
                                    <label for="buildPlateTemperature">Build Plate Temperature</label>
                                    <input type="number" name="buildPlateTemperature" id="buildPlateTemperature" className="subClassInput" /><p className="unit">°C</p>
                                </div>
                                <div className="subClass">
                                    <label for="buildPlateTemperatureInitialLayer">Build Plate Temperature Initial Layer</label>
                                    <input type="number" name="buildPlateTemperatureInitialLayer" id="buildPlateTemperatureInitialLayer" className="subClassInput" /><p className="unit">°C</p>
                                </div>
                            </div>


                            <h4 className="settingSubject" id="speed">Speed</h4>
                            <div className="settingsSubclass" >
                                <div className="subClass">
                                    <label for="printSpeed">Print Speed</label>
                                    <input type="number" name="printSpeed" id="printSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="infillSpeed">Infill Speed</label>
                                    <input type="number" name="infillSpeed" id="infillSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="wallSpeed">Wall Speed</label>
                                    <input type="number" name="wallSpeed" id="wallSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="outerWallSpeed">Outer Wall Speed</label>
                                    <input type="number" name="outerWallSpeed" id="outerWallSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="innerWallSpeed">Inner Wall Speed</label>
                                    <input type="number" name="innerWallSpeed" id="innerWallSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="topBottomSpeed">Top/Bottom Speed</label>
                                    <input type="number" name="topBottomSpeed" id="topBottomSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="supportSpeed">Support Speed</label>
                                    <input type="number" name="supportSpeed" id="supportSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="travelSpeed">Travel Speed</label>
                                    <input type="number" name="travelSpeed" id="travelSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="initialLayerSpeed">Initial Layer Speed</label>
                                    <input type="number" name="initialLayerSpeed" id="initialLayerSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="skirtBrimSpeed">Skirt/Brim Speed</label>
                                    <input type="number" name="skirtBrimSpeed" id="skirtBrimSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="enableAccelerationControl">Enable Acceleration Control</label>
                                    <input type="checkbox" name="enableAccelerationControl" value="enableAccelerationControl" id="enableAccelerationControl" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="enableJerkControl">Enable Jerk Control</label>
                                    <input type="checkbox" name="enableJerkControl" value="enableJerkControl" id="enableJerkControl" className="subClassInput" />
                                </div>
                            </div>


                            <h4 className="settingSubject" id="travel">Travel</h4>
                            <div className="settingsSubclass" >
                                <div className="subClass">
                                    <label for="enableRetraction">Enable Retraction</label>
                                    <input type="checkbox" name="enableRetraction" value="enableRetraction" id="enableRetraction" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="retractAtLayerChange">Retract At Layer Change</label>
                                    <input type="checkbox" name="retractAtLayerChange" value="retractAtLayerChange" id="retractAtLayerChange" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="retractionDistance">Retraction Distance</label>
                                    <input type="number" name="retractionDistance" id="retractionDistance" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="retractionSpeed">Retraction Speed</label>
                                    <input type="number" name="retractionSpeed" id="retractionSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="combingMode">Combing Mode</label>
                                    <select name="combingMode" id="combingMode" className="subClassInput">
                                        <option value="off">Off</option>
                                        <option value="all">All</option>
                                        <option value="notInSkin">Not In Skin</option>
                                        <option value="withinInfill">Within Infill</option>
                                    </select>
                                </div>
                                <div className="subClass">
                                    <label for="avoidPrintedPartsWhenTraveling">Avoid Printed Parts When Traveling</label>
                                    <input type="checkbox" name="avoidPrintedPartsWhenTraveling" value="avoidPrintedPartsWhenTraveling" id="avoidPrintedPartsWhenTraveling" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="avoidSupportsWhenTraveling">Avoid Supports When Traveling</label>
                                    <input type="checkbox" name="avoidSupportsWhenTraveling" value="avoidSupportsWhenTraveling" id="avoidSupportsWhenTraveling" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="travelAvoidDistance">Travel Avoid Distance</label>
                                    <input type="number" name="travelAvoidDistance" id="travelAvoidDistance" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="zHopWhenRetracted">Z Hop When Retracted</label>
                                    <input type="checkbox" name="zHopWhenRetracted" value="zHopWhenRetracted" id="zHopWhenRetracted" className="subClassInput" />
                                </div>
                            </div>


                            <h4 className="settingSubject" id="cooling">Cooling</h4>
                            <div className="settingsSubclass">
                                <div className="subClass">
                                    <label for="enablePrintCooling">Enable Print Cooling</label>
                                    <input type="checkbox" name="enablePrintCooling" value="enablePrintCooling" id="enablePrintCooling" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="fanSpeed">Fan Speed</label>
                                    <input type="number" name="fanSpeed" id="fanSpeed" className="subClassInput" /><p className="unit">%</p>
                                </div>
                                <div className="subClass">
                                    <label for="regularFanSpeed">Regular Fan Speed</label>
                                    <input type="number" name="regularFanSpeed" id="regularFanSpeed" className="subClassInput" /><p className="unit">%</p>
                                </div>
                                <div className="subClass">
                                    <label for="maximumFanSpeed">Maximum Fan Speed</label>
                                    <input type="number" name="maximumFanSpeed" id="maximumFanSpeed" className="subClassInput" /><p className="unit">%</p>
                                </div>
                                <div className="subClass">
                                    <label for="regularMaximumFanSpeedThreshold">Regular/Maximum Fan Speed Threshold</label>
                                    <input type="number" name="regularMaximumFanSpeedThreshold" id="regularMaximumFanSpeedThreshold" className="subClassInput" /><p className="unit">s</p>
                                </div>
                                <div className="subClass">
                                    <label for="initialFanSpeed">Initial Fan Speed</label>
                                    <input type="number" name="initialFanSpeed" id="initialFanSpeed" className="subClassInput" /><p className="unit">%</p>
                                </div>
                                <div className="subClass">
                                    <label for="regularFanSpeedAtHeight">Regular Fan Speed at Height</label>
                                    <input type="number" name="regularFanSpeedAtHeight" id="regularFanSpeedAtHeight" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="regularFanSpeedAtLayer">Regular Fan Speed at Layer</label>
                                    <input type="number" name="regularFanSpeedAtLayer" id="regularFanSpeedAtLayer" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="minimumLayerTime">Minimum Layer Time</label>
                                    <input type="number" name="minimumLayerTime" id="minimumLayerTime" className="subClassInput" /><p className="unit">s</p>
                                </div>
                                <div className="subClass">
                                    <label for="minimumSpeed">Minimum Speed</label>
                                    <input type="number" name="minimumSpeed" id="minimumSpeed" className="subClassInput" /><p className="unit">mm/s</p>
                                </div>
                                <div className="subClass">
                                    <label for="liftHead">Lift Head</label>
                                    <input type="checkbox" name="liftHead" value="liftHead" id="liftHead" className="subClassInput" />
                                </div>
                            </div>


                            <h4 className="settingSubject" id="support">Support</h4>
                            <div className="settingsSubclass">
                                <div className="subClass">
                                    <label for="generateSupport">Generate Support</label>
                                    <input type="checkbox" name="generateSupport" value="generateSupport" id="generateSupport" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="supportPlacement">Support Placement</label>
                                    <select name="supportPlacement" id="supportPlacement" className="subClassInput">
                                        <option value="everywhere">Everywhere</option>
                                        <option value="touchingBuildPlate">Touching Build Plate</option>
                                    </select>
                                </div>
                                <div className="subClass">
                                    <label for="supportOverhangAngle">Support Overhang Angle</label>
                                    <input type="number" name="supportOverhangAngle" id="supportOverhangAngle" className="subClassInput" /><p className="unit">°</p>
                                </div>
                                <div className="subClass">
                                    <label for="supportPattern">Support Pattern</label>
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
                                <div className="subClass">
                                    <label for="supportDensity">Support Density</label>
                                    <input type="number" name="supportDensity" id="supportDensity" className="subClassInput" /><p className="unit">%</p>
                                </div>
                                <div className="subClass">
                                    <label for="supportHorizontalExpansion">Support Horizontal Expansion</label>
                                    <input type="number" name="supportHorizontalExpansion" id="supportHorizontalExpansion" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="supportInfillLayerThickness">Support Infill Layer Thickness</label>
                                    <input type="number" name="supportInfillLayerThickness" id="supportInfillLayerThickness" className="subClassInput" /><p className="unit">mm</p>
                                </div>
                                <div className="subClass">
                                    <label for="gradualSupportInfillSteps">Gradual Support Infill Steps</label>
                                    <input type="number" name="gradualSupportInfillSteps" id="gradualSupportInfillSteps" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="enableSupportInterface">Enable Support Interface</label>
                                    <input type="checkbox" name="enableSupportInterface" value="enableSupportInterface" id="enableSupportInterface" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="enableSupportRoof">Enable Support Roof</label>
                                    <input type="checkbox" name="enableSupportRoof" value="enableSupportRoof" id="enableSupportRoof" className="subClassInput" />
                                </div>
                                <div className="subClass">
                                    <label for="enableSupportFloor">Enable Support Floor</label>
                                    <input type="checkbox" name="enableSupportFloor" value="enableSupportFloor" id="enableSupportFloor" className="subClassInput" />
                                </div>
                            </div>


                            <h4 className="settingSubject" id="buildPlateAdhesion">Build Plate Adhesion</h4>
                            <div className="settingsSubclass">
                                <div className="subClass">
                                    <label for="buildPlateAdhesionType">Build Plate Adhesion Type</label>
                                    <select name="buildPlateAdhesionType" id="buildPlateAdhesionType" className="subClassInput" onChange={this.setAdhesionType}>
                                        <option value="skirt">Skirt</option>
                                        <option value="brim">Brim</option>
                                        <option value="raft">Raft</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                                {this.getAdhesionType()}
                            </div>


                            <h4 className="settingSubject" id="dualExtrusion">Dual Extrusion</h4>
                            <h4 className="settingSubject" id="specailModes">Specail Modes</h4>
                            <h4 className="settingSubject" id="experimental">Experimental</h4>
                        </div>
                        <div className="settingsDisplay">

                        </div>
                    </div>
                    <label htmlFor="machineUsed" className="mainLabel">Machine Used</label>
                    <input type="text" name="machineUsed" id="machineUsed" required />
                    <label htmlFor="printTime" className="mainLabel">Time to print (hours)</label>
                    <input id="printTime"
                        type="number"
                        name="printTime"
                        onChange={this.handleInputChange}
                        required />
                    <button id="submitButton"
                        type='submit'>
                        Add Print
                    </button>
                </form>
            </div>
        );
    }
};

export default NewDesign;