import React from 'react';
import axios from 'axios';
import './ExpandedPrint.css';
import defaultImg from './../../images/defaultImage.png';
import downloadIcon from './../../images/downloadIcon.png';
import arrow from './../../images/arrow.png';
import loading from '../../images/loading.gif';

class ExpandedPrint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonDisplay: 'save'
        }

        this.setAdhesionType = this.setAdhesionType.bind(this);
        this.getAdhesionType = this.getAdhesionType.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setAdhesionType(e) {
        const value = e.target.value;

        switch (value) {
            case "skirt":
                this.setState({ buildPlateAdhesionType: "skirt" });
                break;
            case "brim":
                this.setState({ buildPlateAdhesionType: "brim" });
                break;
            case "raft":
                this.setState({ buildPlateAdhesionType: "raft" });
                break;
            case "none": this.setState({ buildPlateAdhesionType: "none" });
                break;
            default: console.log('error at adhesionType switch');
        }
    }

    getAdhesionType() {
        switch (this.state.buildPlateAdhesionType) {
            case "skirt":
                return (
                    <div className="subclass">
                        <label htmlFor="skirtLineCount" >Skirt Line Count</label>
                        <input type="number" name="skirtLineCount" id="skirtLineCount" className="subClassInput" />
                    </div>
                )
            case "brim":
                return (
                    <div>
                        <div className="subclass">
                            <label htmlFor="brimWidth" >Brim Width</label>
                            <input type="number" name="brimWidth" id="brimWidth" className="subClassInput" /><p className="unit">mm</p>
                        </div>
                        <div className="subclass">
                            <label htmlFor="brimLineCount" >Brim Line Count</label>
                            <input type="number" name="brimLineCount" id="brimLineCount" className="subClassInput" />
                        </div>
                        <div className="subclass">
                            <label htmlFor="brimOnlyOnOutside">Brim Only on Outside</label>
                            <input type="checkbox" name="brimOnlyOnOutside" id="brimOnlyOnOutside" value="brimOnlyOnOutside" className="subClassInput" />
                        </div>
                    </div>
                )
            case "raft":
                return (
                    <div className="subclass">
                        <label htmlFor="raftAirGap" >Raft Air Gap</label>
                        <input type="number" name="raftAirGap" id="raftAirGap" className="subClassInput" /><p className="unit">mm</p>
                    </div>
                )
            case "none":
                break;
            default: console.log('error at getAdhesionType switch');
        }
    }

    buttonDisplay() {
        switch (this.state.buttonDisplay) {
            case 'save':
                return 'save';
            case 'loading':
                return <img src={loading} alt="loading" className="loading" />;
            case 'saved':
                return 'saved';
            case 'error':
                return 'error';
            default:
                console.error('error at buttonDisplay switch');
        }
    }

    handleToggle(e) {
        const value = e.target.id;
        const valueState = value + 'Toggle';
        const arrowIcon = document.getElementById(value).childNodes[1];
        const settingsId = value + 'Settings';
        const settings = document.getElementById(settingsId);

        //rotate arrow icon and expand section
        if (this.state[valueState]) {
            this.setState({ [valueState]: false });
            arrowIcon.className = "arrowIcon";
            settings.className = "settingsSubclass"
        } else {
            this.setState({ [valueState]: true });
            arrowIcon.className = "rotateArrow";
            settings.className = "displaySubclass";
        }
    }

    handleChange(e) {
        const setting = e.target.name;
        const value = e.target.value;
        //if image get the files not value
        if (setting === "img") {
            //set temp img in case file is chosen but not submitted to prevent unneeded upload
            this.setState({
                tempImg: URL.createObjectURL(e.target.files[0]),
                img: e.target.files[0]
            })
        } else {
            this.setState({ [setting]: value });
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const payLoad = {};

        this.setState({ buttonDisplay: 'loading' });

        //filter out toggle states and tempImg for payLoad
        for (const key in this.state) {
            if (key.indexOf("Toggle") === -1 && key !== "tempImg" && key !== "buttonDisplay") {
                payLoad[key] = this.state[key];
            }
        }

        //if custom image is added, create form data to upload to image hosting
        if (payLoad.img) {
            const imgFormData = new FormData();
            imgFormData.append('image', this.state.img);
            await axios.post(`/api/upload`, imgFormData, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then(response => {
                    const imgUrl = response.data.imageUrl;
                    return imgUrl;
                })
                //set payload img as url link returned after image upload
                .then(response => {
                    payLoad.img = response;
                })
                .catch(e => {
                    console.error(e);
                });
        }

        await axios.post('/api/prints', payLoad)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ buttonDisplay: 'saved' });
                } else {
                    this.setState({ buttonDisplay: 'error' })
                }
            })
            .catch(e => {
                console.error(e);
                this.setState({ buttonDisplay: 'error' });
            });
    }

    componentDidMount() {
        for (const key in this.props.printSettings) {
            if (key !== 'file') {
                const input = document.getElementById(key);
                input.defaultValue = this.props.printSettings[key];
            }
        }
    }
    render() {
        return (
            <div className="expandedPrintWrapper">
                <button className="closeButton" onClick={this.props.close}>X</button>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title" className="mainLabel">Title</label>
                    <input id="title"
                        type="text" name="title"
                        required
                        onChange={this.handleChange}
                    />
                    <div className="uploadWrapper">
                        <label htmlFor="img" className="mainLabel">
                            <p>Add/Change image</p>
                            <div id="printImg">
                                <img src={this.props.printSettings.img ? this.props.printSettings.img : defaultImg} alt=''></img>
                            </div>
                        </label>
                        <input id="img"
                            type="file" name="img"
                            accept=".jpg, .jpeg, .png, .gif"
                            onChange={this.handleChange}
                        />
                        {this.props.printSettings.file &&
                            <a href={this.props.printSettings.file} download>
                                <div className="downloadButton">
                                    <img src={downloadIcon} alt="download" /> Download File
                                </div>
                            </a>
                        }
                    </div>
                    <div className="settings">


                        {/* Quality */}
                        <h4 className="displaySettingSubject" id="quality" onClick={this.handleToggle}>
                            Quality <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="qualitySettings">
                            <div className="subclass">
                                <label htmlFor="layerHeight">Layer Height</label>
                                <input type="number" name="layerHeight" id="layerHeight" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="initialLayerHeight">Initial Layer Height</label>
                                <input type="number" name="initialLayerHeight" id="initialLayerHeight" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="lineWidth">Line Width</label>
                                <input type="number" name="lineWidth" id="lineWidth" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="wallLineWidth">Wall Line Width</label>
                                <input type="number" name="wallLineWidth" id="wallLineWidth" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="outerWallLineWidth">Outer Wall Line Width</label>
                                <input type="number" name="outerWallLineWidth" id="outerWallLineWidth" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="innderWallLineWidth">Inner Wall Line Width</label>
                                <input type="number" name="innderWallLineWidth" id="innderWallLineWidth" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="topBottomLineWidth">Top/Bottom Line Width</label>
                                <input type="number" name="topBottomLineWidth" id="topBottomLineWidth" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="infillLineWidth">Infill Line Width</label>
                                <input type="number" name="infillLineWidth" id="infillLineWidth" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="initialLayerLineWidth">Initial Layer Line Width</label>
                                <input type="number" name="initialLayerLineWidth" id="initialLayerLineWidth" className="subClassInput" onChange={this.handleChange} /><p className="unit">%</p>
                            </div>
                        </div>


                        {/* Shell */}
                        <h4 className="displaySettingSubject" id="shell" onClick={this.handleToggle}>
                            Shell <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="shellSettings">
                            <div className="subclass">
                                <label htmlFor="wallThickness">Wall Thickness</label>
                                <input type="number" name="wallThickness" id="wallThickness" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="wallLineCount">Wall Line Count</label>
                                <input type="number" name="wallLineCount" id="wallLineCount" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="topBottomThickness">Top/Bottom Thickness</label>
                                <input type="number" name="topBottomThickness" id="topBottomThickness" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="topThickness">Top Thickness</label>
                                <input type="number" name="topThickness" id="topThickness" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="topLayers">Top Layers</label>
                                <input type="number" name="topLayers" id="topLayers" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="bottomThickness">Bottom Thickness</label>
                                <input type="number" name="bottomThickness" id="bottomThickness" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="bottomLayers">Bottom Layers</label>
                                <input type="number" name="bottomLayers" id="bottomLayers" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="fillGapsBetweenWalls">Fill Gaps Between Walls</label>
                                <select type="" name="fillGapsBetweenWalls" id="fillGapsBetweenWalls" className="subClassInput" onChange={this.handleChange} >
                                    <option value=""></option>
                                    <option value="everywhere">Everywhere</option>
                                    <option value="nowhere">Nowhere</option>
                                </select>
                            </div>
                            <div className="subclass">
                                <label htmlFor="horizontalExpansion">Horizontal Expansion</label>
                                <input type="number" name="horizontalExpansion" id="horizontalExpansion" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="enableIroning">Enable Ironing</label>
                                <input type="checkbox" name="enableIroning" id="enableIroning" className="subClassInput" onChange={this.handleChange} />
                            </div>
                        </div>


                        {/* Infill */}
                        <h4 className="displaySettingSubject" id="infill" onClick={this.handleToggle}>
                            Infill <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="infillSettings">
                            <div className="subclass">
                                <label htmlFor="infillDesnsity">Infill Density</label>
                                <input type="number" name="infillDesnsity" id="infillDesnsity" className="subClassInput" onChange={this.handleChange} /><p className="unit">%</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="infillLineDistance">Infill Line Distance</label>
                                <input type="number" name="infillLineDistance" id="infillLineDistance" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="infillPattern">Infill Pattern</label>
                                <select name="infillPattern" id="infillPattern" className="subClassInput" onChange={this.handleChange}>
                                    <option value=""></option>
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
                                <input type="number" name="infillLineMultiplier" id="infillLineMultiplier" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="infillOverlapPercentage">Infill Overlap Percentage</label>
                                <input type="number" name="infillOverlapPercentage" id="infillOverlapPercentage" className="subClassInput" onChange={this.handleChange} /><p className="unit">%</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="infillLayerThickness">Infill Layer Thickness</label>
                                <input type="number" name="infillLayerThickness" id="infillLayerThickness" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="gradualInfillSteps">Gradual Infill Steps</label>
                                <input type="number" name="gradualInfillSteps" id="gradualInfillSteps" className="subClassInput" onChange={this.handleChange} />
                            </div>
                        </div>


                        {/* Material */}
                        <h4 className="displaySettingSubject" id="material" onClick={this.handleToggle}>
                            Material <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="materialSettings">
                            <div className="subclass">
                                <label htmlFor="printingTemperature">Printing Temperature</label>
                                <input type="number" name="printingTemperature" id="printingTemperature" className="subClassInput" onChange={this.handleChange} /><p className="unit">°C</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="printingTemperatureInitialLayer">Printing Temperature Initial Layer</label>
                                <input type="number" name="printingTemperatureInitialLayer" id="printingTemperatureInitialLayer" className="subClassInput" onChange={this.handleChange} /><p className="unit">°C</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="initialPrintingTemperature">Initial Printing Temperature</label>
                                <input type="number" name="initialPrintingTemperature" id="initialPrintingTemperature" className="subClassInput" onChange={this.handleChange} /><p className="unit">°C</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="finalPrintingTemperature">Final Printing Temperature</label>
                                <input type="number" name="finalPrintingTemperature" id="finalPrintingTemperature" className="subClassInput" onChange={this.handleChange} /><p className="unit">°C</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="buildPlateTemperature">Build Plate Temperature</label>
                                <input type="number" name="buildPlateTemperature" id="buildPlateTemperature" className="subClassInput" onChange={this.handleChange} /><p className="unit">°C</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="buildPlateTemperatureInitialLayer">Build Plate Temperature Initial Layer</label>
                                <input type="number" name="buildPlateTemperatureInitialLayer" id="buildPlateTemperatureInitialLayer" className="subClassInput" onChange={this.handleChange} /><p className="unit">°C</p>
                            </div>
                        </div>


                        {/* Speed */}
                        <h4 className="displaySettingSubject" id="speed" onClick={this.handleToggle}>
                            Speed <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="speedSettings">
                            <div className="subclass">
                                <label htmlFor="printSpeed">Print Speed</label>
                                <input type="number" name="printSpeed" id="printSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="infillSpeed">Infill Speed</label>
                                <input type="number" name="infillSpeed" id="infillSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="wallSpeed">Wall Speed</label>
                                <input type="number" name="wallSpeed" id="wallSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="outerWallSpeed">Outer Wall Speed</label>
                                <input type="number" name="outerWallSpeed" id="outerWallSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="innerWallSpeed">Inner Wall Speed</label>
                                <input type="number" name="innerWallSpeed" id="innerWallSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="topBottomSpeed">Top/Bottom Speed</label>
                                <input type="number" name="topBottomSpeed" id="topBottomSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="supportSpeed">Support Speed</label>
                                <input type="number" name="supportSpeed" id="supportSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="travelSpeed">Travel Speed</label>
                                <input type="number" name="travelSpeed" id="travelSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="initialLayerSpeed">Initial Layer Speed</label>
                                <input type="number" name="initialLayerSpeed" id="initialLayerSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="skirtBrimSpeed">Skirt/Brim Speed</label>
                                <input type="number" name="skirtBrimSpeed" id="skirtBrimSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="enableAccelerationControl">Enable Acceleration Control</label>
                                <input type="checkbox" name="enableAccelerationControl" value="enableAccelerationControl" id="enableAccelerationControl" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="enableJerkControl">Enable Jerk Control</label>
                                <input type="checkbox" name="enableJerkControl" value="enableJerkControl" id="enableJerkControl" className="subClassInput" onChange={this.handleChange} />
                            </div>
                        </div>


                        {/* Travel */}
                        <h4 className="displaySettingSubject" id="travel" onClick={this.handleToggle}>
                            Travel <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="travelSettings">
                            <div className="subclass">
                                <label htmlFor="enableRetraction">Enable Retraction</label>
                                <input type="checkbox" name="enableRetraction" value="enableRetraction" id="enableRetraction" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="retractAtLayerChange">Retract At Layer Change</label>
                                <input type="checkbox" name="retractAtLayerChange" value="retractAtLayerChange" id="retractAtLayerChange" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="retractionDistance">Retraction Distance</label>
                                <input type="number" name="retractionDistance" id="retractionDistance" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="retractionSpeed">Retraction Speed</label>
                                <input type="number" name="retractionSpeed" id="retractionSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="combingMode">Combing Mode</label>
                                <select name="combingMode" id="combingMode" className="subClassInput" onChange={this.handleChange}>
                                    <option value=""></option>
                                    <option value="off">Off</option>
                                    <option value="all">All</option>
                                    <option value="notInSkin">Not In Skin</option>
                                    <option value="withinInfill">Within Infill</option>
                                </select>
                            </div>
                            <div className="subclass">
                                <label htmlFor="avoidPrintedPartsWhenTraveling">Avoid Printed Parts When Traveling</label>
                                <input type="checkbox" name="avoidPrintedPartsWhenTraveling" value="avoidPrintedPartsWhenTraveling" id="avoidPrintedPartsWhenTraveling" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="avoidSupportsWhenTraveling">Avoid Supports When Traveling</label>
                                <input type="checkbox" name="avoidSupportsWhenTraveling" value="avoidSupportsWhenTraveling" id="avoidSupportsWhenTraveling" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="travelAvoidDistance">Travel Avoid Distance</label>
                                <input type="number" name="travelAvoidDistance" id="travelAvoidDistance" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="zHopWhenRetracted">Z Hop When Retracted</label>
                                <input type="checkbox" name="zHopWhenRetracted" value="zHopWhenRetracted" id="zHopWhenRetracted" className="subClassInput" onChange={this.handleChange} />
                            </div>
                        </div>


                        {/* Cooling */}
                        <h4 className="displaySettingSubject" id="cooling" onClick={this.handleToggle}>
                            Cooling <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="coolingSettings">
                            <div className="subclass">
                                <label htmlFor="enablePrintCooling">Enable Print Cooling</label>
                                <input type="checkbox" name="enablePrintCooling" value="enablePrintCooling" id="enablePrintCooling" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="fanSpeed">Fan Speed</label>
                                <input type="number" name="fanSpeed" id="fanSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">%</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="regularFanSpeed">Regular Fan Speed</label>
                                <input type="number" name="regularFanSpeed" id="regularFanSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">%</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="maximumFanSpeed">Maximum Fan Speed</label>
                                <input type="number" name="maximumFanSpeed" id="maximumFanSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">%</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="regularMaximumFanSpeedThreshold">Regular/Maximum Fan Speed Threshold</label>
                                <input type="number" name="regularMaximumFanSpeedThreshold" id="regularMaximumFanSpeedThreshold" className="subClassInput" onChange={this.handleChange} /><p className="unit">s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="initialFanSpeed">Initial Fan Speed</label>
                                <input type="number" name="initialFanSpeed" id="initialFanSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">%</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="regularFanSpeedAtHeight">Regular Fan Speed at Height</label>
                                <input type="number" name="regularFanSpeedAtHeight" id="regularFanSpeedAtHeight" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="regularFanSpeedAtLayer">Regular Fan Speed at Layer</label>
                                <input type="number" name="regularFanSpeedAtLayer" id="regularFanSpeedAtLayer" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="minimumLayerTime">Minimum Layer Time</label>
                                <input type="number" name="minimumLayerTime" id="minimumLayerTime" className="subClassInput" onChange={this.handleChange} /><p className="unit">s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="minimumSpeed">Minimum Speed</label>
                                <input type="number" name="minimumSpeed" id="minimumSpeed" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm/s</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="liftHead">Lift Head</label>
                                <input type="checkbox" name="liftHead" value="liftHead" id="liftHead" className="subClassInput" onChange={this.handleChange} />
                            </div>
                        </div>


                        {/* Support */}
                        <h4 className="displaySettingSubject" id="support" onClick={this.handleToggle}>
                            Support <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="supportSettings">
                            <div className="subclass">
                                <label htmlFor="generateSupport">Generate Support</label>
                                <input type="checkbox" name="generateSupport" value="generateSupport" id="generateSupport" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="supportPlacement">Support Placement</label>
                                <select name="supportPlacement" id="supportPlacement" className="subClassInput" onChange={this.handleChange}>
                                    <option value=""></option>
                                    <option value="everywhere">Everywhere</option>
                                    <option value="touchingBuildPlate">Touching Build Plate</option>
                                </select>
                            </div>
                            <div className="subclass">
                                <label htmlFor="supportOverhangAngle">Support Overhang Angle</label>
                                <input type="number" name="supportOverhangAngle" id="supportOverhangAngle" className="subClassInput" onChange={this.handleChange} /><p className="unit">°</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="supportPattern">Support Pattern</label>
                                <select name="supportPattern" id="supportPattern" className="subClassInput" onChange={this.handleChange}>
                                    <option value=""></option>
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
                                <input type="number" name="supportDensity" id="supportDensity" className="subClassInput" onChange={this.handleChange} /><p className="unit">%</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="supportHorizontalExpansion">Support Horizontal Expansion</label>
                                <input type="number" name="supportHorizontalExpansion" id="supportHorizontalExpansion" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="supportInfillLayerThickness">Support Infill Layer Thickness</label>
                                <input type="number" name="supportInfillLayerThickness" id="supportInfillLayerThickness" className="subClassInput" onChange={this.handleChange} /><p className="unit">mm</p>
                            </div>
                            <div className="subclass">
                                <label htmlFor="gradualSupportInfillSteps">Gradual Support Infill Steps</label>
                                <input type="number" name="gradualSupportInfillSteps" id="gradualSupportInfillSteps" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="enableSupportInterface">Enable Support Interface</label>
                                <input type="checkbox" name="enableSupportInterface" value="enableSupportInterface" id="enableSupportInterface" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="enableSupportRoof">Enable Support Roof</label>
                                <input type="checkbox" name="enableSupportRoof" value="enableSupportRoof" id="enableSupportRoof" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="enableSupportFloor">Enable Support Floor</label>
                                <input type="checkbox" name="enableSupportFloor" value="enableSupportFloor" id="enableSupportFloor" className="subClassInput" onChange={this.handleChange} />
                            </div>
                        </div>


                        {/* Build Plate Adhesion */}
                        <h4 className="displaySettingSubject" id="buildPlateAdhesion" onClick={this.handleToggle}>
                            Build Plate Adhesion <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="buildPlateAdhesionSettings">
                            <div className="subclass">
                                <label htmlFor="buildPlateAdhesionType">Build Plate Adhesion Type</label>
                                <select name="buildPlateAdhesionType" id="buildPlateAdhesionType" className="subClassInput" onChange={this.setAdhesionType}>
                                    <option value=""></option>
                                    <option value="skirt">Skirt</option>
                                    <option value="brim">Brim</option>
                                    <option value="raft">Raft</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                            {this.state.buildPlateAdhesionType && this.getAdhesionType()}
                        </div>


                        {/* Specail Modes */}
                        <h4 className="displaySettingSubject" id="specailModes" onClick={this.handleToggle}>
                            Specail Modes <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="specailModesSettings">
                            <div className="subclass">
                                <label htmlFor="printSequence">Print Sequence</label>
                                <select name="printSequence" id="printSequence" className="subClassInput" onChange={this.handleChange}>
                                    <option value=""></option>
                                    <option value="allAtOnce">All at Once</option>
                                    <option value="oneAtATime">One at a Time</option>
                                </select>
                            </div>
                            <div className="subclass">
                                <label htmlFor="surfaceMode">Surface Mode</label>
                                <select name="surfaceMode" id="surfaceMode" className="subClassInput" onChange={this.handleChange}>
                                    <option value=""></option>
                                    <option value="normal">Normal</option>
                                    <option value="surface">Surface</option>
                                    <option value="both">Both</option>
                                </select>
                            </div>
                            <div className="subclass">
                                <label htmlFor="spiralizeOuterContour">Spiralize Outer Contour</label>
                                <input type="checkbox" name="spiralizeOuterContour" value="spiralizeOuterContour" id="spiralizeOuterContour" className="subClassInput" onChange={this.handleChange} />
                            </div>
                        </div>


                        {/* Experimental */}
                        <h4 className="displaySettingSubject" id="experimental" onClick={this.handleToggle}>
                            Experimental <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                        </h4>
                        <div className="settingsSubclass" id="experimentalSettings">
                            <div className="subclass">
                                <label htmlFor="makeOverhangPrintable">Make Overhang Printable</label>
                                <input type="checkbox" name="makeOverhangPrintable" value="makeOverhangPrintable" id="makeOverhangPrintable" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="enableConicalSupport">Enable Conical Support</label>
                                <input type="checkbox" name="enableConicalSupport" value="enableConicalSupport" id="enableConicalSupport" className="subClassInput" onChange={this.handleChange} />
                            </div>
                            <div className="subclass">
                                <label htmlFor="useAdaptiveLayers">Use Adaptive Layers</label>
                                <input type="checkbox" name="useAdaptiveLayers" value="useAdaptiveLayers" id="useAdaptiveLayers" className="subClassInput" onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <label htmlFor="machineUsed" className="mainLabel">Machine Used</label>
                    <input id="machineUsed"
                        type="text"
                        name="machineUsed"
                        required
                        onChange={this.handleChange}
                    />

                    <label htmlFor="printTime" className="mainLabel">Time to print (hours)</label>
                    <input id="printTime"
                        type="number"
                        name="printTime"
                        required
                        onChange={this.handleChange}
                    />
                    <button id="submitButton"
                        type='submit'>
                        {this.buttonDisplay()}
                    </button>
                </form>
            </div>
        );
    }
};

export default ExpandedPrint;