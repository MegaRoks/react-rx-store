import React, { useState } from 'react';

import { Button, Grid } from "@mui/material";

import { addCustomNumber, createStore, decrement, increment, reducer, removeCustomNumber } from "./store";

export const App = () => {
    const [data, setData] = useState(0);

    const { store$, dispatch } = createStore(reducer);

    store$.subscribe((state: any) => {
        console.log(state);
    });

    return (
        <Grid container alignItems="center" width="100vw" height="100vh" justifyContent="center">
            <Grid item container width={500} spacing={3}>
                <Grid item container>
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={() => {
                            dispatch(addCustomNumber(10))
                        }}>Increment</Button></Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={() => {
                            dispatch(removeCustomNumber(10))
                        }}>Decrement</Button></Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={() => {
                            dispatch(increment())
                        }}>Increment</Button></Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={() => {
                            dispatch(decrement())
                        }}>Decrement</Button></Grid>
                </Grid>
                <Grid item container>
                    
                    <Grid item xs={6}>
                        <pre>{data}</pre>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
