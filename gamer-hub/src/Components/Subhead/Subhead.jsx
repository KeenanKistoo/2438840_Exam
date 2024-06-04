import {React, useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';
import '../Subhead/Subhead.css'
function Subhead(props){
    const {heading} = props;
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const subHeadControls = useAnimation();

    useEffect(() => {
        if(isInView){
            subHeadControls.start("visible");
        }
    }, [isInView])
  
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
