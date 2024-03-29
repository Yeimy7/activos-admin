import React from 'react'
import { MdAccountBalance, MdKeyboardArrowUp, MdMonetizationOn, MdPerson, MdShoppingCart } from 'react-icons/md'

export const Widget = ({ type }) => {
  let data;

  //Temporary
  const amount = 234

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <MdPerson className='icon'
          style={{
            color: "crimson",
            backgroundColor: "rgba(255,0,0,0.2)"
          }} />
      }
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
        icon: <MdShoppingCart
          className='icon'
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218,165,32,0.2)"
          }} />
      }
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MdMonetizationOn className='icon' style={{
          color: "green",
          backgroundColor: "rgba(0,128,0,0.2)"
        }} />
      }
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <MdAccountBalance className='icon'
          style={{
            color: "purple",
            backgroundColor: "rgba(128,0,128,0.2)"
          }} />
      }
      break;

    default:
      break;
  }
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"}{amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <MdKeyboardArrowUp />
          20%
        </div>
        {data.icon}
      </div>

    </div>
  )
}
