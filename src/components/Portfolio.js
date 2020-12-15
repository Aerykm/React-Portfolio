import React from 'react';
import { Tab } from 'semantic-ui-react';
import Projects from './Project';
import notetakerImage from '../images/noteTaker.jpg';
import googlebooksImage from '../images/bigbooks.jpg';
import SuperheroImage from '../images/superhero.png';
import SubscriptionImage from '../images/subscriptions.jpg';


const styles = {
    margin: 20,
    border: "solid",
    padding: 35,
    backgroundColor: "whitesmoke",
    borderWidth: "1px",
    borderColor: "darkgray",
    fontSize: '18px'
}


const panes = [
  { menuItem: 'Note Taker', render: () => <Tab.Pane><Projects imageURL= {notetakerImage} name= "Note Taker" description= "An application that Allows the user to take notes and save them. Also be able to see your notes and edit them." deployed= "https://secret-eyrie-15185.herokuapp.com/" github= "https://github.com/Aerykm/Note-taker" /></Tab.Pane> },
  { menuItem: 'Superhero Search Engine', render: () => <Tab.Pane><Projects imageURL= {SuperheroImage} name= "Superhero Search Engine" description= "With this superhero search engine you can now simply just look up information about any superhero/villian and find results to educate yourself." deployed= "https://alexemrob.github.io/Project-1/" github= "https://github.com/alexemrob/Project-1" /></Tab.Pane> },
  { menuItem: 'Google Search Books', render: () => <Tab.Pane><Projects imageURL= {googlebooksImage} name= "Google Search Books" description= "Be able to quickly search up any book with google's api and find a link to buy it. Also be able to save certain books and visit them again later." deployed= "https://pure-everglades-54047.herokuapp.com/" github= "https://github.com/Aerykm/Google-Search" /></Tab.Pane> },
  { menuItem: 'Subscription Hub', render: () => <Tab.Pane><Projects imageURL= {SubscriptionImage} name= "Subscription Hub" description= "Be able to Create and keep track of subscriptions you are currently paying for. " deployed= "https://project2utcoding.herokuapp.com/" github= "https://github.com/Aerykm/Project-2" /></Tab.Pane> },
]

const PortfolioTab = () => (
  <div className="ui mobile reversed equal width grid">
  <Tab  className="column" style={styles} menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  </div>
  
)

export default PortfolioTab