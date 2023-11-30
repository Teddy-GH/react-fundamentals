import React, { useState, useEffect} from 'react'

function EffectHookOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('useeffect  -  Upadting document title')
        document.title = `You clicked ${count} times`
    }, [count])

    const handleName = e => {
        e.preventDefault()
        setName(e.target.value)
    }
  return (
    <div>
        <input type='text' value={name} onChange={handleName} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default EffectHookOne
