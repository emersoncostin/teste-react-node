import React from 'react';
import { Grommet, Box, List, Table, TableHeader, TableRow, TableCell, Text, TableBody, Anchor } from 'grommet';

export class ListFiles extends React.Component {

    state = {
        columns: ["Nome do arquivo", "Tamanho", "Data de Envio"]
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

                <Table caption="Lista de Uploads">
                    <TableHeader>
                    <TableRow>
                        {this.state.columns.map(c => (
                        <TableCell scope="col">
                            <Text>{c}</Text>
                        </TableCell>
                        ))}
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {this.props.fileslist.map(datum => (
                        <TableRow key={datum._id}>
                            
                            <TableCell scope="row">
                             <Anchor label={datum.originalname} href={"http://localhost:9000/download/"+datum.filename} download/>
                            </TableCell>

                            <TableCell  scope="row">
                            <Text>{datum.size}</Text>
                            </TableCell>

                            <TableCell scope="row">
                            <Text>{datum.uploadDate}</Text>
                            </TableCell>
                    
                        </TableRow>
                    ))}
                    </TableBody>

                </Table>

                     
            </Box>
        );
    }
    
}
