import React, { createContext, useContext } from 'react'

// ✅ Create context outside components
const MyContext = createContext({ name: "sema", age: 24 });

const Demadas = () => {
    const contextValue = useContext(MyContext);
  return (
  
      <div>
        <span>Demanding events that are needed</span>
        <DemandsProvider />
      </div>
 
  )
}

const DemandsProvider = () => {
  const data = useContext(MyContext);
  return (
    <div>
      <span>{data.name} - {data.age}</span>
    </div>
  );
}

export default Demadas;
