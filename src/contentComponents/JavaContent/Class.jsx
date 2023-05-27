import React from 'react'
import assignmentOne from '../JavaContent/Assignmets/assignmentOne.pdf'
import { useState } from 'react'

export default function Topics(props) {

    return (
        <div className='allTopics'>
            <div className="topicList">
                <ul>
                    <a href="#creatingObject">Creating Object</a>
                    <a href="#constuctor">Constructor</a>
                    <a href="#nestedInnerClass">Nested and Inner Class</a>
                    <a href="#this">"this Keyword"</a>
                    <a href="#inheritance">Inheritance</a>
                    <a href="#extends">Extends Keyword</a>
                    <a href="#overloading">Overloading</a>
                    <a href="#overriding">Overriding</a>
                    <a href="#overriding">Package</a>
                    <a href="#interface">Interface</a>
                </ul>
            </div>

            <div className="contentSection">
                <div id="creatingObject">
                    <h2>Creating Objects</h2>

                </div>
                <div id="constuctor">
                    <h2>Constructors</h2>
                </div>
                <div id="nestedInnerClass">
                    <h2>Nested and Inner Class</h2>
                </div>
                <div id="this">
                    <h2>This Keyword</h2>
                </div>
                <div id="inheritance">
                    <h2>Inheritance</h2>
                </div>
                <div id="extends">
                    <h2>Extends</h2>
                </div>
                <div id="overloading">
                    <h2>Overloading</h2>
                </div>
                <div id="overriding">
                    <h2>Overriding</h2>
                </div>
                <div id="interface">
                    <h2>Interface</h2>
                </div>

                {/* This is Fucking Assignment Section  hai Guys */}

                <div id="assignments">
                    <h2>All The Assignments Exercise Are Here</h2>
                    <div className="assignments">
                        <h2>Assignmet One</h2>
                        <iframe src="https://drive.google.com/file/d/1XDlqATDwI3LJcNwmXi7aZGWJANa1yodc/preview" frameborder="none"></iframe>
                    </div>
                    <div className="assignments">
                        <h2>Assignmet Two</h2>
                        <iframe src="https://drive.google.com/file/d/1XDlqATDwI3LJcNwmXi7aZGWJANa1yodc/preview" frameborder="none"></iframe>
                    </div>
                    <div className="assignments">
                        <h2>Assignmet Three</h2>
                        <iframe src="https://drive.google.com/file/d/1XDlqATDwI3LJcNwmXi7aZGWJANa1yodc/preview" frameborder="0"></iframe>
                    </div>
                </div>


                {/* This is Fucking Question Section Hai Guys */}

                <div id="questions">
                    <ul>
                        <h3>Assignments One Questions</h3>
                        <li>Define Control Statement. Explain different types of control statements with examples.</li>
                        <li>  Define operators. Explain the different types of operater used in java with suitable examples. </li>
                        <li>  Define identifires. What are the different rule to declare identifiers. </li>
                        <li>  Different between procedure oriented vS 00P. </li>
                        <li>  write a program in java to find the fraction of given integer. </li>
                    </ul>
                    <ul>
                        <h3>Assignments Two Question</h3>
                        <li>Define Control Statement. Explain different types of control statements with examples.</li>
                        <li>  Define operators. Explain the different types of operater used in java with suitable examples. </li>
                        <li>  Define identifires. What are the different rule to declare identifiers. </li>
                        <li>  Different between procedure oriented vS 00P. </li>
                        <li>  write a program in java to find the fraction of given integer. </li>
                    </ul>
                    <ul>
                        <h3>Assignments Three Questions</h3>
                        <li>Define Control Statement. Explain different types of control statements with examples.</li>
                        <li>  Define operators. Explain the different types of operater used in java with suitable examples. </li>
                        <li>  Define identifires. What are the different rule to declare identifiers. </li>
                        <li>  Different between procedure oriented vS 00P. </li>
                        <li>  write a program in java to find the fraction of given integer. </li>
                    </ul>

                </div>
            </div>




            <div className="questionSection">
                <ul>
                    <a href="#assignments">Assignments</a>
                    <a href="#questions">Questions</a>
                </ul>
            </div>
        </div >
    )
}
