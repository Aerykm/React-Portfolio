import React from 'react';
import { Item } from 'semantic-ui-react';
import image from "../../images/profilepix.JPG";
import "./index.css";
import Contact from "../Contact"

const styles ={
    margin: 20,
    border: "solid",
    padding: 35,
    backgroundColor: "whitesmoke",
    borderWidth: "1px",
    borderColor: "darkgray"
}

const style1 = {
  fontFamily: 'Cambria',
  color: 'dimgray',
  fontSize: '18px'
}

const About = () => (
  <Item.Group style={styles}>
    <Item>
      <Item.Image size='medium' src={image} circular />

      <Item.Content >
          <br></br><br></br>
        <Item.Header id="about-header" style={style1}>About Me</Item.Header>
        <br></br>
        {/* <Item.Meta>Description</Item.Meta> */}
        <Item.Description style={style1}>
          <p>My name is Aeryk marrero. I have attended University of North Texas and have recently decided to pursue coding during
            this pandemic. I am looking for a career in Web Development. I am currently taking classes at the Full Stack Coding Boot
          Camp at the University of Texas, Austin and I will have a certificate to prove my commitment soon. </p>
          <p>More about Me: I have two great Pyrenees named Nova and Bear and I enjoy spending my time raising them. I am a huge fan of
            animation and films of any sort, I am very technology oriented and learn new things fast which is why I decided to 
            pursue coding as a career choice.
          </p>
          
        </Item.Description>
        <Item.Extra>
          <Contact style={style1} />
        </Item.Extra>
      </Item.Content>
    </Item>
    </Item.Group>
)

export default About
