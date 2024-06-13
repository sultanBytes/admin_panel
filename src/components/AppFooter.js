import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
        All Rights Reserved
        </a>
        <span className="ms-1">&copy; 2024 Frank and Oak.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Design By</span>
        <a href="/" target="_blank" rel="noopener noreferrer">
       WsCube Tech
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
