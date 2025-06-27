import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    // FaBriefcase,
    FaGraduationCap,
    // FaCode,
    FaCode,
} from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'

// import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi'



export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav_icon' />,
        path: '/',
    },

    {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav_icon' />,
        path: '/about',
    },

    {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav_icon' />,
        path: '/works',
    },

    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav_icon' />,
        path: '/contact'
    },

]

export const personalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Sarath ',
    },


    {
        id: 2,
        title: 'Last Name : ',
        description: 'Kumar R',
    },


    {
        id: 3,
        title: 'Age : ',
        description: '27 Years',
    },

    {
        id: 4,
        title: 'Nationality : ',
        description: 'Indian',
    },

    {
        id: 5,
        title: 'Freelance : ',
        description: 'Available',
    },

    {
        id: 6,
        title: 'Address : ',
        description: 'Sopanam(Athukkad),Kadakkad,Pandalam P.O,Pathanamthitta Kerala',
    },

    {
        id: 7,
        title: 'Phone No. : ',
        description: '+91-8281822573 , +91-8157952857',
    },

    {
        id: 8,
        title: 'Email : ',
        description: 'sarathkumarr154@gmail.com',
    },

    {
        id: 9,
        title: 'LinkedIn : ',
        description: 'www.linkedin.com/in/sarath-kumar-r-undefined-763ab4358',
    },

    {
        id: 10,
        title: 'Language : ',
        description: 'Malayalam,Hindi,Tamil,English',
    },
]

export const stats = [
    {
        id: 1,
        no: 'Fresher',
        title: 'Years of <br /> Experience',
    },

    {
        id: 2,
        no: '1',
        title: 'Completed  <br /> Projects',
    },
]

export const resume = [
    {
        id: 1,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2016-2018',
        title: 'Bachelor of Arts-Hindi Language and Literature <br><span>Kerala University </span>',
        description: 'N.S.S College , Pandalam',
    },

    {
        id: 2,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2013-15',
        title: 'Higher Secondary (11th & 12th) <br><span>Central Board Of Secondary Education  </span>',
        description: 'Kendriya Vidyalaya , Adoor',
    },

    
]

export const skills = [
    {
        id: 1,
        title: 'SQL',
        percentage: '72',
    },

    {
        id: 2,
        title: 'HTML',
        percentage: '85',
    },

    {
        id: 3,
        title: 'CSS',
        percentage: '80',
    },

    {
        id: 4,
        title: 'JavaScript',
        percentage: '60',
    },

    {
        id: 5,
        title: 'Bootstrap',
        percentage: '90',
    },

    {
        id: 6,
        title: 'React.js',
        percentage: '37',
    },

    {
        id: 7,
        title: 'PHP',
        percentage: '50',
    },

    {
        id: 8,
        title: 'JQuery',
        percentage: '15',
    },

]

export const portfolio = [
    {
        id: 1,
        img: 'src/assets/individual-doing-sport-healthy-lifestyle.jpg',
        title: 'FITCLUB',
        details: [
            {
                icon: <FiFileText />,
                title:'Project : ',
                desc:'Website task',
            },
            {
                icon: <FaCode />,
                title:'Language : ',
                desc: 'HTML,CSS,BOOTSTRAP'
            }
        ]

    }
]

