import React, { useState } from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilEnvelopeOpen} from '@coreui/icons'
import { FaKey } from "react-icons/fa";


export default function Forget() {
    const [otp, setOtp] = useState("");

    const handleOtpChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 6) {
            setOtp(value);
        }
    };
    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={5}>
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <CForm>
                                        <h2 className="text-centermb-4">Forgot password</h2>

                                        <CInputGroup className="mb-3">
                                            <CInputGroupText>
                                                <CIcon icon={cilEnvelopeOpen} />
                                            </CInputGroupText>
                                            <CFormInput type='email' placeholder="email" name='email' value='' autoComplete="newpassword" />
                                        </CInputGroup>

                                        <CInputGroup className="mb-3">
                                            <CInputGroupText>
                                                <CIcon icon={cilLockLocked} />
                                            </CInputGroupText>
                                            <CFormInput type='password' placeholder="newpassword" name='newpassword' autoComplete="newpassword" />
                                        </CInputGroup>

                                        <CInputGroup className="mb-4">
                                            <CInputGroupText>
                                                <CIcon icon={cilLockLocked} />
                                            </CInputGroupText>
                                            <CFormInput
                                                type="Confirm password"
                                                placeholder="Confirm Password"
                                                name='confirmpassword'
                                                autoComplete="current-password"
                                            />


                                        </CInputGroup>

                                        <CInputGroup className="mb-4">
                                            <CInputGroupText>
                                                <FaKey />
                                            </CInputGroupText>
                                            <CFormInput
                                                type="text"
                                                placeholder="OTP"
                                                value={otp}
                                                name='otp'
                                                onChange={handleOtpChange}
                                                autoComplete="otp"
                                            />
                                        </CInputGroup>

                                        <CRow>
                                            <CCol xs={6}>
                                                <CButton type='submit' name='save' color="primary" className="px-4">
                                                    Next
                                                </CButton>
                                            </CCol>

                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>

                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}
