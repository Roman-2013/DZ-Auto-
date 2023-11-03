import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = 'https://cdn-icons-png.flaticon.com/512/2609/2609201.png'
const upIcon = 'https://cdn-icons-png.flaticon.com/512/61/61148.png'
const noneIcon = 'https://cdn-icons-png.flaticon.com/512/58/58942.png'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') {
        return down
    } else if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    } else {
        return down
    }
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img
                alt={'icons'}
                id={id + '-icon-' + sort}
                src={icon}
                style={icon === noneIcon ? {width: '10px', opacity: 0.5} : {width: '10px'}}
            />
        </span>
    )
}

export default SuperSort
