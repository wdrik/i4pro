import React, { Component } from 'react';

import Modal from 'react-modal';

import { 
  Wrapper, 
  Container, 
  Table, 
  Button,
  Form 
} from './styles';

import Json from '../../contacts.json';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#F9F9F9',
    width: '80%',
    height: 'auto',
    overflow: 'auto',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  overlay: {
    background: 'rgba(0, 0, 0, .4)',
    transition: 'all ease-in-out .4s'
  }
};

Modal.setAppElement(document.getElementById('root'));

class Home extends Component {
  state = {
    contacts: Json.contacts,
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }
 
  afterOpenModal = () => {
    console.log(this.state);
  }
 
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleFavorite = (id, isFavorite) => {
    const { contacts } = this.state;

    contacts.forEach(contact => {
      if (contact.id === id) {
        contact.favorite = !isFavorite;
      }
    });

    this.setState({ contacts: contacts });
  }

  handleRemove = (id ) => {
    const { contacts } = this.state;

    const leftOverContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: leftOverContacts });
  }

  render() {
    const { contacts } = this.state;

    return(
      <Wrapper>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">

          <Form>
            <h1 id="heading">Alert</h1>
            <div id="full_description">
              <p>Description goes here.</p>
            </div>
          </Form>

        
        </Modal>

        <Container>
          <Table>
            <tbody>
              { contacts.map(contact => (
                <tr key={contact.id}>
                  <td className="user-icon">
                    <i className="fa fa-user-circle"></i>
                  </td>
                  <td className="full-name">{contact.name}</td>
                  <td className="email">{contact.email}</td>
                  <td className="phone">{contact.phone}</td>
                  <td className="options">
                    <button onClick={() => this.handleFavorite(contact.id, contact.favorite)}>
                      <i className={contact.favorite ? 'fa fa-star' : 'fa fa-star-o'}></i>
                    </button>
                    
                    <button onClick={() => this.handleRemove(contact.id)}>
                      <i className="fa fa-trash-o"></i>
                    </button>
                    
                    <button>
                      <i className="fa fa-pencil"></i>
                    </button>
                  </td>
                </tr>
              )) }
            </tbody>
          </Table>

          <Button onClick={this.openModal}>
            <span>Adicionar contato</span> 
            <i className="fa fa-plus"></i>
          </Button>
        </Container>
      </Wrapper>
    );
  }
}

export default Home;