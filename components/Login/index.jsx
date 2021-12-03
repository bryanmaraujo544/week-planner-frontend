import { Container, Title, Form, Input, Button, Subtitle } from './styles';
import { useForm } from 'react-hook-form';
import Logo from '../Logo';
import { api } from '../../services/api';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const { data: { token } } = await api.post('/auth/login', data);
      setCookie(null, 'token', token);
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      router.push('/');
    } catch (err) {
      window.alert(err?.response?.data?.message);
    }
  }

  return (
    <Container>
      <Logo />
      <Title> Conecte-se </Title>
      <Subtitle> 
        Não tem uma conta? <Link href="/register"> Registre-se agora </Link>
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('email')} placeholder="Insira um email" />
          <Input {...register('password')} type="password" placeholder="Insira uma senha" />
        <Button type="submit" >Entrar</Button>
      </Form>
    </Container>
  )
}