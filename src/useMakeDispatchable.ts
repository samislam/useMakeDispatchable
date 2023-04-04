import React from 'react'
import { useDispatch } from 'react-redux'
import { isObject, isAsycOrSyncFunc, isArray } from '@samislam/checktypes'

export default function useMakeDispatchable(reducers: any[] | object | (() => void)) {
  const dispatch = useDispatch()
  switch (true) {
    case isObject(reducers): {
      const DispatchableList: any = {}
      for (const [key, value] of Object.entries(reducers)) {
        DispatchableList[key] = (arg: any) => dispatch(value(arg))
      }
      return DispatchableList
    }
    case isAsycOrSyncFunc(reducers): {
      return (arg: any) => dispatch((reducers as (arg: any) => void)(arg))
    }
    case isArray(reducers): {
      const DispatchableList = (reducers as any[]).map((reducer) => (arg: any) => dispatch(reducer(arg)))
      return DispatchableList
    }
  }
}
