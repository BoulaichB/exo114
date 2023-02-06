import React from 'react';
import './public/css/app.css';
import equilibrium from './public/img/image-equilibrium.jpg';
import logo1 from './public/img/icon-ethereum.svg';
import logo2 from './public/img/icon-clock.svg';
import avatar from './public/img/image-avatar.png';

const Card = () => {
  return (
    <section>
        <div className='card'>
            <div className='card-head'>
                <img src={equilibrium} alt="equilibrium" />
            </div>
            <div className="card-body">
                <h3>Equilibrium #3429</h3>
                <p>Our Equilibrium collection promotes balance and calm.</p>
                <span className='Ethereum'><img src={logo1} alt="Ethereum"/> 0.041 ETH</span>
                <span className='clock'><img src={logo2} alt="Clock"/> 3 days left</span>
            </div>
            <div className='card-foot'>
                <div>
                    <img src={avatar} alt="Random guy"/>
                </div>
                <span>Creation of Jules Wyvern</span>
            </div>
        </div>
        
    </section>
  )
}

export default Card;