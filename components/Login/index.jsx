import { Container, Title, Form, Input, Button, Subtitle } from './styles';
import { useForm } from 'react-hook-form';
import Logo from '../Logo';
import { api } from '../../services/api';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, propagationFadeIn, listItem } from '../../animations';

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
      <Title 
        as={motion.h1}
        variants={fadeIn}
        initial="hidden"
        animate="show"
      > 
        Conecte-se 
      </Title>
      <Subtitle
        as={motion.h2}
        variants={fadeIn}
        initial="hidden"
        animate="show"
      > 
        Não tem uma conta? <Link href="/register"> Registre-se agora </Link>
      </Subtitle>
      <Form 
        onSubmit={handleSubmit(onSubmit)} 
        as={motion.form}
        variants={propagationFadeIn}
        initial="hidden"
        animate="show"
      >
        <Input as={motion.input} variants={listItem} {...register('email')} placeholder="Insira um email" />
        <Input as={motion.input} variants={listItem} {...register('password')} type="password" placeholder="Insira uma senha" />
        <Button as={motion.button} variants={listItem}type="submit" >Entrar</Button>
      </Form>
    </Container>
  )
}