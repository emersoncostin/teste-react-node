import React from 'react';
import { Grommet, Box, List, Table, TableHeader, TableRow, TableCell, Text, TableBody, Anchor } from 'grommet';

export class ListFiles extends React.Component {

    state = {
        filesList: [],
        columns: ["Nome do arquivo", "Tamanho", "Data de Envio"]
    }
    handleClick = (e) => {
        console.log(e)
    }

    componentDidMount(){
        fetch('http://localhost:9000/listFiles')
            .then((response) => response.json())
            .then((data) => {
                data.map(e => {

                    let size = 0
                    let sizeType = "";
                    if(e.size < 1000){
                        sizeType = "Bytes";
                        size = e.size;
                      }else if(e.size < 1000000){
                        sizeType = "KB";
                        size = e.size / 1000;
                      }else{
                        sizeType = "MB";
                        size = e.size / 1000000;
                      }
                      e.size = Math.round(size) + sizeType
                      let dateObject = new Date(e.uploadDate);
                      let humanDateFormat = dateObject.toLocaleString("pt-BR")
                      e.uploadDate = humanDateFormat
                });



                this.setState({filesList: data})
            });
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
                    {this.state.filesList.map(datum => (
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
