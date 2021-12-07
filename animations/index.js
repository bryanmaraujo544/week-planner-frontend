export const fadeIn = {
    hidden: {
        opacity: 0,
        y: -150,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            delay: .5,
            mass: 1.25,
            stiffness: 125,
        }
    }
}

export const propagationFadeIn = {
    hidden: {
        opacity: 0,
    }, 
    show: {
        opacity: 1,
        transition: {
            delayChildren: .85,
            staggerChildren: 0.25,

        }
    }
}

export const listItem = {
    hidden: { opacity: 0, y: -50 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: 'spring',
        }  
    }
}