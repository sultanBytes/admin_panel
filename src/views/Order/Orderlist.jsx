import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CFormInput, CFormLabel, CFormCheck, CButton, CFormTextarea, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CImage, CModalTitle, CModalHeader, CModalBody, CModal, CFormSelect } from '@coreui/react'
import TruncatedText from './TruncatedText' // Import the TruncatedText component


export default function Orderlist() {
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
                            <CTableHeaderCell scope="col">Order Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Product Id</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableDataCell><CFormCheck /></CTableDataCell>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>Men's</CTableDataCell>
                            <CTableDataCell>2</CTableDataCell>

                            <CTableDataCell>
                                <CImage rounded src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg" width={50} height={50} />
                            </CTableDataCell>

                            <CTableDataCell className='mb-4 order-dis'>
                                <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                            </CTableDataCell>
                            <CTableDataCell>1</CTableDataCell>
                            <CTableDataCell>₹ 1550</CTableDataCell>

                          
                           

                            <CTableDataCell className='order-status' onClick={() => setVisibleXL(!visibleXL)}>Processing..</CTableDataCell>
                            <CModal
                                size="xl"
                                visible={visibleXL}
                                onClose={() => setVisibleXL(false)}
                                aria-labelledby="OptionalSizesExample1"
                                className='model-items'
                            >
                                <CModalHeader>
                                    <CModalTitle id="OptionalSizesExample1">Product Status</CModalTitle>
                                </CModalHeader>

                                <CModalBody>
                                    <CFormLabel className='py-2'>Manage Status</CFormLabel>
                                    <CFormSelect>
                                        <option>--Select Status--</option>
                                        <option value="in-stock">Processing..</option>
                                        <option value="out-of-stock">On Hold</option>
                                        <option value="out-of-stock">Out of Delevery</option>
                                        <option value="out-of-stock">Delever Order</option>
                                    </CFormSelect>

                                    <CButton type='sumbit' name='save' className='my-5' color="primary">Update</CButton>
                                </CModalBody>
                            </CModal>


                        </CTableRow>





                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
    )
}
