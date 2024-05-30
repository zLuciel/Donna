import React from 'react'
import { Skeleton } from '@mantine/core';
const CardSkeleton = () => {
  return (
    <div>
    <Skeleton height={50} mb="xl" />
    <Skeleton height={7} radius="xl" />
    <Skeleton height={8} mt={6} radius="xl" />
    <Skeleton height={8} mt={6} width="70%" radius="xl" />
    <Skeleton height={8} mt={6} width="70%" radius="xl" />
    <Skeleton height={8} mt={6} width="70%" radius="xl" />
    </div>
  )
}

export default CardSkeleton
