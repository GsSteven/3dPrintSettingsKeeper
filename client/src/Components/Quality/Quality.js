import React from 'react';


class Quality extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const eventId = e.target.name;
        this.setState({ values: { [eventId]: e.target.value } });
        console.log(this.state.values);
    }

    render() {
        return (
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
        );
    }
};

export default Quality;