import {Fragment, useState} from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const buttonAction = () => {
    console.log("clicked");
  }

  return (<div>
    <Alert>
      Hello World 3 <h1> World 4</h1>
      </Alert>
      <Button text={'My First Button'} onClickButton={buttonAction}/>

    </div>)
}

export default App;
