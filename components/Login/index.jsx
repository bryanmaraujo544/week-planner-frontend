import { Body } from '../Body';
import { Container, Title, Form, Input, Button, Subtitle, Error } from './styles';
import { useForm } from 'react-hook-form';
import Logo from '../Logo';
import { api } from '../../services/api';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, propagationFadeIn, listItem } from '../../animations';
import { toast } from 'react-toastify';

export const Login = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const loginResponse = api.post('/auth/login', data);
      const { data: loginData } = await loginResponse;
      setCookie(null, 'token', loginData.token);
      await toast.promise(
        loginResponse,
        {
          pending: 'Logando...',
          success: 'Usuário logado',
          error: 'Usuário não logado'
        } 
      )
      api.defaults.headers['Authorization'] = `Bearer ${loginData.token}`;
      router.push('/');
    } catch (err) {
      console.log(err?.response);
      window.alert(err?.response?.data?.message);
    }
  }

  return (
    <Body>
      <Container>
        <Logo
          as={motion.p}
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
              type: 'spring',
              mass: 1,
              stiffness: 90
          }}
        />
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
          <Input as={motion.input} variants={listItem} {...register('email', { required: true })} placeholder="Insira um email" />
          {errors.email && <Error>Este campo é obrigatório</Error>}
          <Input as={motion.input} variants={listItem} {...register('password', { required: true })} type="password" placeholder="Insira uma senha" />
          {errors.password && <Error>Este campo é obrigatório</Error>}

          <Button as={motion.button} variants={listItem}type="submit" >Entrar</Button>
        </Form>
      </Container>

    </Body>
  )
}