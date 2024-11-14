//@ts-ignore: : needs React
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import BrailleIcon from '../../assets/images/braille_icon.png'
import defyhatenowLogo from '../../assets/images/dhn-newlogo.jpg'

interface IUiHeader {
  className?:string
}

const UiHeader = (props:IUiHeader)=>{
  return(
    <div className={props.className}>
      <img
        className='br-ui-header__logo'
        src={`${BrailleIcon}?w=50&h=50&fit=crop&auto=format`}
        srcSet={`${BrailleIcon}?w=50&h=50&fit=crop&auto=format&dpr=2 2x`}
        alt='braille icon'
        loading="lazy"
      />
      <Typography variant='h3'>
      BrailleRAP<br/>
      </Typography>
      <img
        className='br-ui-header__logo'
        src={`${defyhatenowLogo}?w=50&h=50&fit=crop&auto=format`}
        srcSet={`${defyhatenowLogo}?w=50&h=50&fit=crop&auto=format&dpr=2 2x`}
        alt='defyhatenow logo'
        loading="lazy"
      />
    </div>
  )
}

export default UiHeader