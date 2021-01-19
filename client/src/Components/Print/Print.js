import React from 'react';
import './Print.css';
import defaultImg from './../../images/defaultImage.png';

class Print extends React.Component {
    render() {
        return (
            <div className="printWrapper">
                <h1 className="printTitle">Title</h1>
                <div className="print">
                    <img className="printThumb" src={defaultImg} alt="print design" />
                    <h3 className="printTime">Print time: 1hr</h3>
                </div>
            </div>
        );
    }
};

export default Print;