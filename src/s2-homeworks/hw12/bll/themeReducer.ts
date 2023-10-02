const initState = {
    themeId: 1,
}

export type initStateType= {
    themeId:number
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): initStateType => { // fix any
    switch (action.type) {

        case 'SET_THEME_ID':{
            return {...state,themeId:action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any


export type ChangeThemeIdType={
    type:'SET_THEME_ID'
    id:number
}