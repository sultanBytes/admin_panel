import React from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CFormInput, CFormLabel, CFormCheck, CButton, CFormTextarea, CForm } from '@coreui/react'

export default function UpdateSize() {
  return (
    <>
        <CCard className="mb-4">
       <CCardHeader className='fw-800 fs-4'>

       <strong>Update Size</strong>    
       </CCardHeader>
      
        
        <CCardBody>
          <CForm>
            <CFormLabel className='py-2'>Size Name</CFormLabel>
            <CFormInput type="text" className='my-2' placeholder="Size Name" aria-label="readonly input example" required/>

           

            <div className='d-flex align-items-center'>
            <CFormLabel className='py-2'>Status &nbsp; :</CFormLabel>
            <div className='d-flex'>
            <CFormCheck  className='ms-3' type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="1" label="Dispaly"/>
            <CFormCheck  className='ms-3' type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="0" label="Hide"/>  
            </div>
            </div>

            <CButton type='submit' color="primary">Update Size</CButton>
            </CForm>
        </CCardBody>

        </CCard>
    </>
  )
}
