import { Card, RightIcons } from './styles';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import { CgGym } from 'react-icons/cg';
import { BsFillCalendarDateFill, BsFillTrashFill } from 'react-icons/bs';
import { api } from '../../services/api';
import { AnimatePresence, motion } from 'framer-motion';

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

  return (
    <Card 
      wasTrained={workout.was_trained} 
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
      <RightIcons>
        {workout.was_trained === 1 ? (
          <AiFillCheckCircle 
            
            onClick={() => handleToggleTrain(workout)} 
            className="check-icon" 
            size="26px" 
          />
        ) : (
          <AiOutlineCheckCircle 
            style={{cursor: 'pointer'}} 
            onClick={() => handleToggleTrain(workout)} 
            className="check-icon" 
            size="26px" 
          />
        )}
        <BsFillTrashFill 
          className="delete-icon"
          size="24px" 
          onClick={() => handleDelete(workout.id)} 
        />
      </RightIcons>
    </Card>
  )
}