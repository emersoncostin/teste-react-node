import React from 'react';
import { Grommet, Box } from 'grommet';

export class AppHeader extends React.Component {

    render(){
        return(
            <Box
                tag='header'
                direction='row'
                align='center'
                justify='between'
                background='brand'
                pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                elevation='medium'
                style={{ zIndex: '1' }}
                {...this.props}
            />
        );
    }
    
}
