import { create } from 'zustand';
import {persist} from "zustand/middleware";

let appStore=(set)=>({
    dopen: true,                                           //controlling whether something like a drawer or a modal is open.
    rows: [],
    setRows: (rows) => set((state)=> ({rows: rows})),
    updateOpen:(dopen)=> set((state)=>({dopen:dopen})),   //to update the store's state
 
});

appStore =persist(appStore, {name:"my_app_store"});       // This means that the store's state will be saved to local storage
export const useAppStore=create(appStore);