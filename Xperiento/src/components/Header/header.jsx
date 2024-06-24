import React from 'react'
import "./header.scss"
import CustomRightDynamicDialog from './Dialog/Right_Dialog'
import Link from 'next/link'
const Header = () => {
    
    return (
        <header className='header'>
            <div className="logo">
                <Link href="/">
                    <h1>Xperiento</h1>
                </Link>
            </div>
            <div >
                <CustomRightDynamicDialog unqiueKey={"_header"} />
            </div>
        </header>
    )
}

export default Header