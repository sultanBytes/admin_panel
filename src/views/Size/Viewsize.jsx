import React from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CFormInput, CFormLabel, CFormCheck, CButton, CFormTextarea, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CImage } from '@coreui/react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Viewsize() {
    return (
        <>
            <CCard className="mb-4 lg-12">
                <CCardHeader className='fw-800 fs-4'>
                    <strong> View Product Category</strong>
                </CCardHeader>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Delete <CFormCheck /></CTableHeaderCell>
                                <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Size Name</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableDataCell><CFormCheck /></CTableDataCell>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>S</CTableDataCell>

                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="/size/updatesize"> <FaRegEdit className='text-warning' /></Link>
                                </CTableDataCell>




                                <CTableDataCell>Display</CTableDataCell>

                            </CTableRow>


                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}
