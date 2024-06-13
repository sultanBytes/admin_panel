import React from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CFormInput, CFormLabel, CFormCheck, CButton, CFormTextarea, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CImage } from '@coreui/react'
import TruncatedText from './TruncatedText' // Import the TruncatedText component
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function ViewCategory() {
    return (
        <>
            <CCard className="mb-4 lg-12">
                <CCardHeader className='fw-800 fs-4'>
                <strong> View Category</strong>
                </CCardHeader>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Delete <CFormCheck /></CTableHeaderCell>
                                <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Category Name</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableDataCell><CFormCheck /></CTableDataCell>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>Men's</CTableDataCell>

                                <CTableDataCell>
                                    <CImage rounded src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg" width={50} height={50} />
                                </CTableDataCell>

                                <CTableDataCell className='mb-4 discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>

                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="/parentcategory/updatecategory"> <FaRegEdit className='text-warning' /></Link>

                                </CTableDataCell>

                                <CTableDataCell>Display</CTableDataCell>

                            </CTableRow>

                            <CTableRow>
                                <CTableDataCell><CFormCheck /></CTableDataCell>
                                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                <CTableDataCell>Men's</CTableDataCell>

                                <CTableDataCell>
                                    <CImage rounded src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg" width={50} height={50} />
                                </CTableDataCell>

                                <CTableDataCell className='mb-4 discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>

                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="#"> <FaRegEdit className='text-warning' /></Link>

                                </CTableDataCell>

                                <CTableDataCell>Hide</CTableDataCell>

                            </CTableRow>

                            <CTableRow>
                                <CTableDataCell><CFormCheck /></CTableDataCell>
                                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                <CTableDataCell>Men's</CTableDataCell>

                                <CTableDataCell>
                                    <CImage rounded src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg" width={50} height={50} />
                                </CTableDataCell>

                                <CTableDataCell className='mb-4 discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>

                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="#"> <FaRegEdit className='text-warning' /></Link>

                                </CTableDataCell>

                                <CTableDataCell>Display</CTableDataCell>

                            </CTableRow>

                            <CTableRow>
                                <CTableDataCell><CFormCheck /></CTableDataCell>
                                <CTableHeaderCell scope="row">4</CTableHeaderCell>
                                <CTableDataCell>Men's</CTableDataCell>

                                <CTableDataCell>
                                    <CImage rounded src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg" width={50} height={50} />
                                </CTableDataCell>

                                <CTableDataCell className='mb-4 discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>

                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="#"> <FaRegEdit className='text-warning' /></Link>

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
