import { useState, useContext } from 'react';
import { Container, Flex, ColorModeBtn } from './styles';
import { ThemeContext } from '../../pages/_app';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../Logo';
import { Modal } from '../Modal';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';
import { fadeIn } from '../../animations';


export const Header = ({ user }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log({theme});
  
  return (
    <Container
      as={motion.header}
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      <Logo className="logo" />
      <Flex>
          <h3>{user?.name}</h3>
          <ColorModeBtn 
            onClick={toggleTheme}
            as={motion.div}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div 
              style={{ color: '#FAFFFD', opacity: theme === 'dark' ? 1 : 0, zIndex: theme === 'dark' ? 4 : 1}} 
              whileHover={{ color: '#faa307', scale: 1.1 }}
            >
              <FaSun className="sun"/>
            </motion.div>
            <motion.div
              style={{ color: '#0A1A15', opacity: theme === 'light' ? 1 : 0, zIndex: theme === 'light' ? 4 : 1}}
              whileHover={{ color: '#023047', scale: 1.1 }}
            >
              <FaMoon className="moon"  />
            </motion.div>
          </ColorModeBtn>
          <HiOutlineLogout 
            size="26px" 
            className="logout-icon"
            onClick={() => setIsModalOpen(true)}
          />
      </Flex>
      <AnimatePresence>
        { isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/> }
      </AnimatePresence>
    </Container>
  );
}