import { useState } from 'react';
import { FormContainer, Button } from './styles';
import { Dropdown } from '../Dropdown';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { api } from '../../services/api';
import { scroller } from 'react-scroll';
import { fadeIn } from '../../animations';
import { motion } from 'framer-motion';



export const Form = ({ workouts, setWorkouts, day, setDay, toggleDayIsOpened, inputRef }) => {
  const [workoutName, setWorkoutName] = useState('');

  const handleAnimations = () => {
    inputRef.current.focus();
    scroller.scrollTo(day,  {
      duration: 1000,
      delay: 100,
      smooth: true
    });
  }

  const getDaySlug = (day) => {
    switch (day) {
      case "Sábado":
        return "sabado";
      case "Segunda":
        return 'segunda';
      case 'Terça':
        return 'terca';
      case 'Quarta':
        return 'quarta';
      case 'Quinta':
        return 'quinta';
      case 'Sexta':
        return 'sexta';
      case 'Sábado': 
        return 'sabado';
      case 'Domingo':
        return 'domingo'
    }
  };
  
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
    
    toggleDayIsOpened({ day: getDaySlug(day), open: true });
    handleAnimations();
  }

  return (
    <FormContainer 
      onSubmit={handleSubmit}
      as={motion.form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
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