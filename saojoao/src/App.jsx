// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Start from './Questions/Start';
import { ReplyQuestions } from './Context/ReplyQuestions';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  return (
    <div>
      <ReplyQuestions.Provider value={{ selectedOption, setSelectedOption}}>
        <Start />
        </ReplyQuestions.Provider>
    </div>
  );
};

export default App;
