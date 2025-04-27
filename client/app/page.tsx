import React from 'react'
import FileUploadComponent from './components/fileUpload'

const page = () => {
  return (
    <div className='min-h-[80vh] flex min-w-screen'> 
        <div className='w-[30vw] flex justify-center'>
          <FileUploadComponent/>
        </div>
        <div className='w-[70vw] min-h-screen border-l-2'></div>
    </div>
  )
}

export default page
