import React from 'react';


class Experimental extends React.Component {
    render() {
        return (
            <div className="settingsSubclass">
                <div className="subclass">
                    <label htmlFor="makeOverhangPrintable">Make Overhang Printable</label>
                    <input type="checkbox" name="makeOverhangPrintable" value="makeOverhangPrintable" id="makeOverhangPrintable" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="enableConicalSupport">Enable Conical Support</label>
                    <input type="checkbox" name="enableConicalSupport" value="enableConicalSupport" id="enableConicalSupport" className="subClassInput" />
                </div>
                <div className="subclass">
                    <label htmlFor="useAdaptiveLayers">Use Adaptive Layers</label>
                    <input type="checkbox" name="useAdaptiveLayers" value="useAdaptiveLayers" id="useAdaptiveLayers" className="subClassInput" />
                </div>
            </div>
        );
    }
};

export default Experimental;