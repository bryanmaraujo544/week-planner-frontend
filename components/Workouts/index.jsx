import { useReducer } from 'react';
import {  WorkoutsContainer, Day, WorkoutsPerDay, EmptyWorkouts, DayContainer } from './styles';
import { WorkoutCard } from '../WorkoutCard';
import { IoIosAddCircleOutline, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const weekDays = [
    { day: 'Segunda', slug: 'segunda' },
    { day: 'Terça', slug: 'terca' },
    { day: 'Quarta', slug: 'quarta' },
    { day: 'Quinta', slug: 'quinta' },
    { day: 'Sexta', slug: 'sexta' },
    { day: 'Sábado', slug: 'sabado' },
    { day: 'Domingo', slug: 'domingo' },
];

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
        [action.day]: { isOpen: !state[action.day].isOpen },
    });
    
}

export const Workouts = ({ workouts, setWorkouts, setDay, inputRef }) => {
    const [daysIsOpened, toggleDayIsOpened] = useReducer(reducer, initialState); // The reducer with contain if each day workouts is openned or not

    const handleInputFocus = (day) => {
        setDay(day); // Setting the value of the dropdown as the day of the empty card clicked
        inputRef.current.focus();
    }

    return (
        <WorkoutsContainer>
            {/* Here I am putting each day of the week on the screen */}
            {weekDays.map(({ day, slug }) => (
                <WorkoutsPerDay key={slug} id={day}>
                    <DayContainer>
                        <Day>{day}</Day>
                        <div className="toggleOpen-icon" onClick={() => toggleDayIsOpened({ day: slug })}>
                            {daysIsOpened[slug].isOpen ? <IoIosArrowDown size="24px" /> : <IoIosArrowUp size="24px" />}
                        </div>
                    </DayContainer>
                    {/* Here I am checking if the workouts array has some workout with day property equal 
                        to current day of the days map. If there is I map all of the workout and return only the workout with this day.
                        And if there is no workout in this day I return a component wich say 'there´s no train in this day'
                    */}
                    {daysIsOpened[slug].isOpen && (
                        workouts.filter((workout) => workout?.day === day).length > 0 ? ( // If the length of the array of the workout in a day is 0 is rendered a empty
                            workouts.map((workout) => {
                                if (workout.day === day) {
                                    return (
                                        <WorkoutCard 
                                            key={workout.id} 
                                            workout={workout} 
                                            workouts={workouts} 
                                            setWorkouts={setWorkouts} 
                                        />
                                    )
                                }
                                return null;
                            })
                        ) : (
                            <EmptyWorkouts onClick={() => handleInputFocus(day)}>
                                <IoIosAddCircleOutline   size="26px" color="#ADB5BD" />
                                <p> Nenhum treino este dia </p>
                            </EmptyWorkouts>
                        )
                    )}
                </WorkoutsPerDay>
            ))}
        </WorkoutsContainer>
    );
}