import React from 'react'

function Example(){

    const [count, setCount] = React.useState(0)

    const add = () => setCount((count) => count + 1)
    const minus = () => setCount((count) => count - 1)
    return(

        <div>
            <h2>This is an example</h2>
                <button onClick={add}>Add</button>
                {count}
                <button onClick={minus}>Subtract</button>
            
            <p>
                {`this is the count we're changing: ${count}` }
            </p>
        </div>
    )
}

export default Example;