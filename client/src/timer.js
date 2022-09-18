import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");
  const [yourName, setYourName] = useState("dddd");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  const handleChange = ({ target }) => setName(target.value);
  const submitData = () => {

    // 👇️ value of input field
    setYourName(name)
  }
  return (
    <>
      <h1>Time: {time}</h1>
      What's your name ?
      <input value={name} onChange={handleChange} type='text' />
      <button onClick={submitData}>Submit</button>
      <h1>{name}</h1>
      NEW

      <h1>{yourName}</h1>

    </>
  );
}