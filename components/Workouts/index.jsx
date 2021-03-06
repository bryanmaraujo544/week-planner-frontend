import { useEffect, useReducer } from 'react';
import {  WorkoutsContainer, Day, WorkoutsPerDay, EmptyWorkouts, DayContainer } from './styles';
import { WorkoutCard } from '../WorkoutCard';
import { IoIosAddCircleOutline, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { AnimatePresence, AnimateSharedLayout, motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { fadeIn, listItem, propagationFadeIn } from '../../animations';
import { animateScroll as scroll } from 'react-scroll';


const weekDays = [
    { day: 'Segunda', slug: 'segunda' },
    { day: 'Terça', slug: 'terca' },
    { day: 'Quarta', slug: 'quarta' },
    { day: 'Quinta', slug: 'quinta' },
    { day: 'Sexta', slug: 'sexta' },
    { day: 'Sábado', slug: 'sabado' },
    { day: 'Domingo', slug: 'domingo' },
];

export const Workouts = ({ 
    workouts, 
    setWorkouts, 
    setDay, 
    daysIsOpened, 
    toggleDayIsOpened, 
    inputRef 
}) => {
    console.log({ workouts });
    const handleInputFocus = (day) => {
        setDay(day); // Setting the value of the dropdown as the day of the empty card clicked
        scroll.scrollToTop({
            duration: 750
        });
        inputRef.current?.focus();
    }

    return (
        <WorkoutsContainer as={motion.section} variants={propagationFadeIn} initial="hidden" animate="show" >
                {/* Here I am putting each day of the week on the screen */}
                {weekDays.map(({ day, slug }) => (
                        <WorkoutsPerDay key={slug} id={day} as={motion.div} variants={listItem}>
                            <DayContainer>
                                <Day>{day}</Day>
                                <div className="toggleOpen-icon">
                                    {daysIsOpened[slug].isOpen ? (
                                        <motion.div whileHover={{ y: -3, transition: { yoyo: Infinity, duration: .65 } }}>
                                            <IoIosArrowDown size="24px" onClick={() => toggleDayIsOpened({ day: slug, open: false })} /> 
                                        </motion.div>
                                    ) : (
                                        <motion.div whileHover={{ y: -3, transition: { yoyo: Infinity, duration: .65 } }}>

                                            <IoIosArrowUp size="24px" onClick={() => toggleDayIsOpened({ day: slug, open: true })} />
                                        </motion.div>
                                    )}
                                </div>
                            </DayContainer>
                            {/* Here I am checking if the workouts array has some workout with day property equal 
                                to current day of the days map. If there is I map all of the workout and return only the workout with this day.
                                And if there is no workout in this day I return a component wich say 'there´s no train in this day'
                            */}
                            <AnimatePresence>
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
                                                        as={motion.div}
                                                        initial={{ opacity: 0}}
                                                        animate={{ opacity: 1, transition: { duration: .25 }}}
                                                        exit={{ opacity: 0 }}
                                                    />
                                                )
                                            }
                                            return null;
                                        })
                                    ) : (
                                        <EmptyWorkouts 
                                            as={motion.div}  
                                            initial={{ opacity: 0, y: -100 }} 
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -100 }} 
                                            onClick={() => handleInputFocus(day)}>
                                            <IoIosAddCircleOutline   size="26px" color="#ADB5BD" 
                                        />
                                            <p> Nenhum treino este dia </p>
                                        </EmptyWorkouts>
                                    )
                                )}
                            </AnimatePresence>
                        </WorkoutsPerDay>
                ))}
        </WorkoutsContainer>
    );
}