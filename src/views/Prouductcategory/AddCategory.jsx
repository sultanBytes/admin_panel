import React from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CFormInput, CFormLabel, CFormCheck, CButton, CFormTextarea, CForm } from '@coreui/react'
export default function AddCategory() {
 
  
  return (
    <>
        <CCard className="mb-4">
       <CCardHeader className='fw-800 fs-4'>

       <strong>Add Product Category</strong>    
       </CCardHeader>
      
        
        <CCardBody>
          <CForm>
            <CFormLabel className='py-2'>Category Name</CFormLabel>
            <CFormInput type="text" className='my-2' placeholder="Category Name" aria-label="readonly input example" required/>

            <CFormLabel className='py-2'>Category Image</CFormLabel>
            <CFormInput type="file" className='my-2' placeholder="Category Name" aria-label="readonly input example"/>

            
            <CFormLabel className='py-2'>Category Description</CFormLabel>
            <CFormTextarea className='my-2' placeholder="Descripation" aria-label="readonly input example"></CFormTextarea>
           

            <div className='d-flex align-items-center'>
            <CFormLabel className='py-2'>Status &nbsp; :</CFormLabel>
            <div className='d-flex'>
            <CFormCheck  className='ms-3' type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="1" label="Dispaly"/>
            <CFormCheck  className='ms-3' type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="0" label="Hide"/>  
            </div>
            </div>

            <CButton type='submit' color="primary">Add Category</CButton>
            </CForm>
        </CCardBody>
        </CCard>
    </>
  )
}
