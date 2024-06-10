import React, {useState} from 'react'
import '../Theory/Theory.css'
import Essay from '../../Data/Essay'
import Blog1 from '../../Data/Blog1'
import Blog2 from '../../Data/Blog2'
import Blog3 from '../../Data/Blog3'
import Sub from '../../Components/Sub/Sub'
import Text from '../../Components/Text/Text'
import ImageComp from '../../Components/ImageComp/Image'
import Link from '../../Components/Link/Link'
import Reference from '../../Components/Reference/Reference'

 function Theory()  {

  const [displayTheory, setDisplayTheory] = useState(Essay)

  function handleTheory(array){
    setDisplayTheory(array);
  }

    return (
      <main className="the-main">
        <section className="fil-btns">
          <button onClick={() => handleTheory(Essay)} className={displayTheory === Essay ? 'the-active-btn' : 'the-btn'}>Essay</button>
          <button onClick={() => handleTheory(Blog1)} className={displayTheory === Blog1 ? 'the-active-btn' : 'the-btn'}>Week 3 - Blogpost</button>
          <button onClick={() => handleTheory(Blog2)} className={displayTheory === Blog2 ? 'the-active-btn' : 'the-btn'}>Week 4 - Blogpost</button>
          <button onClick={() => handleTheory(Blog3)} className={displayTheory === Blog3 ? 'the-active-btn' : 'the-btn'}>Week 12 - Blogpost</button>
        </section>
        <section>
          {
            displayTheory.map((output, index) => {
              if(output.type === 'head'){
                return <Sub head={output.info} key={index}/>
              }else if(output.type === 'text'){
                return <Text info={output.info} key={index}/>
              }else if(output.type === 'image'){
                return <ImageComp image={output.info} key={index}/>
              }else if(output.type === 'link'){
                return <Link url={output.info} key={index}/>
              }else{
                return <Reference info={output.info} url={output} key={index}/>
              }
            })
          }
        </section>
      </main>
    )
  }

export default Theory;