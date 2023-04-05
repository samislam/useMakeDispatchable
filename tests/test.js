"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const index_1 = require("../src/index");
const initState = {
    name: '',
    email: '',
};
const usersSlice = (0, toolkit_1.createSlice)({
    name: 'users',
    initialState: initState,
    reducers: {
        setName: (state, { payload }) => {
            state.name = payload;
        },
        setEmail: (state, { payload }) => {
            state.email = payload;
        },
    },
});
const useUsersSlice = () => {
    const actions = (0, index_1.useMakeDispatchable)(usersSlice.actions);
    return actions;
};
function test() {
    const {} = useUsersSlice();
}
exports.default = test;
