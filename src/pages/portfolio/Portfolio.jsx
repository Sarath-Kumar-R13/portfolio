import React from 'react';

 import PortfolioItem from '../../components/PortfolioItem';
import './Portfolio.css';
import { portfolio } from '../../data';


const Portfolio = () => {
  return (
    <section className='portfolio section'>
        <h2 className='section_title'>MY <span>PORTFOLIO</span> </h2>

        <div className='portfolio_container container grid'>
            {portfolio.map((item) => {
                return <PortfolioItem key={item.id} {...item} />
            }
            )
            }
        </div>
    </section>
  )
}

export default Portfolio