"use client"
import { Button } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = () => {
  const [startCountdown, setStartCountdown] = useState(false);

  // Fecha objetivo (25 de abril de 2024)
  const targetDate = new Date('2024-08-09T00:00:00');

  useEffect(() => {
    // Comienza el contador solo después de que el componente se haya montado
    setStartCountdown(true);
  }, []);

  // Función para renderizar el componente del contador
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Si el contador ha finalizado
      return <span>¡El contador ha finalizado!</span>;
    } else {
      // Si el contador está en progreso
      return (
        <span className='flex gap-3'>
          <Button variant="outline" size="xs" color="rgba(255, 255, 255, 1)">{days}D</Button>
          <Button variant="outline" size="xs" color="rgba(255, 255, 255, 1)">{hours}H</Button>
          <Button variant="outline" size="xs" color="rgba(255, 255, 255, 1)">{minutes}M</Button>
          <Button variant="outline" size="xs" color="rgba(255, 255, 255, 1)">{seconds}S</Button>
        </span>
      );
    }
  };

  return (
    <>
      {startCountdown && <Countdown date={targetDate} renderer={renderer} />}
    </>
  );
};

export default CountdownTimer;
