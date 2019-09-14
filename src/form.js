import React, { useRef, useState, useEffect } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('18');

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const submitRef = useRef(null);

  const keyDownHandler = e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const focused = document.activeElement;
 
      if (focused.id === 'txtName') {
        ageRef.current.focus();
      } else if (focused.id === 'txtAge') {
        submitRef.current.focus();
      } else if (focused.id === 'btnSubmit') {
        nameRef.current.focus();
      }
    }
  };

  useEffect(() => {
    nameRef.current.focus();
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="txtName"
          value={name}
          ref={nameRef}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="txtAge"
          value={age}
          ref={ageRef}
          onChange={e => setAge(e.target.value)}
        />
      </div>

      <div>
        <button id="btnSubmit" ref={submitRef}>
          Submit
        </button>
      </div>
    </div>
  );
}
