import {React, useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';
import '../Subhead/Subhead.css'
function Subhead(props){
    const {heading} = props; //This prop allows me to use this component throughout the webapp
    const ref = useRef(null); //Framer motion requires a reference to use the useInView function
    const isInView = useInView(ref, {once: true}); //Check when ref is in view and also how many times the animation should trigger

    const subHeadControls = useAnimation(); //framer-motion gives me access to a set of built-in animation controls

    useEffect(() => {
        if(isInView){
            subHeadControls.start("visible"); //Triggers the visible variant set below. 
        }
    }, [subHeadControls, isInView])
  
  return (
        <motion.section 
            className='home-head'
            ref={ref}
            variants={{
                hidden: {opacity: 0, y: 20},
                visible: {opacity:1, y: 0}
            }}
            initial="hidden"
            animate={subHeadControls}
            transition={{duration: 0.5, delay: 0.25}}>
                <h2 className='sub-head-home'>{heading}</h2>
        </motion.section>
  );
};

export default Subhead;

/*  I learnt how to use the framer motion components from this https://www.youtube.com/watch?v=hjbxaYTMhy0 tutorial.
    I felt that the website itself was too static and I wanted to add a bit more fluidity to it.
    */