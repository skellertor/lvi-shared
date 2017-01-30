import React from 'react';
import LVIContainer from '../Shared/LVIContainer/LVIContainer';
import LVIHeader from '../Shared/LVIHeader/LVIHeader';
import LVIDescription from '../Shared/LVIDescription/LVIDescription';
import LVIProspectContainer from '../Shared/LVIProspectContainer';
import LVIProspectCard from '../Shared/LVIProspectCard/LVIProspectCard';


export class DuplicateLeads extends React.Component {
    constructor() {
        super();
        this.state = {
            description: `You have selected 8 leads that already exist in your Playbooks. We’ll skip them during this import.`,
            prospect: {
                first: 'Sam',
                last: 'Keller',
                company: 'Fat Guy Inc.',
                other: 'Useless data'
            },
            displayOptions: {
                status: 'Status text',
                showTop: true,
                showBottom: false
            }
        }

    };
    render() {
        return (
            <LVIContainer>
                <LVIHeader pageTitle="Duplicate Leads"/>
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

export default DuplicateLeads;