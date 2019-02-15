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
    contactId: null,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactFavorite: false,
    error: false,
    errorMessage: '',
    isUpdate: false
  }

  /**
   * Modal Commands
   */
  openModal = (isUpdate = false) => { 
    this.setState({ 
      modalIsOpen: true, 
      isUpdate: isUpdate,
      error: false
    });
  }

  closeModal = () => {
    this.setState({ 
      modalIsOpen: false ,
      contactName: '', 
      contactEmail: '', 
      contactPhone: '',
      contactId: '',
    });
  }

  /**
   * Add Contact
   */
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
      id: parseInt(Math.random() * 100) + 999,
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

  /**
   * Remove Contact
   */
  handleRemoveContact = id => {
    const { contacts } = this.state;

    const leftOverContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: leftOverContacts });
  }

  /**
   * Update Contact
   */
  handleUpdateContact = e => {
    e.preventDefault();

    const { 
      contacts, 
      contactId, 
      contactName,
      contactEmail,
      contactPhone 
    } = this.state;

    contacts.forEach(contact => {
      if (contact.id === contactId) {
        contact.name  = contactName;
        contact.email = contactEmail;
        contact.phone = contactPhone;
      }
    });

    this.setState({ contacts: contacts });

    this.closeModal();
  }

  /**
   * Favorite Contact
   */
  handleFavoriteContact = (id, isFavorite) => {
    const { contacts } = this.state;

    contacts.forEach(contact => {
      if (contact.id === id) {
        contact.favorite = !isFavorite;
      }
    });

    this.setState({ contacts: contacts });
  }

  /**
   * Complete Fields
   */
  handleCompleteFields = contact => {
    this.setState({ 
      isUpdate: true,
      contactId: contact.id, 
      contactName: contact.name, 
      contactEmail: contact.email, 
      contactPhone: contact.phone,
    });

    this.openModal();
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

          <Form onSubmit={e => this.state.isUpdate ? this.handleAddContact(e) : this.handleUpdateContact(e)}>
            <i className="fa fa-times" onClick={this.closeModal}></i>
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
              <span>{this.state.isUpdate ? 'Adicionar contato' : 'Atualizar contato'}</span> 
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
                    
                    <button onClick={() => this.handleCompleteFields(contact)}>
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