/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Container, Card, RightIcons, DeleteDragButton } from './styles';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import { CgGym } from 'react-icons/cg';
import { BsFillCalendarDateFill, BsFillTrashFill } from 'react-icons/bs';
import { api } from '../../services/api';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useWindowDimensions } from '../../hooks/useWindowSize';

export const WorkoutCard = ({ workout, workouts, setWorkouts, ...props }) => {
  const handleToggleTrain = async ({ id }) => {
    // Here I am updating the workout state for does not need update the page to grab the new workouts
    setWorkouts((prevWorkouts) => (
      prevWorkouts.map((workout, index) => {
        const wasTrainedValue = workout.was_trained === 1 ? 0 : 1;
        if (workout.id === id) {
          return {...workout, was_trained: wasTrainedValue};
        } 
          return {...workout};
      })
    ));

    // Here I am toggling the value of was_trained column
    const { data: { message } } = await api.put(`/workouts/${workout.id}`);
    console.log({ message });
  }

  const handleDelete = async (id) => {
    const newWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(newWorkouts);
    const { data: { message } } = await api.delete(`/workouts/${workout.id}`);
    console.log({ message });
  }


  const x = useMotionValue(0);
  const xInput = [-200, 0, 500]
  const width = useTransform(x, xInput, ["200px", "0px", "0px"]);
  const background = useTransform(x, xInput, ["#eb0909", "#f63033", "#fff" ]);
  const controls = useAnimation();


  const screenSize = useWindowDimensions();

  useEffect(() => {
    // Grabbing the value of the motionvalue. And if is smaller than -250, in other words, if is -256, -299...
    const unsubscribeX = x.onChange((latest) => {
      if (screenSize.width > 678){
        if (latest < -250.0){
          (async () => {
            await controls.start({ opacity: 0, x: '-150%', })
            handleDelete(workout.id); // Delete the card based on the id received by props
          })();
        }

      } else {
        console.log('menor que -259')
        if (latest < -100.0){
          (async () => {
            await controls.start({ opacity: 0, x: '-150%', })
            handleDelete(workout.id); // Delete the card based on the id received by props
          })();
        }
      }
    })

    return () => {
      unsubscribeX();
    }
  }, []);

  
  return (
    <Container as={motion.div} animate={controls}>

    <Card 
      wasTrained={workout.was_trained}
      style={{ x }}
      drag="x"
      dragConstraints={{ left: 0, right: 0}}
      {...props}
    >
      <div className="workout-info">
        <div className="info-container">
          <CgGym className="icon" size="20px" />
          <h2 className="workout-name">{workout.name}</h2>
        </div>
        <div className="info-container">
          <BsFillCalendarDateFill className="icon" size="20px" />
          <p className="workout-day">{workout.day}</p>
        </div>
      </div>
      <RightIcons wasTrained={workout.was_trained}>
        <motion.div className="icon-box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            
          <AiFillCheckCircle
            onClick={() => handleToggleTrain(workout)} 
            className="check-icon" 
          />

        </motion.div>
        <motion.div className="icon-box" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <BsFillTrashFill 
            className="delete-icon"
            size="24px" 
            onClick={() => handleDelete(workout.id)} 
          />
        </motion.div>
      </RightIcons>
    </Card>
    <DeleteDragButton
      as={motion.div}
      style={{ width, background }}
    >
      <BsFillTrashFill 
            className="delete-drag-icon"
            size="24px"
      />
    </DeleteDragButton>
    </Container>
  )
}