import Image from 'next/image';
import { Container } from './styles';
import { motion } from 'framer-motion'
import { fadeIn } from '../../animations';

const Logo = ({ children, ...props }) => {
    return (
        <Container         
            {...props}
        >
            WeekPlanner
        </Container>
    )
}

export default Logo;