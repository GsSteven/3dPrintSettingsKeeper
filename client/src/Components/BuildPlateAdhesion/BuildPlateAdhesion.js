import React from 'react';


class BuildPlateAdhesion extends React.Component {

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


    render() {
        return (
            <div className="settingsSubclass">
                <div className="subclass">
                    <label htmlFor="buildPlateAdhesionType">Build Plate Adhesion Type</label>
                    <select name="buildPlateAdhesionType" id="buildPlateAdhesionType" className="subClassInput" onChange={this.setAdhesionType}>
                        <option value="skirt">Skirt</option>
                        <option value="brim">Brim</option>
                        <option value="raft">Raft</option>
                        <option value="none">None</option>
                    </select>
                </div>
                {this.getAdhesionType()}
            </div>
        );
    }
};

export default BuildPlateAdhesion;