import React from 'react';
import './LVIContainer.css';

export class LVIContainer extends React.Component {
    render() {
        return (
            <div className="lvi-container">
                {this.props.children}
            </div>
        )
    }
}

export default LVIContainer;