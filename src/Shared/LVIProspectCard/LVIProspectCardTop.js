import React from 'react';
import './LVIProspectCard.css';

export class LVIProspectCardTop extends React.Component {
    render() {
        return (
            <div className="lvi-prospect-card-top">
                <div className="lvi-prospect-info">
                    <div className="lvi-prospect-name">
                        {this.props.prospect.first + this.props.prospect.last}
                    </div>
                    <div className="lvi-prospect-position">
                        {this.props.prospect.company}
                    </div>
                    <div className="lvi-prospect-other">
                        {this.props.prospect.other}
                    </div>
                </div>
                <div className="lvi-prospect-status">
                    <div className="lvi-status-icon">
                        <i className="sh-icon icon-check" />
                    </div>
                    <div className="lvi-status-text">
                        {(this.props.displayOptions.status) ? this.props.displayOptions.status: ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default LVIProspectCardTop;