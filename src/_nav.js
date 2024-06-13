import React from 'react'
import CIcon from '@coreui/icons-react'

import {
  cilCalculator,
  cilChartPie,
  cilDescription,
  cilDrop,
  cilSpeedometer,
  cilStar,
  cilChildFriendly,
  cilAlignLeft,
  cilBasket,
  cilTouchApp,
  cilSettings,
  cilHistory,
  cilColorBorder,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [



  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Profile',
    to: '/profile',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },


  
  {
    component: CNavTitle,
    name: 'Ecommerce Components',
  },

  {
    component: CNavGroup,
    name: 'Size',
    to: '#',
    icon: <CIcon icon={cilTouchApp} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
    name: 'Size Details',
    to: '/size/addsize',
  
      },
      {
        component: CNavItem,
        name: 'View Size',
        to: '/size/viewsize',
      },
    
     
    ],
  },

  {
    component: CNavGroup,
    name: 'Parent Category',
    to: '#',
    icon: <CIcon icon={cilAlignLeft} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
    name: 'Add Category',
    to: '/parentcategory/addcategory',
  
      },
      {
        component: CNavItem,
        name: 'View Category',
        to: '/parentcategory/viewcategory',
      },
    
      
     
    ],
  },

  

  {
    component: CNavGroup,
    name: 'Product Category',
    to: '#',
    icon: <CIcon icon={cilChildFriendly} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Product Category',
        to: '/productcategory/addcategory',
      },
      {
        component: CNavItem,
        name: 'View Product Category',
        to: '/productcategory/viewcategory',
      },
    
     
    ],
  },

  {
    component: CNavGroup,
    name: 'Product',
    to: '#',
    icon: <CIcon icon={cilBasket} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Product Details',
        to: '/product/addproduct',
      },
      {
        component: CNavItem,
        name: 'Product Items',
        to: '/product/viewproduct',
      },
    
     
    ],
  },



  {
    component: CNavGroup,
    name: 'Story',
    to: '#',
    icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Story Details',
        to: 'story/storydetails',
      },
      {
        component: CNavItem,
        name: 'Story View',
        to: '/story/storyview',
      },
    
     
    ],
  },

  {
    component: CNavItem,
    name: 'Orders',
    to: '/orders',
    icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'Slider',
    to: '#',
    icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Slider Details',
        to: '/slider/sliderdetails',
      },
      {
        component: CNavItem,
        name: 'Slider View',
        to: '/slider/viewslider',
      },
    
     
    ],
  },

 
  
  
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
 
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  {
    component: CNavItem,
    name: 'Terms & Conditions',
    href: '/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
