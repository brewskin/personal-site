import React, { useState, useEffect } from 'react';
import DateFact from './numbers';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // mes in an average year
    const birthTime = new Date('1990-07-02T07:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const HeartBeats = () => {
  const [heartbeat, setHeartbeat] = useState(0);

  const tick = () => {
    setHeartbeat(heartbeat + 1);
    // if (newBeat > 15) {
    //   setHeartbeat(0)
    // }
    // setHeartbeat(newBeat + 1)
  };

  useEffect(() => {
    const t = setInterval(() => tick(), 25);
    return () => {
      clearInterval(t);
    };
  }, []);

  return <>{heartbeat}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'beats',
    label: 'Heartbeats Today',
    value: <HeartBeats />,
  },
  {
    key: 'date-fact',
    label: 'A fact about today',
    value: <DateFact />,
  },
  {
    key: 'cities',
    label: 'Cities visited',
    value: 3,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=1U5A2MR25l5Kufvh_1QLlKvEopaNBXZY&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Cambridge, ON',
  },
];

export default data;
