import React from 'react';
import './public/css/app.css';
import equilibrium from './public/img/image-equilibrium.jpg';
import logo1 from './public/img/icon-ethereum.svg';
import logo2 from './public/img/icon-clock.svg';
import logo3 from './public/img/icon-view.svg';
import avatar from './public/img/image-avatar.png';



// monActive.addEventListener('click', ()=> {
//     document.getElementsByClassName('active-part')[0].style.transform = 'scale(1)';
// });

const Card = () => {
    function active(){
        const monClic =  document.getElementsByClassName('active-part')[0];
        if(monClic.style.transform === 'scale(0)'){
            monClic.style.transform = 'scale(1)';
        } else{
            monClic.style.transform = 'scale(0)';
        }
    }
    return (
    <section>
        <div className='card'>
            <div className='card-head' onClick={active}>
                <img src={equilibrium} alt="equilibrium" />
                <div className='active-part'>
                    <img src={logo3} alt="view"/>
                </div>
            </div>
            <div className="card-body">
                <h3>Equilibrium #3429</h3>
                <p>Our Equilibrium collection promotes balance and calm.</p>
                <div className='span-container'>
                    <span className='ethereum'><img src={logo1} alt="Ethereum"/> 0.041 ETH</span>
                    <span className='clock'><img src={logo2} alt="Clock"/> 3 days left</span>
                </div>
                
            </div>
            <div className='card-foot'>
                <div>
                    <img src={avatar} alt="Random guy"/>
                </div>
                <span><span className='creation-of'>Creation of</span> <span class='jules'>Jules Wyvern</span></span>
            </div>
        </div>
        
    </section>
  )
}

export default Card;