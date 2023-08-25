import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating
        color='blue' size={45} className='test'
        messages={["terible", "bad", "okay", "good", "amazing"]}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars.</p>
    </>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    <StarRating maxRating={5} color='orangered' size={45} defaultRating={3} />
    <StarRating />
    < Test />
  </React.StrictMode>
);
