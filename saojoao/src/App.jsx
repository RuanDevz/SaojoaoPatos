// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Start from './Questions/Start';
import { QuestionContextProvider } from './context/QuestionContext';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [avaliacao, setAvaliacao] = useState(null);
  return (
    <div>
      <QuestionContextProvider.Provider value={{setSelectedOption, setAvaliacao }}>
        <Start />
      </QuestionContextProvider.Provider>
    </div>
  );
};

export default App;
