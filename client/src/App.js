import React from 'react';
import { Grommet, Heading, Box, Tabs, Tab } from 'grommet';
import { AppHeader } from './components/header-component/appHeader'
import { DragNDrop } from './components/dnd-component/dragndrop'
import { ListFiles } from './components/list-component/listFiles'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {  
                    apiResponse : "", 
                    selectedFile: "", 
                    fileName: "Arraste seu arquivo aqui!", 
                    fileSize: "", 
                    statusColor: "background-back", 
                    textColor: "grey",
                    showing: "upload"
                  };
  }

  handleDrop = (file) => {
   
    this.setState({fileName: file[0].name })
    if(file[0].size > 0){
      let sizeType = ""
      let size = 0
      console.log(file[0].size)
      if(file[0].size < 1000){
        sizeType = "Bytes";
        size = file[0].size;
      }else if(file[0].size < 1000000){
        sizeType = "KB";
        size = file[0].size / 1000;
      }else{
        sizeType = "MB";
        size = file[0].size / 1000000;
      }
      this.setState({fileSize: Math.round(size) + " " + sizeType })
      this.setState({statusColor: "status-ok", textColor: "white"})
      
    }else{
      this.setState({statusColor: "status-error", textColor: "white"})
    }
    

  }

  handleMenu = option => {

    this.setState({showing: option})

  }

  render(){
    
      return(
        <Grommet theme={theme}>
         
          <AppHeader handleMenu={this.handleMenu} /> 


          <Box style={this.state.showing == 'upload' ? { "display": "flex", "height": "90vh" } : { "display": "none" } } fill="vertical" overflow="auto" align="center" flex="grow" justify="center" >
           
              <DragNDrop handleDrop={this.handleDrop}>

                <Box style={{height: 200, width: 600}} background={{"color":this.state.statusColor}} align="center" justify="center" border={{"color":"border", size: "medium", style: "dashed"}} round="small">

                    <div style={{ color: this.state.textColor }}>{this.state.fileName}</div>
                    <div style={{ color: this.state.textColor  }}>{this.state.fileSize}</div>
              
                </Box>

              </DragNDrop>
            
          </Box>

          <ListFiles visibility={this.state.showing == 'list' ? { "display": "flex", "height": "90vh" } : { "display": "none" }} />

        </Grommet>
      );

  }

}


export default App;
