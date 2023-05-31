import React from 'react'

export default function SubNavbar(props) {
    return (
        <div >
            <div className="subNavbar">
                <div className="header">
                    <a href={"#" + props.title1Href}>{props.title1}</a>
                    <a href={"#" + props.title2Href}>{props.title2}</a>
                    <a href={"#" + props.title3Href}>{props.title3}</a>
                    <a href={"#" + props.title4Href}>{props.title4}</a>
                    <a href={"#" + props.title5Href}>{props.title5}</a>
                    <a href={"#" + props.title6Href}>{props.title6}</a>
                    <a href={"#" + props.title7Href}>{props.title7}</a>
                    <a href={"#" + props.title8Href}>{props.title8}</a>
                    <a href={"#" + props.title9Href}>{props.title9}</a>
                    <a href={"#" + props.title10Href}>{props.title10}</a>
                </div>
            </div>
        </div>
    )
}
