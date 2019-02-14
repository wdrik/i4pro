import React, { Component } from 'react';

import { Wrapper, Container, Table } from './styles';

class Home extends Component {
  render() {
    return(
      <Wrapper>
        <Container>
          <Table>
            <tbody>
              <tr>
                <td>Icon</td>
                <td>Full Name</td>
                <td>email@email.com</td>
                <td>11 970267822</td>
              </tr>

              <tr>
                <td>Icon</td>
                <td>Full Name</td>
                <td>email@email.com</td>
                <td>11 970267822</td>
              </tr>

              <tr>
                <td>Icon</td>
                <td>Full Name</td>
                <td>email@email.com</td>
                <td>11 970267822</td>
              </tr>

              <tr>
                <td>Icon</td>
                <td>Full Name</td>
                <td>email@email.com</td>
                <td>11 970267822</td>
              </tr>
              
              <tr>
                <td>Icon</td>
                <td>Full Name</td>
                <td>email@email.com</td>
                <td>11 970267822</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Wrapper>
    );
  }
}

export default Home;