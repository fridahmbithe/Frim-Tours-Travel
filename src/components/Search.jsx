import React from 'react';

const Search = () => {
  return (
    <section className='container px-4 my-16 grid gap-8 md:grid-cols-3'>
      <div className='md:col-span-2'>
        <h3 className='uppercase font-extrabold mb-4'>
          luxury included vacations for tow people
        </h3>
        <p className='mb-10 text-gray-600 text-justify'>
        At Frim-Tours & Travel, we believe that every journey should be an extraordinary adventure 
        filled with unforgettable memories. Our personalized travel experiences are designed to cater 
        to your unique interests and preferences, ensuring that every moment is just as you imagined. 
        With expert guides who are passionate about sharing the hidden gems and rich histories of each 
        destination, we guarantee an enriching and immersive experience. We take care of all the details, 
        from booking flights and accommodations to organizing tours and activities, so you can relax and 
        enjoy a hassle-free trip. Your safety is our top priority, and we partner with trusted service 
        providers to ensure a worry-free travel experience. Plus, we offer unbeatable value without compromising 
        on quality, and we are committed to sustainable tourism practices that protect the environment and support
        local communities. Choose Frim-Tours & Travel for your next adventure and start creating memories that will 
        last a lifetime!
        </p>
        <div className='flex flex-col sm:flex-row'>
          <div className='text-center'>
            <h4 className='uppercase font-extrabold mb-2'>leading service</h4>
            <p className='uppercase text-gray-600'>
            Experience top-notch travel services tailored just for you.
            </p>
          </div>
          <div className='text-center'>
            <h4 className='uppercase font-extrabold mb-2'>automated booking</h4>
            <p className='uppercase text-gray-600'>
             Book your dream vacation effortlessly with our smart system.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='border px-4 py-4 uppercase text-center'>
          <p className='py-2'>get an additional 10% off</p>
          <p className='py-2'>12 hours left</p>
          <p className='py-2 text-white bg-black cursor-pointer'>
            book now and save
          </p>
        </div>
        <form action=''>
          <div className='my-4'>
            <label htmlFor='destination'>Destination</label>
            <select
              name='destinations'
              id='destination'
              className='block w-full p-2 border rounded'
            >
              <option value='dog'>Bora Bora</option>
              <option value='cat'>Mombasa</option>
              <option value='hamster'>Maldives</option>
              <option value='parrot'>Diani</option>
              <option value='spider'>zanzibar</option>
              <option value='goldfish'>Miami</option>
            </select>
          </div>
          <div className='my-4'>
            <label htmlFor='checkIn'>Check-In</label>
            <input
              type='date'
              id='checkIn'
              name='checkIn'
              className='block w-full p-2 border rounded'
            ></input>
          </div>
          <div className='my-4'>
            <label htmlFor='checkOut'>Check-Out</label>
            <input
              type='date'
              id='checkOut'
              name='checkOut'
              className='block w-full p-2 border rounded'
            ></input>
          </div>
          <button className='btn'>Rates & Availabilities</button>
        </form>
      </div>
    </section>
  );
};

export default Search;
