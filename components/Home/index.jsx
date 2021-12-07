import { useReducer, useState, useRef } from 'react';
import { Container } from './styles';
import { Form } from '../Form';
import { Header } from '../Header';
import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import { Workouts } from '../Workouts';

const initialState = {
    segunda: { isOpen: true },
    terca: { isOpen: true },
    quarta: { isOpen: true },
    quinta: { isOpen: true },
    sexta: { isOpen: true },
    sabado: { isOpen: true },
    domingo: { isOpen: true },
};

function reducer(state, action){
    return ({
        ...state,
        [action.day]: { isOpen: action.open }, // I'm grabbint the day sended by the action and toggling the isOpen prop of that day
    });
    
}

export const Home = ({ workouts: allWorkouts }) => {
    // The reducer is here because I'll need it in workouts component and form comp (to open the )
    const [daysIsOpened, toggleDayIsOpened] = useReducer(reducer, initialState); // The reducer with contain if each day workouts is openned or not

    const { token } = parseCookies();
    const user = jwt.decode(token);

    const inputRef = useRef(null); // ref that is being used by the main input
    const [workouts, setWorkouts] = useState(allWorkouts);
    const [day, setDay] = useState('');

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
                toggleDayIsOpened={toggleDayIsOpened}
            />
            <Workouts 
                workouts={workouts} 
                setWorkouts={setWorkouts}
                day={day} 
                setDay={setDay} 
                inputRef={inputRef} 
                daysIsOpened={daysIsOpened}
                toggleDayIsOpened={toggleDayIsOpened}
            />
        </Container>
    )
}