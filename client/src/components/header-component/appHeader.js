import React from 'react';
import { Grommet, Box, Heading, Tabs, Tab, Menu } from 'grommet';

export class AppHeader extends React.Component {



    render(){
        let mentores = "</Mentores>"
        const { handleMenu } = this.props
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
                
            >
                <Heading level='3' margin='none'>Hiring test {mentores}</Heading>
                <Menu
                label="Menu"
                items={[
                    { label: 'Upload File', onClick: () => handleMenu("upload") },
                    { label: 'List Files', onClick: () => handleMenu("list") },
                ]}
                />

                <right> Desenvolvidor por: <a target="_blank" href="https://github.com/emersoncostin/">Emerson Costin</a> </right>     
            </Box>
        );
    }
    
}
