// src/animation.js
export const addAnimation = (event) => {
    event.target.classList.add('animate__animated', 'animate__tada');
  };
  
export const removeAnimation = (event) => {
    event.target.classList.remove('animate__animated', 'animate__tada');
};
