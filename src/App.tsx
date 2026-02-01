import {Fragment, useState} from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const buttonAction = () => {
    console.log("clicked");
  }

  return (<div>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> Hello World 3 </Alert>}

      <Button text={'Button 1'} onClickButton={buttonAction} color={'danger'}/>
      <Button text={'Button 2'} onClickButton={() => setAlertVisibility(true)}/>

    </div>)
}

export default App;
