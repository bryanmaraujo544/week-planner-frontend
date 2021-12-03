import { useState } from 'react';
import { Select, OptionContainer } from './styles';
import { RiArrowDropDownLine } from 'react-icons/ri';

const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

export const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Select onClick={() => setIsActive((prevState) => !prevState)}>
      {selected === '' ? (
          'Dia da Semana'
      ) : (
          selected
      )}
      <RiArrowDropDownLine className="icon" size="28px" />
      {isActive && (
          <OptionContainer  className="options-container">
              {weekDays.map((day) => (
                  <div onClick={(e) => setSelected(e.target.textContent)} className="option" key={day} value={day}>{day}</div>
              ))}
          </OptionContainer>
      )}
    </Select>
  )
}