import React, { useEffect } from 'react';
import './Style.css'
function Book(){
    useEffect(() => {
      const bookR = document.querySelector('.book-r');
      bookR.classList.add('animate-once');
    }, []);
    return(
        <div className='book'>
        <div className='book-l'>
          <h1>Certified and Award Winning Car Repair Service Provider</h1>
          <p>Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. 
            Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt 
            voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo 
            invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
        </div>
        <div className='book-r'>
          <h1>Book For A Service</h1>
          <input className='input1' type="text" placeholder='Your Name' />
          <input className='input2' type="email" placeholder='Your Email' />
          <input className='input1' type="text" />
          <input className='input2' type="date" placeholder='Service Date' />
          <input className='input3' type="text" placeholder='Special Request'/>
          <button>BOOK NOW</button>
        </div>
</div>
    )
}
export default Book