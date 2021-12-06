import Image from 'next/image';
import { Container } from './styles';
import { motion } from 'framer-motion'
import { fadeIn } from '../../animations';

const Logo = () => {
    return (
        <Container         
            as={motion.p}
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: 'spring',
                mass: 1,
                stiffness: 90
            }}
        >
            WeekPlanner
        </Container>
    )
}

export default Logo;