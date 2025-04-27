'use client'
import * as React from 'react'
import { Upload } from 'lucide-react'

const FileUploadComponent: React.FC = () => {
    
    const handleFileUploadButtonClick = () => {
        const el = document.createElement('input')
        el.setAttribute('type', 'file')
        el.setAttribute('accept', 'application/pdf')
        el.addEventListener('change', (ev) => {
            if(el.files && el.files.length > 0) {
                const file = el.files.item(0)
            }
        })
        el.click()
    }
    
    return (
        <div className='text-white shadow-2xl justify-center items-center flex w-full '>
            <div 
                onClick={handleFileUploadButtonClick} 
                className='flex flex-col justify-center items-center p-3 rounded-md 
                cursor-pointer bg-slate-900 gap-2'>
                <h3>Upload file</h3>
                <Upload/>
            </div>
        </div>
    )
}

export default FileUploadComponent