import {useReducer, createContext} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'create':
            return {
                notes: [...state.notes, {
                    noteTitle: 'Title',
                    itemId: state.notes.length,
                    contents: 'Click to edit text',
                    createdAt: new Date().getTime(),
                }]
            };
        case 'remove':
            return state;
        default:
            throw new Error("No Action Specified.")
    }
}
const StateContext = createContext();

function StateManager({children}) {
    const [state, dispatch] = useReducer(reducer, {
        notes: []
    });
    let val = {
        state, 
        dispatch
    }
    return (
        <StateContext.Provider value={val}>
            {children}
        </StateContext.Provider>
    )
}

export default StateManager;
export {
    StateContext
}