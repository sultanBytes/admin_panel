import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody,  CFormCheck, CButton, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CImage, CModalTitle, CModalHeader, CModalBody, CModal } from '@coreui/react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function SliderView() {
    const [visibleXL, setVisibleXL] = useState(false);
  return (
    <CCard className="mb-4 lg-12">
            <CCardHeader className='fw-800 fs-4'>
                <strong>Order's List</strong>
            </CCardHeader>
            <CCardBody>
                <CTable>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col"><CButton type='submit' color="primary"  className='me-2'>Delete</CButton><CFormCheck /></CTableHeaderCell>
                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Slider Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Sub Headeing</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Slider Image</CTableHeaderCell>    
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>             
                            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableDataCell><CFormCheck /></CTableDataCell>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>Main Image</CTableDataCell>
                            <CTableDataCell>New summer must-haves just dropped.</CTableDataCell>
                            <CTableDataCell> free shipping on orders over $79</CTableDataCell>
                            <CTableDataCell>
                            <CImage rounded src="https://cdn.shopify.com/s/files/1/0553/7100/6130/t/12/assets/ourstorytopv21-1638308615192.jpg?v=1638308650" width={150} height={50} onClick={() => setVisibleXL(!visibleXL)} />
                            </CTableDataCell>
                            <CModal
                                    size="xl"
                                    visible={visibleXL}
                                    onClose={() => setVisibleXL(false)}
                                    aria-labelledby="OptionalSizesExample1"
                                    className='model-items'
                                >
                                    <CModalHeader>
                                        <CModalTitle id="OptionalSizesExample1">Slider Images</CModalTitle>
                                    </CModalHeader>

                                    <CModalBody>
                                      
                                   
                                    <div className='col-lg-12 justify-content-between border'>
                                    <CImage className='img-fluid m-2' src='https://cdn.shopify.com/s/files/1/0553/7100/6130/t/12/assets/ourstorytopv21-1638308615192.jpg?v=1638308650' width={450} height={200}/>
                                    <CImage className='img-fluid m-2' src='https://cdn.shopify.com/s/files/1/0553/7100/6130/t/12/assets/sustainabletopv21-1638376543970.jpg?v=1638376593' width={450} height={200}/>
                                    <CImage className='img-fluid m-2' src='https://cdn.shopify.com/s/files/1/0553/7100/6130/t/12/assets/designtopv21-1638383008899.png?v=1638383025' width={450} height={200}/>
                                    <CImage className='img-fluid m-2' src='https://cdn.shopify.com/s/files/1/0553/7100/6130/t/12/assets/fabricstopv21-1638383604562.jpg?v=1638383615' width={450} height={200}/>
                                     </div>
                          

                                    </CModalBody>
                                </CModal>

                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="/slider/updateslider"> <FaRegEdit className='text-warning' /></Link>

                                </CTableDataCell>

                                
                            <CTableDataCell>Display</CTableDataCell>

                        </CTableRow>





                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
  )
}
