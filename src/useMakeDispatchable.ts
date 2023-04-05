import { useDispatch } from 'react-redux'
import type { ActionCreator } from '@reduxjs/toolkit'
import { isArray, isObject } from '@samislam/checktypes'

function useMakeDispatchable<T extends ActionCreator<any>>(reducers: T): T
function useMakeDispatchable<T extends ActionCreator<any>[]>(reducers: T): T
function useMakeDispatchable<T extends { [index: string]: ActionCreator<any> }>(reducers: T): T
function useMakeDispatchable(reducers: any): any {
  const dispatch = useDispatch()
  switch (true) {
    case isArray(reducers): {
      const DispatchableList = (reducers as ActionCreator<any>[]).map(
        (reducer) =>
          (...arg: any[]) =>
            dispatch(reducer(...arg))
      )
      return DispatchableList
    }
    case isObject(reducers): {
      const DispatchableList: any = {}
      for (const [key, value] of Object.entries(reducers as { [index: string]: ActionCreator<any> })) {
        DispatchableList[key] = (...arg: any[]) => dispatch(value(...arg))
      }
      return DispatchableList
    }
    default: // isAsycOrSyncFunc
      return (...arg: any[]) => dispatch((reducers as ActionCreator<any>)(...arg))
  }
}

export default useMakeDispatchable
