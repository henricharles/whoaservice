import React from 'react';

const MonthYear = () => {
  const currMonth = new Date().toLocaleString([], {
    month: 'long',
  });
  const currYear = new Date().getFullYear();
return <p className= "font-bold text-gray-400">Revenu {currMonth} {currYear}</p>
}

export default MonthYear;