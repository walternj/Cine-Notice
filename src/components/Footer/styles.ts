import styled, { css } from 'styled-components';
import {IoMdBrowsers, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'

export const Container = styled.footer`
  margin: 0;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: var(--color-background);
  border-top: 1px solid var(--color-primary);


  .footer--left-container {
    > p {
      font-size: 12px
    }
  }

  img {
    width: 15%;

    @media (max-width:500px) {
      display: none;
    }
  }

  .footer--right-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-right: 10px;

    > span {
      font-size: 12px;
      margin-right: 7px;
      padding-bottom: 3px;
    }
  }

  a {
    height: 26px;

  }
  a + a {
    margin-left: 5px;
  }
`;


const iconCSS= css`
  width: 26px;
  height:auto;
  fill: var(--color-red);
  flex-shrink: 0;

  @media (max-width:500px) {
    width: 18px;
    }
`;

export const LinkedinIcon = styled(IoLogoLinkedin)`
  ${iconCSS}
`;

export const GithubIcon = styled(IoLogoGithub)`
  ${iconCSS}
`;

export const SiteIcon = styled(IoMdBrowsers)`
  ${iconCSS}
`;
