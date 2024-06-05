import {React} from 'react';
import Subhead from '../../Components/Subhead/Subhead';
import Rank from '../../Components/Rank/Rank';
import '../Home/Home.css'
import SteamIcon from '../../Images/steam_icon_white.png'



function Home(){
    
  
  return (
    <main className='home-main'>
       <Subhead
       heading="The Current Most Popular Video Games (04/06/2024)"
       />
       <Rank/>
    </main>
  );
};

export default Home;
