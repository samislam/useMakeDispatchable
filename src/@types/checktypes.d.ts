declare module '@samislam/checktypes' {
  import { ActionCreator } from '@reduxjs/toolkit'

  export function isArray(arg: any): boolean
  export function isAsycOrSyncFunc<T>(arg: T): T is ActionCreator<unknown>
  export function isObject(arg: any): boolean
}
