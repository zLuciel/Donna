import { Button } from '@mantine/core';
import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = () => {
  // Fecha objetivo (25 de abril de 2024)
  const targetDate = new Date('2024-04-30T00:00:00');

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
      <Countdown date={targetDate} renderer={renderer} />
    </>
  );
};

export default CountdownTimer;