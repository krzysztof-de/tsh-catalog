import React from 'react'
import { StyledAvatar, UserFace, UserMenu } from './Avatar.style'

const Avatar = () => {
    return (
        <StyledAvatar>
            <UserFace />
            <UserMenu>
                <div className="menu-item"><a>Sign Out</a></div>
            </UserMenu>
        </StyledAvatar>
    )
}

export default Avatar
