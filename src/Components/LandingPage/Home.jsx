import React, { useEffect } from 'react'
import Hero from './Hero'
import TopCategory from './TopCategory'
import UploadCv from './UploadCv'
import RecentJob from './RecentJob'
import How from './How'
import Messages from './Messages'
import Doing from './Doing'
import News from './News'
import Footer from './Footer'

const Home = () => {
  useEffect(() => {
    // localStorage.removeItem('data');
    localStorage.removeItem('userType');
  }, [])

  return (
    <>
      <Hero />
      <TopCategory />
      <UploadCv />
      <RecentJob />
      <How />
      <Messages />
      <Doing />
      <News />
    </>
  )
}

export default Home
