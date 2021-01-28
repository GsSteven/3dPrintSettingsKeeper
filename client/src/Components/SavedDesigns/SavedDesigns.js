import React from 'react';
import axios from 'axios';
import './SavedDesigns.css';
import Print from './../Print/Print';


class SavedDesigns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prints: []
        }
        this.getPrints = this.getPrints.bind(this);
    }

    async getPrints() {
        await axios.get('/api/prints')
            .then(response => {
                this.setState({ prints: response.data });
            })
    }

    componentDidMount() {
        this.getPrints();
    }

    render() {
        const prints = this.state.prints.map(print => {
            return (
                <Print
                    printSettings={print.printSettings}
                    id={print._id}
                    refresh={this.getPrints}
                    key={print._id}
                />
            );
        });

        return (
            <div className="savedDesignsWrapper">
                <h1 className="saved"><u>Saved</u></h1>
                <div className="designs">
                    {prints}
                </div>
            </div>
        );
    }
};

export default SavedDesigns;