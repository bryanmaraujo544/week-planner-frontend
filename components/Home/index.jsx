import { useReducer, useState, useRef } from 'react';
import { Container } from './styles';
import { Form } from '../Form';
import { Header } from '../Header';
import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import { Workouts } from '../Workouts';







export const Home = ({ workouts: allWorkouts }) => {
    const { token } = parseCookies();
    const user = jwt.decode(token);

    const inputRef = useRef(null); // ref that is being used by the main input
    const [workouts, setWorkouts] = useState(allWorkouts);
    const [day, setDay] = useState('');
    console.log({workouts});

    const date = new Date();
    const dayNumber = date.getDay();
    if (dayNumber === 0) {
        // TO-DO: clean all the trains
    }

    return (
        <Container>
            <Header user={user} />
            <Form 
                workouts={workouts} 
                setWorkouts={setWorkouts} 
                day={day} setDay={setDay} 
                inputRef={inputRef} 
            />
            <Workouts 
                workouts={workouts} 
                setWorkouts={setWorkouts} 
                setDay={setDay} 
                inputRef={inputRef} 
            />
        </Container>
    )
}