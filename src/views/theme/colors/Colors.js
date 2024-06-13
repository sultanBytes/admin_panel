import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { CRow, CCol, CCard, CCardHeader, CCardBody, CFormInput, CFormLabel, CFormCheck, CButton, CForm } from '@coreui/react';

const Colors = () => {
  const [color, setColor] = useState('#fff');
  const [colorName, setColorName] = useState('');
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleAddColor = () => {
    if (colorName.trim() !== '' && selectedColor) {
      const newColor = { name: colorName, hex: selectedColor.hex };
      // Simulate sending the color to the backend
      setColors([...colors, newColor]);
      setColorName('');
      setSelectedColor(null);
    }
  };

  const handleSelectColor = () => {
    setSelectedColor({ hex: color, name: colorName });
  };

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Add colors
        </CCardHeader>
        <CCardBody>
          <CForm method='post' encType='multipart/form-data'>
          <CFormLabel className='py-2'>Color Name</CFormLabel>
          <CFormInput
            type="text"
            className='py-2'
            placeholder="Color Name"
            value={colorName}
            name='color-name'
            onChange={(e) => setColorName(e.target.value)}
          />
          <CFormLabel className='py-3'>Color Picker</CFormLabel>
          <ChromePicker color={color} name='color-picker' onChangeComplete={handleChangeComplete} />
          <CButton color="primary" className='mt-3' onClick={handleSelectColor}>
            Select Color
          </CButton>
          {selectedColor && (
            <div className='mt-3'>
              <CFormCheck className='me-2' />
              <span className='mx-2' style={{ backgroundColor: selectedColor.hex, padding: '0.5rem', borderRadius: '4px', color: '#fff' }}>
                {selectedColor.name}
              </span>
              <CButton type='submit' name='save' color="primary" className='ms-3' onClick={handleAddColor}>
                Add Color
              </CButton>
            </div>
          )}
        </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Colors;
