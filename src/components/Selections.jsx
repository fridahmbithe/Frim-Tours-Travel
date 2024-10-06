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
    <section className='container px-4 grid gap-2 sm:grid-cols-3 sm:grid-rows-2'>
      <Selection figure={Diani} caption='Diani' />
      <Selection figure={mombasa} caption='Mombasa' />
      <Selection figure={maldives} caption='Maldives' />
      <Selection figure={borabora} caption='Bora Bora' />
      <Selection figure={zanzibar} caption='Zanzibar' />
      <Selection figure={miami} caption='Miami' />
    </section>
  );
};

export default Selections;
