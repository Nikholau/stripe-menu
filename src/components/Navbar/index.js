import React from 'react';

import {Products, Developers, Company} from '../Content'
import { Container, DropDownStyles } from './styles';
import {DropDownOption} from '../DropDown'

function Navbar() {
  return (
      <DropDownStyles>
      <Container>
          <ul>
              <li>
                  <DropDownOption 
                  name="Produtos"
                  content={Products}
                  />
              </li>
              <li>
                  <DropDownOption 
                  name="Desenvolvedores"
                  content={Developers}
                  />
              </li>
              <li>
                  <DropDownOption 
                  name="Empresa"
                  content={Company}
                  />
              </li>
          </ul>
      </Container>
      </DropDownStyles>
  );
}

export default Navbar;