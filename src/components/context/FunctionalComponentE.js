import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'
import { ChannelContext } from '../../App'

function FunctionalComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
      {user} - {channel}
    </div>
  )
}

export default FunctionalComponentE
