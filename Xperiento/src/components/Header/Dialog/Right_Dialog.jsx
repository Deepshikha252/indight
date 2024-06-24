"use client"
// import React from 'react'
import { Fragment, useContext, useState } from "react"
import styles from "./Right.module.scss"
import PropTypes from "prop-types"
import { UserContext } from "@/store/UserContext"
import { useRouter } from "next/navigation"

const CustomRightDynamicDialog = ({ modelHeight, modelWidth }) => {
    modelHeight = modelHeight || "max-content"
    modelWidth = modelWidth || "max-content"
    const { sign_out_handler, auth } = useContext(UserContext)
    const router = useRouter()
    const [checked, setChecked] = useState(false)

if(!auth){
    return <></>
}

    const toggleMenu = () => {
        setChecked(pre => !pre)
    }
    const linkAction = (link) => {
        router.push(link, { scroll: false })
        setTimeout(() => {
            setChecked(false)
        }, 200);
    }

    const navigations = [
        { link: '/dashboard', label: 'Dashboard' },
        { link: '/dashboard/my_insights', label: 'My Insights' },
        { link: '/dashboard/my_actions_list', label: 'My List of Action' },
        { link: '/dashboard/implemented', label: 'Implemented' },
        { link: '/dashboard/profile', label: 'Profile' },
        { link: '/dashboard/create', label: 'Create Insight' },
    ];
    return (
        <Fragment>
            <div>
                <div style={{ "--transform-origin": `right top` }}
                    className={`${styles.dialogMenu} ${checked ? styles.active : styles.close}`}>
                    <label onClick={toggleMenu}
                        className={styles.label} id="btn">
                        <p></p>
                        <p></p>
                        <p></p>
                    </label>
                    <label onClick={toggleMenu} className={`${styles.closeLayer} ${styles.label}`}></label>
                    <div
                        className={styles.menuBox}
                        style={{ "--pop-up-menu-height": modelHeight, "--pop-up-menu-width": modelWidth }}
                    >
                        <ul className={styles.lists}>
                            {navigations.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={() => linkAction(button.link)}
                                    className={`${styles.item} ${styles.button}`}
                                >
                                    {button.label}
                                </button>
                            ))}
                            {auth ?
                                <button onClick={() => {
                                    sign_out_handler()
                                    setTimeout(() => {
                                        setChecked(false)
                                    }, 200);
                                }} className={`${styles.item} ${styles.button}`}>Sign Out</button> :
                                <button onClick={() => linkAction("/")} className={`${styles.item} ${styles.button}`}>Sign In</button>}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

CustomRightDynamicDialog.props = {
    unqiueKey: PropTypes.string.isRequired,

}
export default CustomRightDynamicDialog