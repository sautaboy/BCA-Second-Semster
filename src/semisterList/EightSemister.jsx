import React from 'react'
import Navbar from '../navbarComponents/Navbar'
import Pending from '../extraComponents/Pending'


export default function EightSemister() {
    return (
        <div>
            <Navbar
                navListOne="Operation Search"
                navListOneHref="operationSearch"
            />
            <Pending/>
        </div>
    )
}
