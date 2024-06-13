import React, { useRef, useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CFormInput, CFormLabel, CFormCheck, CButton, CFormTextarea, CForm } from '@coreui/react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import ImageUploader from './Imageuploader';
import LogoUploader from './LogoUploader';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export default function About() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <>

            <CCard className="mb-4">
                <CCardHeader className='fw-800 fs-4'>

                    <strong>Profile</strong>
                </CCardHeader>



                <CCardBody>
                    <CForm method='Post' encType='multipart/form-data'>
                        <div className='d-flex justify-content-between'>
                            <div className='col-lg-6 col-mb-12'>

                                <CFormLabel className='py-2'>Name</CFormLabel>
                                <CFormInput type="text" className='my-2' Name='name' value='Rajveer Singh' aria-label="readonly input example" />


                                <CFormLabel className='pt-2'>Social Link</CFormLabel>
                                <div className='d-flex align-items-center'><FaFacebookF /><CFormInput type="text" className='m-3' Name='facebook' value='https://www.facebook.com/help/668969529866328' aria-label="readonly input example" /></div>
                                <div className='d-flex align-items-center'><FaInstagram /><CFormInput type="text" className='m-3' Name='instagram' value='https://help.instagram.com/372819389498306' aria-label="readonly input example" /></div>
                                <div className='d-flex align-items-center'><FaYoutube /><CFormInput type="text" className='m-3' Name='youtube' value='Rahttps://learn.jatanshah.com/powerbi-g/?gclid=CjwKCAjwvIWzBhAlEiwAHHWgvYLhUyvdvTfPFEWu8l_PUL0OhUAkeHNuEc-MLpLHFPJ5BG0Z8gizCRoCk3QQAvD_BwE' aria-label="readonly input example" /></div>
                                <div className='d-flex align-items-center'><FaXTwitter /><CFormInput type="text" className='m-3' Name='twitter' value='https://x.com/?lang=en' aria-label="readonly input example" /></div>
                            </div>

                            <div className='col-lg-4 text-center col-mb-12'>
                                <div className='text-center py-3'>
                                    <ImageUploader initialSrc='http://localhost:3000/src/assets/images/avatars/8.jpg' altText='Profile Image' />
                                </div>
                                <CFormLabel>Profile Image</CFormLabel>

                            </div>
                        </div>


                        <CFormLabel>Logo</CFormLabel>

                        <LogoUploader initialSrc='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAGCAMAAAChKK3xAAAAYFBMVEX///8AAADo6Ojz8/PPz8/w8PBDQ0PZ2dng4ODt7e2lpaXBwcFxcXEmJiZAQECzs7NXV1ctLS1kZGQ6Ojp6enq6urpQUFAXFxeCgoKsrKyIiIghISGdnZ0yMjKUlJReXl7lhqZUAAAA00lEQVQYlU2P2ZKFIAxEu9lUQHFBXEa9//+XE65VU8MDqWpyTgLc1A/4d9L41mYLf5n5qYHj9EaK9WZjrYaFagGtVQW1lXxexGchKdoKKq4wNLWvgh3oU+s4XHfJio5pnQOVOAgpXJjBgQvwfETxRD+VaGkZwJhDuaB83jrCx0B20nL16d5B3WzH/F31Gb+g9ZmaTKheDAH9YfiCW6xu7s8pQ22zrbdYZDcmHdg4bwSUJywCzgZ+iqO9kU6T4eQ3TuASbt0WZM5V1RYOBscUi+6xn7+PQgoYY6pUPgAAAABJRU5ErkJggg==' altText='Logo' />



                        <CFormLabel>Sub Logo</CFormLabel>

                        <LogoUploader initialSrc='http://localhost:3000/favicon.ico' altText='Sub Logo' />

                        <CFormLabel className='py-2'>Password</CFormLabel>
                        <div className='my-2' style={{ position: 'relative' }}>
                            <CFormInput
                                type={passwordVisible ? "text" : "password"}
                                name='password'
                                defaultValue='~bQ5;v32(|8H'
                                aria-label="password input"
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                            >
                                {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                            </span>
                        </div>

                        <CButton type='submit' name='save' color="primary">Update</CButton>
                    </CForm>
                </CCardBody>
            </CCard>



            <CCard className="mb-4">
                <CCardHeader className='fw-800 fs-4'>

                    <strong>Email Authentication</strong>
                </CCardHeader>

                <CCardBody>
                    <CForm>
                    <CFormLabel className='py-2'>Email</CFormLabel>
                    <CFormInput type="email" className='my-2' Name='email' value='rajveersingh@gmail.com' aria-label="readonly input example" />

                    <CFormLabel className='py-2'>OTP</CFormLabel>
                    <CFormInput type="text" className='my-2' Name='email' value='' aria-label="readonly input example" />
                

                    <CButton type='submit' name='save' color="primary">Update Email</CButton>
                </CForm>
                </CCardBody>
            </CCard>
        </>
    )
}
