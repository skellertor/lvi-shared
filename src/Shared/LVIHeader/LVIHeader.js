import React from 'react';
import './LVIHeader.css';

export class LVIHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backButton: 'Back',
        }
    }

    render() {
        return (
            <div className="lvi-header">
                <div className="lvi-back-button" onClick={this.goBack.bind(this)}>
                    <i className="sh-icon icon-chevron-left" /><span> Back</span>
                </div>
                <div className="lvi-title">
                    <span>{this.props.pageTitle}</span>
                </div>
                <div className="lvi-spacer">
                </div>
            </div>
        )
    }

    goBack() {
        this.context.router.push('/');
    }
}

LVIHeader.contextTypes = {
    router: React.PropTypes.object
};

export default LVIHeader;