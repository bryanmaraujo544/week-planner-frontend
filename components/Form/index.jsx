import { useState } from 'react';
import { FormContainer, Button } from './styles';
import { Dropdown } from '../Dropdown';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { api } from '../../services/api';
import { scroller } from 'react-scroll'

export const Form = ({ workouts, setWorkouts, day, setDay, inputRef }) => {
  const [workoutName, setWorkoutName] = useState('');
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasWorkout = workouts.some((workout) => (
      workout.name.toLowerCase() === workoutName.toLowerCase() && workout.day === day
      ));
      
    if (workoutName === '' || day === '') {
      return window.alert('Não deixe nenhum campo vázio');
    }
    
    if (hasWorkout) {
      return window.alert('Você já fez este treino neste mesmo dia');
    }
    
    const date = new Date();
    const createdAt = date.toISOString();
    const { data } = await api.post('/workouts', { workoutName, day, createdAt });
    console.log(data.message);
    
    setWorkouts([...workouts, data.user]);
    setWorkoutName('');
    inputRef.current.focus();
    scroller.scrollTo(day,  {
      duration: 1000,
      delay: 100,
      smooth: true
    });
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        placeholder="Digite o nome do seu treino" type="text" 
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)} 
        className="input" 
      />
      <Dropdown selected={day} setSelected={setDay} />
      <Button type="submit"> <MdOutlinePlaylistAdd size="26px" /> </Button>
    </FormContainer>
  );
}