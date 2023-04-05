import type { ActionCreator } from '@reduxjs/toolkit';
declare function useMakeDispatchable<T extends ActionCreator<any>>(reducers: T): T;
declare function useMakeDispatchable<T extends ActionCreator<any>[]>(reducers: T): T;
declare function useMakeDispatchable<T extends {
    [index: string]: ActionCreator<any>;
}>(reducers: T): T;
export default useMakeDispatchable;
//# sourceMappingURL=useMakeDispatchable.d.ts.map