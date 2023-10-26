import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TextFieldVariants from './components/TextFieldVariants';
import TextFieldDate from './components/TextFieldDate';
import FormControlComp from './components/FormControlComp';
import Checkboxes from './components/Checkboxes';
import RadioButtonsGroup from './components/RadioButtonsGroup';
import SelectComp from './components/SelectComp';
import AutoCompleteComp from './components/AutoCompleteComp';
import FormExample from './components/FormExample';
import UseCustomTextInput from './components/UseCustomTextInput';
import ValidatingForm from './components/ValidatingForm';
import Checkout from './components/checkout/Checkout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <TextFieldVariants /> */}
      {/* <TextFieldDate /> */}
      {/* <FormControlComp /> */}
      {/* <Checkboxes /> */}
      {/* <RadioButtonsGroup /> */}
      {/* <SelectComp /> */}
      {/* <AutoCompleteComp /> */}
      {/* <FormExample /> */}
      {/* <UseCustomTextInput /> */}
      <ValidatingForm />
      {/* <Checkout /> */}
    </>
  );
}

export default App;
