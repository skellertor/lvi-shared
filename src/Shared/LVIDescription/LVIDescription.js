import React from 'react';
import './LVIDescription.css';

export class LVIDescription extends React.Component {
    render() {
        return (
            <div className="lvi-description">
                <div className="lvi-description-image">
                    <i className="sh-icon icon-bolt" />
                </div>
                <div className="lvi-description-text">
                    {this.props.description}
                </div>
            </div>
        )
    }
}

export default LVIDescription;