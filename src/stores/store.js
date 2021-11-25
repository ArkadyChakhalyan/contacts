import { createStore } from "redux";
import { reducer } from "../reducers/reducer";

const persistedState = localStorage.getItem('contactsSPA')
    ? JSON.parse(localStorage.getItem('contactsSPA'))
    : undefined;

export const store = createStore(reducer, persistedState);

store.subscribe(() => {
    localStorage.setItem('contactsSPA', JSON.stringify(store.getState()))
});