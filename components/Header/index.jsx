import { useState } from 'react';
import Logo from '../Logo';
import { Modal } from '../Modal';
import { HiOutlineLogout } from 'react-icons/hi';
import { Container, Flex } from './styles';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn } from '../../animations';


export const Header = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container
      as={motion.header}
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      <Logo />
      <Flex>
          <h3>{user?.name}</h3>
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