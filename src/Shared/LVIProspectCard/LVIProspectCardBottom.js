import React from 'react';
import './LVIProspectCard.css';

export class LVIProspectCardBottom extends React.Component {
    render() {
        return (
            <div className="lvi-prospect-card-bottom">
                <input type="text" className="lvi-prospect-input" />
                <span className="lvi-intelligence-icon sh-icon icon-clock"></span>
                <div className="lvi-confidence-score">
                    {(this.props.displayOptions.confidence) ? this.props.displayOptions.confidence: ''}
                </div>
            </div>
        )
    }
}

export default LVIProspectCardBottom;