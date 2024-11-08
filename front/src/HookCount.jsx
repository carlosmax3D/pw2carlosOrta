import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Código para ejecutar cuando el componente se monta o actualiza
    const timer = setInterval(()=>setCount(count+1),1000);
    return ()=>clearInterval(timer);
  }, [count]);

  return <div>{count}</div>;
};

export default MyComponent