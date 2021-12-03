import { Container, ModalCard, ButtonsContainer, Button, Title } from './styles';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
export const Modal = ({ setIsModalOpen }) => {
  const router = useRouter();

  const handleLogout = () => {
    destroyCookie(null, 'token');
    router.push('/login');
  }
  return (
    <Container>
      <ModalCard>
        
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