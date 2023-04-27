import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Box from './components/context/Box';
import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import ThemeContextProvider from './components/context/ThemeContext';
import User from './components/state/User';
import UserContextComponent from './components/context/User';
import UserContextProvider from './components/context/UserContext';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Dianna'
    }
  ]

  return (
    <div className="App">
      {/* <Greet name="Slavcho" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}

      {/* <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }} />

      <Input value='' handleChange={(event) => console.log(event)} /> */}

      {/* <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}

      {/* <LoggedIn />
      <User /> */}

      {/* <Counter /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <UserContextComponent />
      </UserContextProvider> */}

      <DomRef />
      <MutableRef />
    </div>
  );
}

export default App;
