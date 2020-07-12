import React, { Component } from 'react'
import {Button} from 'grommet'
import axios from 'axios';

export class DragNDrop extends Component {
  dropRef = React.createRef()

  state = {
    dragging: false,
    fileName: "",
    dragCounter: 0,
    dropped: false,
    selectedFile: ""
  }

  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter++  
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        this.setState({dragging: true})
      }
  }
  handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter--
    if (this.dragCounter > 0) return
    this.setState({dragging: false})
  }

  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({dragging: false})
    console.log(e.dataTransfer.files)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        if(e.dataTransfer.files[0].size > 5242880){
            let file = [{name: "Erro: Arquivo maior que 5MB", size: 0, error: true}];
            this.props.handleDrop(file);
        }else{
            this.setState({dropped: true})
            this.setState({ selectedFile: e.dataTransfer.files[0] })
            this.props.handleDrop(e.dataTransfer.files)
            e.dataTransfer.clearData()
            this.dragCounter = 0
        }

    }
  }

  handleUpload = () => {

    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    axios.post("http://localhost:9000/upload", data, { // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
    console.log(res.statusText)
    })

  }

  componentDidMount() {
    this.dragCounter = 0
    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addEventListener('drop', this.handleDrop)
  }
  componentWillUnmount() {
    let div = this.dropRef.current
    div.removeEventListener('dragenter', this.handleDragIn)
    div.removeEventListener('dragleave', this.handleDragOut)
    div.removeEventListener('dragover', this.handleDrag)
    div.removeEventListener('drop', this.handleDrop)
  }
  render() {
    return (
<div
        style={{display: 'inline-block', position: 'relative'}}
        ref={this.dropRef}
      >
        {this.state.dragging &&
          <div 
            style={{
              border: 'dashed grey 4px',
              borderRadius: '14px', 
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0, 
              right: 0,
              zIndex: 9999
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div>DROP</div>
            </div>
          </div>
        }

        {this.props.children}

        {this.state.dropped && 

            <Button label="UPLOAD FILE" fill="horizontal" color="control" primary hoverIndicator margin={{"top":"small"}}  onClick={this.handleUpload} />
            
        }
      </div>
    )
  }
}
