import { useEffect, useState } from "react"

let timer

export default ({running}) => {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCounter(prev=> {
                if (running)
                    return prev + 1
                else
                    return prev
            })
        }, 1000)
    }, [counter])

    useEffect(()=>{
        if (running){
            setCounter(counter)
        }
        
    }, [running])

    // useEffect(()=>{
    //     console.log('Aqui tengo el valor del flag `runnning`', running)
        
    //     if (running){
    //         timer = setInterval(()=>{
    //             setCounter(prev => prev + 1)
    //         }, 1000)
    //         console.log('timer', timer)
    //     }else{
    //         clearInterval(timer)
    //     }
    // }, [running])

    return (<p>{counter}</p>)
}