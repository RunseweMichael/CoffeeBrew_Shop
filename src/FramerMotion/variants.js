export const fadeIn = (direction, delay) => {
    return {
        hidden:{
            y: direction === 'up' ? 300 : direction === 'down'? 300: 0,
            x: direction === 'left'? 300: direction === 'right'? 300: 0,
            opacity: 0
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type: 'tween',
                duration: 4,
                delay: delay,
                ease: [0.5, 0.5, 0.5, 1],
            }
        }
    };
}