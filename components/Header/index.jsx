import { useState } from 'react';
import Logo from '../Logo';
import { Modal } from '../Modal';
import { HiOutlineLogout } from 'react-icons/hi';
import { Container, Flex } from './styles';


export const Header = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Logo />
      <Flex>
          <h3>{user?.name}</h3>
          <HiOutlineLogout 
            size="26px" 
            className="logout-icon"
            onClick={() => setIsModalOpen(true)}
          />
      </Flex>
      { isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/> }
    </Container>
  );
}