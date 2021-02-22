import styled from 'styled-components';

export const Container = styled.nav<{toggleMenu: boolean}>`
  display: flex;
  flex-shrink: none;

  position: absolute;
  right : 10px;
  top: 70px;
  z-index: 10;

  width: auto;
  height: auto;
  padding: 10px 15px;
  margin: 0;

  border-radius: 4px;
  border: 1px solid var(--color-red);

  transition: all ease 0.5s;
  right: ${props => (props.toggleMenu ? '12px' : '-300px')};
  z-index: ${props => (props.toggleMenu ? '10' : '-10')};
  background-color: ${props => (props.toggleMenu ? 'var(--color-black)' : 'transparent')};

  a {
    text-decoration: none;

    li {
      font-size: 18px;
    }

    li:hover {
      color: var(--color-red)
    }
  }

`;
