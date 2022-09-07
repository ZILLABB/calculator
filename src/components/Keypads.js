import React from 'react'
import { useState } from 'react'

const Keypads = () => {
    const [key, setKey] = useState('');
    const [result, setResult] = useState('');


    const operators = ['/', '*', '+', '-', '.'];

    const calcUpdate = value => {
        if (
            (operators.includes(value) && key === '') || (operators.includes(value) && operators.includes(key.slice(-1)))
        ) {
            return;
        }
        setKey(key + value);

        if (!operators.includes(value)) {
            setResult(eval(key + value).toString());
        }
    }



    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => { calcUpdate(i.toString()) }} key={i} >{i}</button>
            )
        }
        return digits
    }
    const calculate = () => {
        setKey(eval(key).toString());
    }
    const deleteLast = () => {
        if (key === '') {
            return;
        }
        const value = key.slice(0, -1);

        setKey(value); 
    }

    return (
        <div className='App'>
            <div className='calculator'>
                <div className='display'>
                    {result ? <span>({result})</span> : ''}&nbsp;
                    {key || '0'}
                </div>
                <div className='operators'>
                    <button onClick={() => { calcUpdate('/') }}>/</button>
                    <button onClick={() => { calcUpdate('*') }}>*</button>
                    <button onClick={() => { calcUpdate('+') }}>+</button>
                    <button onClick={() => { calcUpdate('-') }}>-</button>


                    <button onClick={deleteLast}>del</button>
                </div>

                <div className='digits'>
                    {createDigits()}
                    <button onClick={()=>{calcUpdate('0')}}>0</button>
                    <button onClick={()=>{calcUpdate('.')}}>-</button>
                    <button onClick={calculate}>=</button>
                </div>


            </div>


        </div>
    )
}

export default Keypads