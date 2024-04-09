import React from 'react'
import Header from '../../components/Header'

const _pages = [ 'Jobs', 'Profile','Interview rehearsal'];
function TalentHome() {
  return (
    <div>
      <Header pages={_pages}/>   
    </div>
  )
}

export default TalentHome
