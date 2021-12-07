import { Container, Title, Form, Input, Button, Subtitle } from './styles';
import { useForm } from 'react-hook-form';
import Logo from '../Logo';
import { api } from '../../services/api';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, listItem, propagationFadeIn } from '../../animations';

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
          Registre-se 
        </Title>
      <Subtitle  
        as={motion.h2}
        variants={fadeIn}
        initial="hidden"
        animate="show"
        > 
          Já tem uma conta? <Link href="/login"> Conecte-se agora </Link>
      </Subtitle>
      <Form 
        onSubmit={handleSubmit(onSubmit)}
        as={motion.form}
        variants={propagationFadeIn}
        initial="hidden"
        animate="show"
        
      >
        <Input as={motion.input} variants={listItem} {...register('name')}  placeholder="Insira seu nome" />
        <Input as={motion.input} variants={listItem} {...register('email')} placeholder="Insira um email" />
        <Input as={motion.input} variants={listItem} {...register('password')} type="password" placeholder="Insira uma senha" />
        <Button as={motion.button} variants={listItem} type="submit" >Registrar-se</Button>
      </Form>
    </Container>
  )
}