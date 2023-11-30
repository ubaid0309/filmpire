import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {Array(10).fill(0).map((skeleton, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Skeleton className="h-[270px] lg:h-[400px] w-[270px] lg:w-[350px]" />
          <Skeleton />
        </div>
      ))}
    </div>
  );
}

export default Loading;
