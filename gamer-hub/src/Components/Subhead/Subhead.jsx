import {React} from 'react';
import '../Subhead/Subhead.css'
function Subhead(props){
    const {heading} = props; //This prop allows me to use this component throughout the webapp
  
  return (
        <section className='home-head'>
            <h2 className='sub-head-home'>{heading}</h2>
        </section>
  );
};

export default Subhead;
