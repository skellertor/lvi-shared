import React from 'react';
import LVIContainer from '../LVIContainer/LVIContainer';
import LVIHeader from '../LVIHeader/LVIHeader';
import LVIDescription from '../LVIDescription/LVIDescription';
import LVIProspectContainer from '../LVIProspectContainer/LVIProspectContainer';
import LVIProspectCard from '../LVIProspectCard/LVIProspectCard';

export class MissingEmails extends React.Component {
    constructor() {
        super();
        this.state = {
            description: `You have 7 leads that need a valid email address. Using our intelligence system, we have populated emails for you on many leads, but 5 leads do not have an email address and will be skipped.`,
            prospect: {
                first: 'Sam',
                last: 'Keller',
                company: 'Fat Guy Inc.',
                other: 'Useless data'
            },
            displayOptions: {
                status: 'Status text',
                confidence: '99% confidence',
                showTop: true,
                showBottom: true
            }
        }

    };
    render() {
        return (
            <LVIContainer>
                <LVIHeader pageTitle="Missing Emails"/>
                <LVIDescription description={this.state.description} />
                <LVIProspectContainer>
                    {this.fillProspects()}
                </LVIProspectContainer>
            </ LVIContainer>
        )
    }
    fillProspects(){
        let cards = [];
        for(let i = 0; i < 10; i++){
            cards.push(<LVIProspectCard key={i} prospect={this.state.prospect} displayOptions={this.state.displayOptions}/>)
        }
        return cards;
    }
}

export default MissingEmails;