import React, { useState } from 'react'
import { NavBar } from '../layout/NavBar'
import { PageContainer } from '../layout/PageContainer'
import { Sidebar } from '../layout/Sidebar'
import { Widget } from '../widgets/Widget'

export const Home = () => {
  const [toggle, setToggle] = useState(false)

  return (

    <div className='home'>
      <Sidebar toggle={toggle} />
      <div className=" w-100">
        <NavBar toggle={toggle} setToggle={setToggle} />
        <PageContainer toggle={toggle}>
            <div className='widgets'>
              <Widget type="user"/>
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>

            </div>
        </PageContainer>
      </div>
    </div>
  )
}
