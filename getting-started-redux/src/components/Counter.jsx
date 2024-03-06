import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    const incrementHandler = () => {
        dispatch({ type: 'increment-by-5' })
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement-by-5' })
    }
    const toggleCounterHandler = () => {
        dispatch({ type: "increment" })
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment by 5</button>
                <button onClick={decrementHandler}>Decrement by 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
