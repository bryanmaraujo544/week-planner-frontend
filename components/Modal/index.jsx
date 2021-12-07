import { Container, ModalCard, ButtonsContainer, Button, Title } from './styles';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { motion } from 'framer-motion';
export const Modal = ({ setIsModalOpen }) => {
  const router = useRouter();

  const handleLogout = () => {
    destroyCookie(null, 'token');
    router.push('/login');
  }
  return (
    <Container>
      <ModalCard
        as={motion.div}
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 300 }}
      >
        <Title>
          Deseja mesmo sair da sua conta?
        </Title>
        <ButtonsContainer>
          <Button onClick={handleLogout}>Sair</Button>
          <Button isCancel onClick={() => setIsModalOpen(false)}>Cancelar</Button>
        </ButtonsContainer>

      </ModalCard>
    </Container>
  );
}