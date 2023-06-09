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
import CounterClass from './components/class/Counter';
import LoggedIn from './components/state/LoggedIn';
import ThemeContextProvider from './components/context/ThemeContext';
import User from './components/state/User';
import UserContextComponent from './components/context/User';
import UserContextProvider from './components/context/UserContext';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';

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

      {/* <DomRef />
      <MutableRef /> */}

      {/* <CounterClass message='The count value is' /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
