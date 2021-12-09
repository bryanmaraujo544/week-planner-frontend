import { Home as HomeComp } from "../components/Home";
import { api } from '../services/api';
import nookies from 'nookies';
import { AnimatePresence } from "framer-motion";

export default function Home({ workouts }) {
  console.log('work', workouts);
  return (
    <AnimatePresence>
      <HomeComp workouts={workouts} />

    </AnimatePresence>
  )
}

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
  
  const { data } = await api.get('/auth');
  console.log(data);

  if (!token || data.auth === false) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const { data: { workouts } } = await api.get('/workouts');
  console.log({ workouts });

  return {
    props: {
      workouts: workouts ? workouts : []
    }
  }
} 