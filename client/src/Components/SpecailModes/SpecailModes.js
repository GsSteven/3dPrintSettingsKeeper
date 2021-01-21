import React from 'react';


class SpecailModes extends React.Component {
    render() {
        return (
            <div className="settingsSubclass">
                <div className="subclass">
                    <label htmlFor="printSequence">Print Sequence</label>
                    <select name="printSequence" id="printSequence" className="subClassInput" onChange={this.setAdhesionType}>
                        <option value="allAtOnce">All at Once</option>
                        <option value="oneAtATime">One at a Time</option>
                    </select>
                </div>
                <div className="subclass">
                    <label htmlFor="surfaceMode">Surface Mode</label>
                    <select name="surfaceMode" id="surfaceMode" className="subClassInput" onChange={this.setAdhesionType}>
                        <option value="normal">Normal</option>
                        <option value="surface">Surface</option>
                        <option value="both">Both</option>
                    </select>
                </div>
                <div className="subclass">
                    <label htmlFor="spiralizeOuterContour">Spiralize Outer Contour</label>
                    <input type="checkbox" name="spiralizeOuterContour" value="spiralizeOuterContour" id="spiralizeOuterContour" className="subClassInput" />
                </div>
            </div>
        );
    }
};

export default SpecailModes;