import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react';
import resume from "../access/Resume.pdf"

const style = {
  fontFamily: 'Cambria',
  color: 'dimgray'
}

function Contact() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Contact Me</Button>}
    >
      <Modal.Header style={style}>Contact Information</Modal.Header>
      <Modal.Content>
        <Modal.Description style={style}>
         <p>Email Address: aerykmarrero@yahoo.com</p>
         <p>Phone Number: +1 (713)-894-5637</p>
         <p><a href={resume} target="_blank">Resume</a>    &emsp;     <a href="https://github.com/Aerykm" target="_blank"><Icon name='github' />Github Profile</a>   &emsp;      <a href="https://www.linkedin.com/in/aeryk-marrero-7a7a411a9/" target="_blank"><Icon name='linkedin alternate' />LinkIn Profile</a></p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Contact