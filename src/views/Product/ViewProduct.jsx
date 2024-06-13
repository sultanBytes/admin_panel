import React from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CFormInput, CFormLabel, CFormCheck, CButton, CFormTextarea, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CImage, CModalTitle, CModalHeader, CModalBody, CModal } from '@coreui/react'
import TruncatedText from './TruncatedText' // Import the TruncatedText component
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react'


export default function ViewProduct() {
    const [visibleXL, setVisibleXL] = useState(false);
    return (
        <>
            <CCard className="mb-4 lg-12">
                <CCardHeader className='fw-800 fs-4'>
                    <strong>Product Itmes</strong>
                </CCardHeader>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Delete <CFormCheck /></CTableHeaderCell>
                                <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Short Description</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Thumbnails</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableDataCell><CFormCheck /></CTableDataCell>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>Men's</CTableDataCell>

                                <CTableDataCell className='mb-4 product-discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>


                                <CTableDataCell className='mb-4 product-discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>


                                <CTableDataCell>
                                    <CImage rounded src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg" width={50} height={50} onClick={() => setVisibleXL(!visibleXL)} />
                                </CTableDataCell>

                                <CModal
                                    size="xl"
                                    visible={visibleXL}
                                    onClose={() => setVisibleXL(false)}
                                    aria-labelledby="OptionalSizesExample1"
                                    className='model-items'
                                >
                                    <CModalHeader>
                                        <CModalTitle id="OptionalSizesExample1">Product Image's & Price</CModalTitle>
                                    </CModalHeader>

                                    <CModalBody>
                                       <div className='d-flex justify-content-between'>
                                    <div className='col-lg-2 border'>
                                        <CImage className='img-fluid' src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg'/>
                                    </div>
                                    <div className='col-lg-6 justify-content-between border'>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/67b91a61-978b-4342-aba4-0e6498f1d83b1695179114307StormbornMenBrownPrintedPoloCollarPocketsT-shirt2.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/ab38f009-1530-4eab-b76c-273ee950d1461695179114272StormbornMenBrownPrintedPoloCollarPocketsT-shirt3.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/70f306a6-3fdd-4e99-bd08-10d1767afcae1695179114363StormbornMenBrownPrintedPoloCollarPocketsT-shirt4.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/bda9f2be-2a7d-477e-9e08-8956caf8fc051695179114345StormbornMenBrownPrintedPoloCollarPocketsT-shirt6.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072102/2023/9/20/31e32c09-1e64-413a-a95e-41cd7a832abe1695178226264StormbornMenBrownPrintedHighNeckAppliqueT-shirt3.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072102/2023/9/20/d5959229-9618-477b-9055-98c40ce5d3f51695178226248StormbornMenBrownPrintedHighNeckAppliqueT-shirt4.jpg' width={100} height={100}/>
                                    </div>


                                    <div className='col-lg-3 border'>
                                        <div className='text-center'><strong>Product Details</strong></div>
                                  
                                   <div>
                                    <p className='m-2'><strong>Price :</strong><span className='ms-3'>₹ 1500</span></p>
                                    <p className='m-2'><strong>MRP :</strong><span className='ms-3'>₹ 3000</span></p>
                                    <p className='m-2'><strong>Manage Stock :</strong><span className='ms-3'>In Stock</span></p>
                                    <p className='m-2'><strong>Brand Name :</strong><span className='ms-3'>Lev's</span></p>
                                    <p className='m-2'><strong>Size :</strong><span className='ms-3'>Xl</span></p>
                                    <p className='m-2'><strong>Color's :</strong><span className='ms-3'>Red</span></p>
                                   </div>
                                    </div>


                                    </div>

                                    </CModalBody>
                                </CModal>

                                
                                
                            



                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="/product/updateproduct"> <FaRegEdit className='text-warning' /></Link>

                                </CTableDataCell>

                                <CTableDataCell>Display</CTableDataCell>

                            </CTableRow>

                            <CTableRow>
                                <CTableDataCell><CFormCheck /></CTableDataCell>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>Men's</CTableDataCell>

                                <CTableDataCell className='mb-4 product-discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>


                                <CTableDataCell className='mb-4 product-discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>


                                <CTableDataCell>
                                    <CImage rounded src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg" width={50} height={50} onClick={() => setVisibleXL(!visibleXL)} />
                                </CTableDataCell>

                                <CModal
                                    size="xl"
                                    visible={visibleXL}
                                    onClose={() => setVisibleXL(false)}
                                    aria-labelledby="OptionalSizesExample1"
                                    className='model-items'
                                >
                                    <CModalHeader>
                                        <CModalTitle id="OptionalSizesExample1">Product Image's & Price</CModalTitle>
                                    </CModalHeader>

                                    <CModalBody>
                                       <div className='d-flex justify-content-between'>
                                    <div className='col-lg-2 border'>
                                        <CImage className='img-fluid' src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg'/>
                                    </div>
                                    <div className='col-lg-6 justify-content-between border'>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/67b91a61-978b-4342-aba4-0e6498f1d83b1695179114307StormbornMenBrownPrintedPoloCollarPocketsT-shirt2.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/ab38f009-1530-4eab-b76c-273ee950d1461695179114272StormbornMenBrownPrintedPoloCollarPocketsT-shirt3.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/70f306a6-3fdd-4e99-bd08-10d1767afcae1695179114363StormbornMenBrownPrintedPoloCollarPocketsT-shirt4.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/bda9f2be-2a7d-477e-9e08-8956caf8fc051695179114345StormbornMenBrownPrintedPoloCollarPocketsT-shirt6.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072102/2023/9/20/31e32c09-1e64-413a-a95e-41cd7a832abe1695178226264StormbornMenBrownPrintedHighNeckAppliqueT-shirt3.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072102/2023/9/20/d5959229-9618-477b-9055-98c40ce5d3f51695178226248StormbornMenBrownPrintedHighNeckAppliqueT-shirt4.jpg' width={100} height={100}/>
                                    </div>


                                    <div className='col-lg-3 border'>
                                        <div className='text-center'><strong>Product Details</strong></div>
                                  
                                   <div>
                                    <p className='m-2'><strong>Price :</strong><span className='ms-3'>₹ 1500</span></p>
                                    <p className='m-2'><strong>MRP :</strong><span className='ms-3'>₹ 3000</span></p>
                                    <p className='m-2'><strong>Manage Stock :</strong><span className='ms-3'>In Stock</span></p>
                                    <p className='m-2'><strong>Brand Name :</strong><span className='ms-3'>Lev's</span></p>
                                    <p className='m-2'><strong>Size :</strong><span className='ms-3'>Xl</span></p>
                                    <p className='m-2'><strong>Color's :</strong><span className='ms-3'>Red</span></p>
                                   </div>
                                    </div>


                                    </div>

                                    </CModalBody>
                                </CModal>

                                
                                
                            



                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="/parentcategoy/updatecategory"> <FaRegEdit className='text-warning' /></Link>

                                </CTableDataCell>

                                <CTableDataCell>Display</CTableDataCell>

                            </CTableRow>


                            <CTableRow>
                                <CTableDataCell><CFormCheck /></CTableDataCell>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>Men's</CTableDataCell>

                                <CTableDataCell className='mb-4 product-discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>


                                <CTableDataCell className='mb-4 product-discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>


                                <CTableDataCell>
                                    <CImage rounded src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg" width={50} height={50} onClick={() => setVisibleXL(!visibleXL)} />
                                </CTableDataCell>

                                <CModal
                                    size="xl"
                                    visible={visibleXL}
                                    onClose={() => setVisibleXL(false)}
                                    aria-labelledby="OptionalSizesExample1"
                                    className='model-items'
                                >
                                    <CModalHeader>
                                        <CModalTitle id="OptionalSizesExample1">Product Image's & Price</CModalTitle>
                                    </CModalHeader>

                                    <CModalBody>
                                       <div className='d-flex justify-content-between'>
                                    <div className='col-lg-2 border'>
                                        <CImage className='img-fluid' src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg'/>
                                    </div>
                                    <div className='col-lg-6 justify-content-between border'>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/67b91a61-978b-4342-aba4-0e6498f1d83b1695179114307StormbornMenBrownPrintedPoloCollarPocketsT-shirt2.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/ab38f009-1530-4eab-b76c-273ee950d1461695179114272StormbornMenBrownPrintedPoloCollarPocketsT-shirt3.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/70f306a6-3fdd-4e99-bd08-10d1767afcae1695179114363StormbornMenBrownPrintedPoloCollarPocketsT-shirt4.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/bda9f2be-2a7d-477e-9e08-8956caf8fc051695179114345StormbornMenBrownPrintedPoloCollarPocketsT-shirt6.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072102/2023/9/20/31e32c09-1e64-413a-a95e-41cd7a832abe1695178226264StormbornMenBrownPrintedHighNeckAppliqueT-shirt3.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072102/2023/9/20/d5959229-9618-477b-9055-98c40ce5d3f51695178226248StormbornMenBrownPrintedHighNeckAppliqueT-shirt4.jpg' width={100} height={100}/>
                                    </div>


                                    <div className='col-lg-3 border'>
                                        <div className='text-center'><strong>Product Details</strong></div>
                                  
                                   <div>
                                    <p className='m-2'><strong>Price :</strong><span className='ms-3'>₹ 1500</span></p>
                                    <p className='m-2'><strong>MRP :</strong><span className='ms-3'>₹ 3000</span></p>
                                    <p className='m-2'><strong>Manage Stock :</strong><span className='ms-3'>In Stock</span></p>
                                    <p className='m-2'><strong>Brand Name :</strong><span className='ms-3'>Lev's</span></p>
                                    <p className='m-2'><strong>Size :</strong><span className='ms-3'>Xl</span></p>
                                    <p className='m-2'><strong>Color's :</strong><span className='ms-3'>Red</span></p>
                                   </div>
                                    </div>


                                    </div>

                                    </CModalBody>
                                </CModal>

                                
                                
                            



                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="/parentcategoy/updatecategory"> <FaRegEdit className='text-warning' /></Link>

                                </CTableDataCell>

                                <CTableDataCell>Display</CTableDataCell>

                            </CTableRow>


                            <CTableRow>
                                <CTableDataCell><CFormCheck /></CTableDataCell>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>Men's</CTableDataCell>

                                <CTableDataCell className='mb-4 product-discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>


                                <CTableDataCell className='mb-4 product-discontent'>
                                    <TruncatedText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                                </CTableDataCell>


                                <CTableDataCell>
                                    <CImage rounded src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg" width={50} height={50} onClick={() => setVisibleXL(!visibleXL)} />
                                </CTableDataCell>

                                <CModal
                                    size="xl"
                                    visible={visibleXL}
                                    onClose={() => setVisibleXL(false)}
                                    aria-labelledby="OptionalSizesExample1"
                                    className='model-items'
                                >
                                    <CModalHeader>
                                        <CModalTitle id="OptionalSizesExample1">Product Image's & Price</CModalTitle>
                                    </CModalHeader>

                                    <CModalBody>
                                       <div className='d-flex justify-content-between'>
                                    <div className='col-lg-2 border'>
                                        <CImage className='img-fluid' src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg'/>
                                    </div>
                                    <div className='col-lg-6 justify-content-between border'>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/67b91a61-978b-4342-aba4-0e6498f1d83b1695179114307StormbornMenBrownPrintedPoloCollarPocketsT-shirt2.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/ab38f009-1530-4eab-b76c-273ee950d1461695179114272StormbornMenBrownPrintedPoloCollarPocketsT-shirt3.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/70f306a6-3fdd-4e99-bd08-10d1767afcae1695179114363StormbornMenBrownPrintedPoloCollarPocketsT-shirt4.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072178/2023/9/20/bda9f2be-2a7d-477e-9e08-8956caf8fc051695179114345StormbornMenBrownPrintedPoloCollarPocketsT-shirt6.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072102/2023/9/20/31e32c09-1e64-413a-a95e-41cd7a832abe1695178226264StormbornMenBrownPrintedHighNeckAppliqueT-shirt3.jpg' width={100} height={100}/>
                                    <CImage className='img-fluid m-2' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072102/2023/9/20/d5959229-9618-477b-9055-98c40ce5d3f51695178226248StormbornMenBrownPrintedHighNeckAppliqueT-shirt4.jpg' width={100} height={100}/>
                                    </div>


                                    <div className='col-lg-3 border'>
                                        <div className='text-center'><strong>Product Details</strong></div>
                                  
                                   <div>
                                    <p className='m-2'><strong>Price :</strong><span className='ms-3'>₹ 1500</span></p>
                                    <p className='m-2'><strong>MRP :</strong><span className='ms-3'>₹ 3000</span></p>
                                    <p className='m-2'><strong>Manage Stock :</strong><span className='ms-3'>In Stock</span></p>
                                    <p className='m-2'><strong>Brand Name :</strong><span className='ms-3'>Lev's</span></p>
                                    <p className='m-2'><strong>Size :</strong><span className='ms-3'>Xl</span></p>
                                    <p className='m-2'><strong>Color's :</strong><span className='ms-3'>Red</span></p>
                                   </div>
                                    </div>


                                    </div>

                                    </CModalBody>
                                </CModal>

                                
                                
                            



                                <CTableDataCell>
                                    <MdDelete className='text-danger' /> | &nbsp;

                                    <Link to="/parentcategoy/updatecategory"> <FaRegEdit className='text-warning' /></Link>

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
