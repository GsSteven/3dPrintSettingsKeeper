import React from 'react';
import './NewDesign.css';
import defaultImg from './../../images/defaultImage.png';
import arrow from './../../images/arrow.png';
import Quality from '../Quality/Quality';
import Shell from '../Shell/Shell';
import Infill from '../Infill/Infill';
import Material from '../Material/Material';
import Speed from '../Speed/Speed';
import Travel from '../Travel/Travel';
import Cooling from '../Cooling/Cooling';
import Support from '../Support/Support';
import BuildPlateAdhesion from '../BuildPlateAdhesion/BuildPlateAdhesion';
import SpecailModes from '../SpecailModes/SpecailModes';
import Experimental from '../Experimental/Experimental';


class NewDesign extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            qualityToggle: false,
            shellToggle: false,
            infillToggle: false,
            materialToggle: false,
            speedToggle: false,
            travelToggle: false,
            coolingToggle: false,
            supportToggle: false,
            buildPlateAdhesionToggle: false,
            specailModesToggle: false,
            experimentalToggle: false,
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e) {
        const value = e.target.id;
        const valueState = value + 'Toggle';
        const arrowIcon = document.getElementById(value).childNodes[1];
        //rotate arrow icon and expand section
        if (this.state[valueState]) {
            this.setState({ [valueState]: false });
            arrowIcon.className = "arrowIcon";
        } else {
            this.setState({ [valueState]: true });
            arrowIcon.className = "rotateArrow";
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
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
                            <h4 className="settingSubject" id="quality" onClick={this.handleToggle}>
                                Quality <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.qualityToggle && <Quality />}

                            <h4 className="settingSubject" id="shell" onClick={this.handleToggle}>
                                Shell <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.shellToggle && <Shell />}

                            <h4 className="settingSubject" id="infill" onClick={this.handleToggle}>
                                Infill <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.infillToggle && <Infill />}

                            <h4 className="settingSubject" id="material" onClick={this.handleToggle}>
                                Material <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.materialToggle && <Material />}

                            <h4 className="settingSubject" id="speed" onClick={this.handleToggle}>
                                Speed <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.speedToggle && <Speed />}

                            <h4 className="settingSubject" id="travel" onClick={this.handleToggle}>
                                Travel <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.travelToggle && <Travel />}

                            <h4 className="settingSubject" id="cooling" onClick={this.handleToggle}>
                                Cooling <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.coolingToggle && <Cooling />}

                            <h4 className="settingSubject" id="support" onClick={this.handleToggle}>
                                Support <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.supportToggle && <Support />}

                            <h4 className="settingSubject" id="buildPlateAdhesion" onClick={this.handleToggle}>
                                Build Plate Adhesion <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.buildPlateAdhesionToggle && <BuildPlateAdhesion />}

                            <h4 className="settingSubject" id="specailModes" onClick={this.handleToggle}>
                                Specail Modes <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.specailModesToggle && <SpecailModes />}

                            <h4 className="settingSubject" id="experimental" onClick={this.handleToggle}>
                                Experimental <img className="arrowIcon" src={arrow} alt="arrowIcon" />
                            </h4>
                            {this.state.experimentalToggle && <Experimental />}
                        </div>

                    </div>
                    <label htmlFor="machineUsed" className="mainLabel">Machine Used</label>
                    <input id="machineUsed"
                        type="text"
                        name="machineUsed"
                        required
                    />

                    <label htmlFor="printTime" className="mainLabel">Time to print (hours)</label>
                    <input id="printTime"
                        type="number"
                        name="printTime"
                        onChange={this.handleInputChange}
                        required
                    />
                    <button id="submitButton"
                        type='submit'>
                        Save
                    </button>
                </form>
            </div>
        );
    }
};

export default NewDesign;