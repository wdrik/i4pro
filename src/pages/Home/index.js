import React, { Component } from 'react';

import { 
  Wrapper, 
  Container, 
  Table, 
  Button 
} from './styles';

import Json from '../../contacts.json';

class Home extends Component {
  state = {
    contacts: Json.contacts
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

          <Button>
            <span>Adicionar contato</span> 
            <i className="fa fa-plus"></i>
          </Button>
        </Container>
      </Wrapper>
    );
  }
}

export default Home;