import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Items({title,description,backgroundImg,leftButtonText,rightButtonText,twoButtons,first}) {
  return (
    <div className='relative h-screen grid justify-center bg-cover bg-center bg-no-repeat' style = {{backgroundImage: `url(${backgroundImg})`}}>
        <div className='pt-36 flex flex-col items-center'>
            <div className='text-center'>
                <p className='font-bold text-3xl'>{title}</p>
                <div className='pt-2'>
                    <p className='font-normal'>{description}</p>
                </div>
            </div>
            <div className='absolute bottom-12 flex flex-col items-center px-[5%]'>
                <div className='flex'>
                   <Button imp="primary" text ={leftButtonText}/>
                   {twoButtons && ( 
                    <Button imp="secondary" text = {rightButtonText}/>
                   )}
                </div>
                {first&&(
                    <div className='pt-12'>
                        <ExpandMoreIcon sx = {{fontSize :30}}/>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Items
