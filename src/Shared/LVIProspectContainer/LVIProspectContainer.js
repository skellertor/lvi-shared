import React from 'react';
import './LVIProspectContainer.css';

export class LVIProspectContainer extends React.Component {

    render() {
        return (
            <div className="lvi-prospect-container" style={{"height": "100%"}}>
                {this.props.children}
            </div>
        )
    }
}

export default LVIProspectContainer;