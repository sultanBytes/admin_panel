import React from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CFormInput, CFormLabel, CFormCheck, CButton, CFormTextarea, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CImage } from '@coreui/react'
import TruncatedText from './TruncatedText' // Import the TruncatedText component
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function OurStorys() {
  return (
<>
<>
            <CCard className="mb-4 lg-12">
                <CCardHeader className='fw-800 fs-4'>
                <strong> Our Story's</strong>
                </CCardHeader>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Delete <CFormCheck /></CTableHeaderCell>
                                <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Story Name</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Banner</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          

                            <CTableRow>
                                <CTableDataCell><CFormCheck /></CTableDataCell>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>Who we are</CTableDataCell>

                                <CTableDataCell>
                                    <CImage rounded src="https://www.frankandoak.com/cdn/shop/files/Who_we_are_-_NAV_600x.jpg?v=1712763767" width={50} height={50} />
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CImage rounded src="https://cdn.shopify.com/s/files/1/0553/7100/6130/t/12/assets/ourstorytopv21-1638308615192.jpg?v=1638308650" width={100} height={50} />
                                </CTableDataCell>

                                <CTableDataCell className='mb-4 discontent'>
                                    <TruncatedText text="We believe in considering the impact of the choices we make every day and view 
                                    those choices as an opportunity to better ourselves. Our purpose is to Inspire a Better way of Living 
                                    by creating conscious products that last through time. By marrying innovation with eco-friendly processes, 
                                    we strive to help shape a cleaner,healthier, and more mindful world where human progress is in harmony with 
                                    the planet's well-being." />
                                </CTableDataCell>

                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="/story/updateview"> <FaRegEdit className='text-warning' /></Link>

                                </CTableDataCell>

                                <CTableDataCell>Hide</CTableDataCell>

                            </CTableRow>


                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
        </>
  )
}
