import React, { useState } from 'react'

import { 
  CCard, 
  CCardHeader, 
  CCardBody, 
  CFormInput, 
  CFormLabel, 
  CFormCheck, 
  CButton, 
  CProgress, 
  CProgressBar, 
  CForm 
} from '@coreui/react';
export default function SliderUpdate() {
    const [images, setImages] = useState([]);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');
  
    const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
      setImages(files.map((file) => URL.createObjectURL(file)));
      setError('');  // Clear any previous error message
    };
  
    const handleUpload = (e) => {
      e.preventDefault();
      if (images.length === 0) {
        setError('Please select at least one image to upload.');
        return;
      }
      // Simulate image upload process
      const total = 100;
      let current = 0;
      const interval = setInterval(() => {
        current += 10;
        setProgress(current);
        if (current === total) clearInterval(interval);
      }, 200);
    };
  return (
    <>
    <CCard className="mb-4">
      <CCardHeader className='fw-800 fs-4'>
        <strong>Update Slider</strong>    
      </CCardHeader>
      <CCardBody>
        <CForm>
          <CFormLabel className='py-2'>Slider Name</CFormLabel>
          <CFormInput type="text" className='my-2' placeholder="Slider Name" required/>

          <CFormLabel className='py-2'>Heading</CFormLabel>
          <CFormInput type="text" className='my-2' placeholder="Heading" />

          <CFormLabel className='py-2'>Sub Heading</CFormLabel>
          <CFormInput type="text" className='my-2' placeholder="Sub Heading" />

          <CFormLabel className='py-2'>Slider Images</CFormLabel>
          <CFormInput
            type='file'
            className='my-2'
            multiple
            onChange={handleImageChange}
          />
          
          {images.length > 0 && (
            <div className='my-2'>
              <h5>Image Previews:</h5>
              <div className='d-flex flex-wrap'>
                {images.map((image, index) => (
                  <div key={index} className='me-2 mb-2'>
                    <img src={image} alt={`preview-${index}`} width="100" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && <div className="text-danger my-2">{error}</div>}

          <div className='d-flex align-items-center'>
            <CFormLabel className='py-2'>Status &nbsp; :</CFormLabel>
            <div className='d-flex'>
              <CFormCheck className='ms-3' type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="1" label="Display"/>
              <CFormCheck className='ms-3' type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="0" label="Hide"/>  
            </div>
          </div>

          <CButton type='submit' color="primary" name='save' onClick={handleUpload}>Update Slider</CButton>

          {progress > 0 && (
            <CProgress className='my-3'>
              <CProgressBar color="success" value={progress}>
                {progress}%
              </CProgressBar>
            </CProgress>
          )}
        </CForm>
      </CCardBody>
    </CCard>
  </>
  )
}
