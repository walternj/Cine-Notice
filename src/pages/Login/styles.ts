import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;

  max-width: 100vw;
  min-height: 100vh;

  padding-top: 70px;

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 240px;
    width: 280px;

    margin-top: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: var(--color-grey-button);
    border: solid 1px var(--color-red);
    border-radius: 4px;

    h1 {
      font-size: 28px;
    }

    >input, button {
      height: 38px;
      width : 240px;

      font-size: 18px;
      color: var(--color-background);
      background-color: var(--color-primary);
      border: solid 1px var(--color-red);

      padding : 10px;
      border-radius: 4px;

    }

    > input:nth-child(2) {
      margin-top: 10px;
    }

    #login-button {
      cursor: pointer;
      margin-top: 20px;
      background-color: var(--color-green-text);
      color: var(--color-background);
      opacity: 0.8;
      transition: all ease 0.2s;

      &:hover  {
        opacity: 1;
      }

    }


  }

`;
