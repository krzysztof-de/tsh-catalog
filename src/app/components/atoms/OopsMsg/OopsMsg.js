import React from 'react'
import { Wrapper } from './OopsMsg.styles'
import { Title } from '../Title/Title'
import { ReactComponent as TaskIcon } from 'assets/icons/task-list-plain.svg'

const OopsMsg = () => {
    return (
        <Wrapper>
            <TaskIcon />
            <Title>Ooops... It's empty here</Title>
            <span>There are no products on the list</span>
        </Wrapper>
    )
}

export default OopsMsg