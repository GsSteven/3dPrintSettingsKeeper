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
        this.expandPrint = this.expandPrint.bind(this);
        this.closePrint = this.closePrint.bind(this);
    }

    expandPrint() {
        this.setState({ expanded: true });
    }

    closePrint() {
        this.setState({ expanded: false });
    }

    setImg() {
        if (this.props.printSettings.img) {
            return this.props.printSettings.img;
        } else {
            return defaultImg;
        }
    }

    limitText(text) {
        if (text.length > 11) {
            return text.slice(0, 11) + "...";
        }
        else return text;
    }

    render() {
        const settings = this.props.printSettings;

        return (
            <div className="printWrapper" >
                <h1 className="printTitle">{this.limitText(settings.title)}</h1>
                <div className="print">
                    <img className="printThumb" src={this.setImg()} alt="print design" onClick={this.expandPrint} />
                    <h3 className="printTime">Print time: {settings.printTime}hr(s)</h3>
                    <h2 className="machineUsed">{this.limitText(settings.machineUsed)}</h2>
                </div>
                {this.state.expanded &&
                    <ExpandedPrint
                        printSettings={this.props.printSettings}
                        id={this.props.id}
                        refresh={this.props.refresh}
                        close={this.closePrint}
                    />
                }
            </div>
        );
    }
};

export default Print;