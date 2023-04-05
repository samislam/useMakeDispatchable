import React from 'react'
import { useMakeDispatchable } from '../src/index'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initState = {
  name: '',
  email: '',
}
const usersSlice = createSlice({
  name: 'users',
  initialState: initState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload
    },
  },
})

const useUsersSlice = () => {
  const actions = useMakeDispatchable(usersSlice.actions)
  return actions
}

export default function test() {
  const {} = useUsersSlice()
}
