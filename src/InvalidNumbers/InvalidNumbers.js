import React from 'react';
import LVIContainer from '../Shared/LVIContainer/LVIContainer';
import LVIHeader from '../Shared/LVIHeader/LVIHeader';
import LVIDescription from '../Shared/LVIDescription/LVIDescription';
import LVIProspectContainer from '../Shared/LVIProspectContainer/LVIProspectContainer';
import LVIProspectCard from '../Shared/LVIProspectCard/LVIProspectCard';

export class InvalidNumbers extends React.Component {
    constructor() {
        super();
        this.state = {
            description: `You have 5 leads with invalid phone numbers. Replace them with valid phone numbers below, or leave them blank and we’ll import these leads without a phone number.`,
            prospect: {
                first: 'Sam',
                last: 'Keller',
                company: 'Fat Guy Inc.',
                other: 'Useless data'
            },
            displayOptions: {
                status: 'Ready to import',
                confidence: '99% confidence',
                showTop: true,
                showBottom: true
            }
        }

    };
    render() {
        return (
            <LVIContainer>
                <LVIHeader pageTitle="Invalid Numbers"/>
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

export default InvalidNumbers;