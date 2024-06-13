import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CFormInput, CFormLabel, CFormCheck, CButton, CFormTextarea, CFormSelect, CForm } from '@coreui/react'
export default function addproduct() {

  const [images, setImages] = useState([]);
  

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleUpload = (e) => {
    e.preventDefault();
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

   <strong>Product Details</strong>    
   </CCardHeader>
  
    
    <CCardBody>
      <CForm>
        <CFormLabel className='py-2'>Product Name</CFormLabel>
        <CFormInput type="text" className='my-2' placeholder="Name" aria-label="readonly input example" required/>

        <CFormLabel className='py-2'>Product Description</CFormLabel>
        <CFormTextarea className='my-2' placeholder="Descripation" aria-label="readonly input example"></CFormTextarea>

        <CFormLabel className='py-2'>Short Description</CFormLabel>
        <CFormTextarea className='my-2' placeholder="Short Descripation" aria-label="readonly input example"></CFormTextarea>
       
       
        <CFormLabel className='py-2'>Product Image</CFormLabel>
        <CFormInput type="file" className='my-2'  aria-label="readonly input example"/>

        <CFormLabel className='py-2'>Image Animation</CFormLabel>
        <CFormInput type="file" className='my-2'  aria-label="readonly input example"/>

        <CFormLabel className='py-2'>Product Gallary</CFormLabel>
        <CFormInput
          type='file'
          className='my-2'
          multiple
          onChange={handleImageChange}
        />
      <div className="image-preview-container py-2">
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
      </div>

        <div className='d-flex'>
        <div className='col-lg-6'>
        <CFormLabel className='py-2'>Price</CFormLabel>
        <CFormInput type="text" className='my-2' placeholder="Product Price" aria-label="readonly input example"/>
        </div>
      

        <div className='col-lg-6  ms-2'>
        <CFormLabel className='py-2'>MRP</CFormLabel>
        <CFormInput type="text" className='my-2' placeholder="Product MRP" aria-label="readonly input example"/>
        </div>
        </div>


        <CFormLabel  className='py-2'>Select Parent Category</CFormLabel>
        <CFormSelect>
        <option>--Select Parent Category</option>
        <option value="Man's">Man's</option>
        <option value="Women's">Women's</option>
        </CFormSelect>

        <CFormLabel  className='py-2'>Select Product Category</CFormLabel>
        <CFormSelect>
        <option>--Select Product Category--</option>
        <option value="T-Shirt">T-Shirt</option>
        <option value="Shirt">Shirt</option>
        </CFormSelect>

        <div className='d-flex align-items-center'>
        <div className='col-lg-6'>
        <CFormLabel className='py-2'>Manage Stock</CFormLabel>
        <CFormSelect>
        <option>--Select Stock--</option>
        <option value="in-stock">In Stock</option>
        <option value="out-of-stock">Out of Stock</option>
        </CFormSelect>
        </div>
      

        <div className='col-lg-6  ms-2'>
        <CFormLabel className='py-2'>Brand Name</CFormLabel>
        <CFormInput type="text" className='my-2' placeholder="Brand Name" aria-label="readonly input example"/>
        </div>
        </div>


        <div className='d-flex align-items-center'>
        <div className='col-lg-6'>
        <CFormLabel className='py-2'>Size</CFormLabel>
        <CFormSelect>
        <option>--Select Size--</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
        </CFormSelect>
        </div>
      

        <div className='col-lg-6  ms-2'>
        <CFormLabel className='py-2'>Color's</CFormLabel>
        <CFormSelect>
        <option>--Select Size--</option>
        <option value="Red">Red</option>
        <option value="Black">Black</option>
        <option value="Orange">Orange</option>
     
        </CFormSelect>
        </div>
        </div>
   
        <div className='d-flex align-items-center'>
        <CFormLabel className='py-2'>Status &nbsp; :</CFormLabel>
        <div className='d-flex'>
        <CFormCheck  className='ms-3' type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="1" label="Dispaly"/>
        <CFormCheck  className='ms-3' type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="0" label="Hide"/>  
        </div>
        </div>

        <CButton type='submit' color="primary">Add Product</CButton>
        </CForm>
    </CCardBody>
    </CCard>
    </>
  )
}
