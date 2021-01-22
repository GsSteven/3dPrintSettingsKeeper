import React from 'react';
import ExpandedPrint from './../ExpandedPrint/ExpandedPrint';
import './Print.css';
import defaultImg from './../../images/defaultImage.png';

class Print extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
    setImg() {
        if (this.props.printSettings.img) {
            return this.props.printSettings.img;
        } else {
            return defaultImg;
        }
    }

    render() {
        const settings = this.props.printSettings;

        return (
            <div className="printWrapper">
                <h1 className="printTitle">{settings.title}</h1>
                <div className="print">
                    <img className="printThumb" src={this.setImg()} alt="print design" />
                    <h3 className="printTime">Print time: {settings.printTime}hr(s)</h3>
                </div>
                {this.state.expanded && <ExpandedPrint />}
            </div>
        );
    }
};

export default Print;