import {React} from 'react';
import Subhead from '../../Components/Subhead/Subhead';
import Rank from '../../Components/Rank/Rank';
import '../Home/Home.css' 

function Home(){
    
  
  return (
    <main className='home-main'>
       <Subhead
       heading="The Current Most Played Video Games (04/06/2024)"
       />
       <Rank/>
    </main>
  );
};

export default Home;
