import React from 'react';
import './LVIProspectCard.css';
import LVIProspectCardTop from './LVIProspectCardTop';
import LVIProspectCardBottom from './LVIProspectCardBottom'

export class LVIProspectCard extends React.Component {

    render() {
        const { showTop, showBottom } = this.props.displayOptions;
        if(showBottom && showTop) {
            return (
                <div className="lvi-prospect-card">
                    <LVIProspectCardTop prospect={this.props.prospect} displayOptions={this.props.displayOptions}/>
                    <LVIProspectCardBottom displayOptions={this.props.displayOptions}/>
                </div>
            );
        } else if(showTop && !showBottom) {
            return (
                <div className="lvi-prospect-card" style={{"height": 82}}>
                    <LVIProspectCardTop prospect={this.props.prospect} displayOptions={this.props.displayOptions}/>
                </div>
            );
        } else if(showBottom && !showTop) {
            return (
                <div className="lvi-prospect-card">
                    <LVIProspectCardBottom displayOptions={this.props.displayOptions}/>
                </div>
            );
        }
    }
}

export default LVIProspectCard;