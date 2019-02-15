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
    modalIsOpen: false,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactFavorite: false,
    error: false,
    errorMessage: ''
  }

  openModal   = () => this.setState({ modalIsOpen: true });
  closeModal  = () => this.setState({ modalIsOpen: false });

  afterOpenModal = () => {
    console.log(this.state);
  }

  handleAddContact = e => {
    e.preventDefault();
    if (
      this.state.contactName === '' || 
      this.state.contactEmail === ''  || 
      this.state.contactEmail === '') {
      this.setState({ error: true, errorMessage: 'Preencha todos os campos!' }); 
      return;
    }

    const newContact = {
      id: Math.random(),
      name: this.state.contactName,
      email: this.state.contactEmail,
      phone: this.state.contactPhone,
      favorite: false
    }

    const { contacts } = this.state;

    contacts.push(newContact);

    this.setState({ contacts: contacts });

    this.closeModal();
  }

  handleRemoveContact = (id) => {
    const { contacts } = this.state;

    const leftOverContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: leftOverContacts });
  }

  handleFavoriteContact = (id, isFavorite) => {
    const { contacts } = this.state;

    contacts.forEach(contact => {
      if (contact.id === id) {
        contact.favorite = !isFavorite;
      }
    });

    this.setState({ contacts: contacts });
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

          <Form onSubmit={e => this.handleAddContact(e)}>
            <i class="fa fa-times" onClick={this.closeModal}></i>
            <h3>Adicionar Contato</h3>

            <input type="text" 
              value={this.state.contactName} 
              onChange={e => this.setState({ contactName: e.target.value })}
              placeholder="Nome"
            />
            
            <input type="email" 
              value={this.state.contactEmail}
              onChange={e => this.setState({ contactEmail: e.target.value })}
              placeholder="Phone" 
            />
            
            <input type="phone" 
              value={this.state.contactPhone} 
              onChange={e => this.setState({ contactPhone: e.target.value })}
              placeholder="Telefone" 
            />

            { this.state.error && (
              <p className="error">{this.state.errorMessage}</p>
            ) }

            <Button type="submit">
              <span>Adicionar contato</span> 
              <i className="fa fa-plus"></i>
            </Button>
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
                    <button onClick={() => this.handleFavoriteContact(contact.id, contact.favorite)}>
                      <i className={contact.favorite ? 'fa fa-star' : 'fa fa-star-o'}></i>
                    </button>
                    
                    <button onClick={() => this.handleRemoveContact(contact.id)}>
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