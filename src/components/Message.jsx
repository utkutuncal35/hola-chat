import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
      </div>
    </div>
  )
}

export default Message