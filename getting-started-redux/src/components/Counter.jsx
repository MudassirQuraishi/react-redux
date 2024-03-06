import classes from './Counter.module.css';
import store from '../store/redux'

const Counter = () => {
    const counterSubsciber = () => {
        const latestState = store.getState();
        console.log(latestState);
    };

    const toggleCounterHandler = () => {
        store.subscribe(counterSubsciber);
        store.dispatch({ type: "increment" })
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>-- COUNTER VALUE --</div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
