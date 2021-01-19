import React from 'react';
import './NewDesign.css';
import defaultImg from './../../images/defaultImage.png';


class NewDesign extends React.Component {


    render() {
        return (
            <div className="newDesignWrapper">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input id="title"
                        type="text" name="title"
                        onChange={this.handleInputChange}
                        required />
                    <div className="uploadWrapper">
                        <label htmlFor="img">
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
                            <h4 className="settingSubject">Quality</h4>
                            <h4 className="settingSubject">Shell</h4>
                            <h4 className="settingSubject">Infill</h4>
                            <h4 className="settingSubject">Matertial</h4>
                            <h4 className="settingSubject">Speed</h4>
                            <h4 className="settingSubject">Travel</h4>
                            <h4 className="settingSubject">Cooling</h4>
                            <h4 className="settingSubject">Support</h4>
                            <h4 className="settingSubject">Build Plate Adhesion</h4>
                            <h4 className="settingSubject">Dual Extrusion</h4>
                            <h4 className="settingSubject">Specail Modes</h4>
                            <h4 className="settingSubject">Experimental</h4>
                        </div>
                        <div className="settingsDisplay">

                        </div>
                    </div>
                    <label htmlFor="printTime">Time to print (hours)</label>
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