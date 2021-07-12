import React from 'react';

import { Container } from './styles';
import {DropDownOption} from '../DropDown'

function Navbar() {
  return (
      <Container>
          <ul>
              <li>
                  <DropDownOption 
                  name="Produtos"
                  content={() => <h1>Produtos</h1>}
                  />
              </li>
              <li>
                  <DropDownOption 
                  name="Desenvolvedores"
                  content={<h1>Desenvolvedores</h1>}
                  />
              </li>
              <li>
                  <DropDownOption 
                  name="Empresa"
                  content={() => <h1>Empresa</h1>}
                  />
              </li>
          </ul>
      </Container>
  );
}

export default Navbar;