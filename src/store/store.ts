import { scan, shareReplay, startWith, Subject } from "rxjs";

import { Action } from "./actions";

export function createStore(rootReducer: any) {
    const subject$ = new Subject();
    const store$ = subject$.pipe(
        startWith({ type: "__INIT__" }),
        scan(rootReducer, undefined),
        shareReplay(1),
    );

    const dispatch = (action: Action) => subject$.next(action);

    return { store$, dispatch };
}