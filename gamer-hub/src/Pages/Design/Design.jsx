import React from 'react'
import '../Design/Design.css'
import Sub from '../../Components/Sub/Sub';
import Text from '../../Components/Text/Text';
import ImageComp from '../../Components/ImageComp/Image';
import DesignInfo from '../../Data/Design'
import Link from '../../Components/Link/Link';
import ColourComb from '../../Components/ColourComb/ColourComb';
import Scroll from '../../Components/Scroll/Scroll';

 function Design()  {

    return (
      <main className='des-main'>
        {
          DesignInfo.map((output, index) =>
           {
              if(output.type === 'head'){
                return <Sub head={output.info} key={index}/>
              }else if(output.type === 'text'){
                return <Text info={output.info} key={index}/>
              }else if(output.type === 'image'){
                return <ImageComp image={output.info} key={index}/>
              }else if(output.type === 'a'){
                return <Link url={output.info} key={index}/>
              }else{
                return <ColourComb/>
              }
           })}
           <Scroll/>
      </main>
    )
  }

export default Design;