import { useState, useRef } from 'react';
import { FormContainer, Input, Button } from './styles';
import { Dropdown } from '../Dropdown';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { MdOutlinePlaylistAdd } from 'react-icons/md';

export const Form = ({ workouts, setWorkouts, inputRef }) => {
  const [workoutName, setWorkoutName] = useState('');
  const [day, setDay] = useState('');
  
  
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