import React from 'react'
import { Item } from 'semantic-ui-react'

const style = {
    fontFamily: 'Cambria',
    color: 'dimgray',
    fontSize: '20px'
  }


const Projects = (props) => (
    <Item.Group>
    <Item>
    <br></br>
      <Item.Image size='big' src={props.imageURL} />

      <Item.Content>
        <br></br>
        <Item.Header style={style}>{props.name}</Item.Header>
        <br></br><br></br>
        <Item.Description style={style}>
          <p>{props.description}</p>
          <br></br>
          <p><a href= {props.deployed} target="_blank">Deployed Link</a></p>
          <br></br>
          <p><a href={props.github} target="_blank">GitHub Link</a></p>
        </Item.Description>
      </Item.Content>
    </Item>
    </Item.Group>
 
)

export default Projects