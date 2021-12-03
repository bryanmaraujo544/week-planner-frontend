import { Home as HomeComp } from "../components/Home";
import { api } from '../services/api';
import nookies from 'nookies';

export default function Home({ workouts }) {
  return (
    <HomeComp workouts={workouts} />
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

  if (!token || !data.auth) {
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
      workouts
    }
  }
} 