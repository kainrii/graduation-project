import React from 'react'
import Header from '../../components/Header';
import ProfileCard from '../../components/Card/ProfileCard';

const pages =["Job Management", "Talents"];
const Talents = () => {
  return (
    <div>
      <Header pages = {pages}/>
      <ProfileCard/>

    </div>
  )
}

export default Talents
