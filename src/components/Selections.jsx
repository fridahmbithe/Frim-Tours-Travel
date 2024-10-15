import React from 'react';

import Selection from './Selection';

import Diani from '../assets/Diani.jpeg';
import mombasa from '../assets/borabora2.jpg';
import maldives from '../assets/maldives1.jpg';
import borabora from '../assets/maldives2.jpg';
import zanzibar from '../assets/zanzibar.jpg';
import miami from '../assets/keywest.jpg';

const Selections = () => {
  return (
    <div>
      <div className='text-center text-lg'>
      <h2 className='my-4'>Popular Destinations in 2024</h2>
      <p className='text-center text-base my-1'>Embark on an unforgettable journey through Africa!  Discover the captivating allure  of its stunning <br/>
            beaches 
            and immerse yourself in vibrant cultures. Experience the magic of Africa like never before!</p>      </div>
      <section className='container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2'>
      <Selection figure={Diani} caption='Diani' />
      <Selection figure={mombasa} caption='Mombasa' />
      <Selection figure={maldives} caption='Maldives' />
      <Selection figure={borabora} caption='Bora Bora' />
      <Selection figure={zanzibar} caption='Zanzibar' />
      <Selection figure={miami} caption='Miami' />
    </section>
    </div>
   
  );
};

export default Selections;
