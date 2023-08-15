import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {

            if(action.payload==='up'){
                let sortState=[...state]
             return sortState.sort((a, b) => a.name.localeCompare(b.name));
            }
            else{
                let sortState=[...state]
                return sortState.sort((a,b)=>b.name.localeCompare(a.name));
            }// by name
            // sort() создаёт новый массив? или нужно в ручную?...
            return state // need to fix
        }
        case 'check': {
            return state.filter(el=>el.age>=18)
            // filter() создаёт новый массив? или нужно в ручную?...
          // need to fix
        }
        default:
            return state
    }
}
