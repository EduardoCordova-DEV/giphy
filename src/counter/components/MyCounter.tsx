import { useCounter } from '../hooks/useCounter'

export const MyCounter = () => {
  const { counter, handleAdd, handleSubstract, handleReset } = useCounter()
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <h1>Counter: {counter}</h1>

        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={handleAdd}>+1</button>
          <button onClick={handleSubstract}>-1</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  )
}
