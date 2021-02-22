import styled, { css } from 'styled-components'
import {MdPlaylistPlay} from 'react-icons/md'

export const Container = styled.header<{background: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  width: 100vw;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 26px;

  transition: all ease 0.5s;
  background: ${props => (props.background ? 'var(--color-header)' : 'transparent')};

  @media (max-width:768PX) {

    justify-content:space-around;
  }


  @media (max-width: 400PX) {
    padding : 0 10px;
  }


  .header--logo {
    height: 38px;
    cursor: pointer;

    @media (max-width:768PX) {
      height: 28px;
    }
  }

`;

const iconCSS = css`
  width: 40px;
  height: 40px;

  cursor: pointer;
`;

export const MyList = styled(MdPlaylistPlay)`
  ${iconCSS}
  fill: var(--color-green-text);

  position: absolute;
  right: 18px;
  top: 70px;
`;

export const HeaderUser = styled.div<{toggleMenu: boolean}>`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  height: 32px;
  padding: 0;

  > img {
    height: 32px;
    border: 1px solid var(--color-red);
    border-radius: 4px;
    cursor: pointer;
    transition: all ease 0.5s;
    opacity: ${props => (props.toggleMenu ? '0' : '1')};

  }

  #closeIcon {
    position: absolute;

    cursor: pointer;
    color: black;
    border: 1px solid var(--color-red);
    border-radius: 4px;
    background-color: var(--color-black);
    transition: all ease 0.5s;
    z-index: ${props => (props.toggleMenu ? '1' : '-10')};
  }

`;

