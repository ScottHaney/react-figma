import * as React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './app/counterSlice';

export const ClientApp = () => {
    //const count = useSelector((state: any) => state.counter.value);
    //const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button aria-label="Increment value">
                    Increment
                </button>
                <button aria-label="Decrement value">
                    Decrement
                </button>
            </div>
        </div>
    );
};
