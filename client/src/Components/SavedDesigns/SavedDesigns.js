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
                console.log(response);
            })
    }

    componentDidMount() {
        this.getPrints();
    }

    render() {
        const prints = this.state.prints.map(print => {
            return (
                <Print printSettings={print.printSettings}
                />
            );
        });

        return (
            <div className="savedDesignsWrapper">
                <div className="designs">
                    {prints}
                </div>
            </div>
        );
    }
};

export default SavedDesigns;