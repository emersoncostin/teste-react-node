import React from 'react';
import { Grommet, Box, List } from 'grommet';

export class ListFiles extends React.Component {

    state = {
        filesList: [
            { name: 'Alan', percent: 20 },
            { name: 'Bryan', percent: 30 },
            { name: 'Chris', percent: 40 },
            { name: 'Eric', percent: 80 }
        ]
    }
    handleClick = (e) => {
        console.log(e)
    }

    render(){

        return(
            <Box
                align="center" pad="large" gap="large"
                style={this.props.visibility}
            >
                <List
                
                  primaryKey="name"
                  secondaryKey="percent"
                  data={this.state.filesList}
                
                />
                     
            </Box>
        );
    }
    
}
