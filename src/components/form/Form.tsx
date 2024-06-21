import FormStyled from './FormStyled';

interface FormProps {
  children: React.ReactNode;
}

function Form({ children }: FormProps) {
  return <FormStyled>{children}</FormStyled>;
}

export default Form;
