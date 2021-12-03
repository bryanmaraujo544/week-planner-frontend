import { Container, Title, Form, Input, Button, Subtitle } from './styles';
import { useForm } from 'react-hook-form';
import Logo from '../Logo';
import { api } from '../../services/api';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Register = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (userInfo) => {

    try {
      const { data } = await api.post('/users', userInfo);
      router.push('/login');
    } catch (err) {
      window.alert('This user already exists');
    }

  }

  return (
    <Container>
      <Logo className="logo" />
      <Title> Registre-se </Title>
      <Subtitle> 
        Já tem uma conta? <Link href="/login"> Conecte-se agora </Link>
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('name')}  placeholder="Insira seu nome" />
        <Input {...register('email')} placeholder="Insira um email" />
        <Input {...register('password')} type="password" placeholder="Insira uma senha" />
        <Button type="submit" >Registrar-se</Button>
      </Form>
    </Container>
  )
}