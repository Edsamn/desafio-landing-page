import styled from 'styled-components';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  border-radius: 10px;
  width: 100%;

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      margin-bottom: 5px;
      font-weight: bold;
    }

    input,
    textarea {
      padding: 10px;
      font-size: 1rem;
      border: 1px solid ${props => props.theme.colors.primary};
      border-radius: 5px;
      width: 100%;
      box-sizing: border-box;
    }

    textarea {
      resize: vertical;
      height: 100px;
    }
  }

  div:last-of-type {
    text-align: center;
  }
`;

export default FormStyled;
