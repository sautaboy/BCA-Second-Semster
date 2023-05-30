import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Topics(props) {
    return (
        <div className='allTopics'>
            <div className="topicList">
                <ul>
                    <a href={"#" + props.topicListAhref}>{props.topicListA}</a>
                    <a href={"#" + props.topicListBhref}>{props.topicListB}</a>
                    <a href={"#" + props.topicListChref}>{props.topicListC}</a>
                    <a href={"#" + props.topicListDhref}>{props.topicListD}</a>
                    <a href={"#" + props.topicListEhref}>{props.topicListE}</a>
                    <a href={"#" + props.topicListFhref}>{props.topicListF}</a>
                    <a href={"#" + props.topicListGhref}>{props.topicListG}</a>
                    <a href={"#" + props.topicListHhref}>{props.topicListH}</a>
                    <a href={"#" + props.topicListIhref}>{props.topicListI}</a>
                    <a href={"#" + props.topicListJhref}>{props.topicListJ}</a>

                    {/* Short Curts of question and assignments are here */}
                    <hr />
                    <a href="#assignments">Assignments</a>
                    <a href="#questions">Questions</a>
                </ul>
            </div>
            <div className="contentSection matched">
                <div id='assignments'>
                    <ul>
                        <li id='firstAssignment'>
                            <h2>All The Assignments Exercise Are Here</h2>
                            <br />
                            <h3 >First Assignment Exercise</h3>
                            <iframe title='firstAssignment' src={props.assignmentA} frameborder="none"></iframe>
                        </li>

                        <li id='secondAssignment'>
                            <h3 >Second Assignment Exercise</h3>
                            <iframe title='secondAssignment' src={props.assignmentB} frameborder="none"></iframe>
                        </li>

                        <li id='thirdAssignment' >
                            <h3> Third  Assignments Exercise</h3>
                            <iframe title='thirdAssignment' src={props.assignmentB} frameborder="0"></iframe>
                        </li>
                    </ul>
                </div>



                {/* This is Fucking Question Section Hai Guys */}

                <div className='matched' id='questions'>
                    <h2>All The Assignments Question only Are Here</h2>
                    <ul>
                        <h3>Assignment First Questions</h3>
                        <p>{props.questionA1}</p>
                        <p>{props.questionB1}</p>
                        <p>{props.questionC1}</p>
                        <p>{props.questionD1}</p>
                        <p>{props.questionE1}</p>
                        <p>{props.questionF1}</p>
                        <p>{props.questionG1}</p>
                        <p>{props.questionH1}</p>
                        <p>{props.questionI1}</p>
                        <p>{props.questionJ1}</p>
                    </ul>
                    <ul>
                        <h3>Assignment Second Question</h3>
                        <p>{props.questionA2}</p>
                        <p>{props.questionB2}</p>
                        <p>{props.questionC2}</p>
                        <p>{props.questionD2}</p>
                        <p>{props.questionE2}</p>
                        <p>{props.questionF2}</p>
                        <p>{props.questionG2}</p>
                        <p>{props.questionH2}</p>
                        <p>{props.questionI2}</p>
                        <p>{props.questionJ2}</p>
                    </ul>
                    <ul>
                        <h3>Assignment Third Questions</h3>
                        <p>{props.questionA3}</p>
                        <p>{props.questionB3}</p>
                        <p>{props.questionC3}</p>
                        <p>{props.questionD3}</p>
                        <p>{props.questionE3}</p>
                        <p>{props.questionF3}</p>
                        <p>{props.questionG3}</p>
                        <p>{props.questionH3}</p>
                        <p>{props.questionI3}</p>
                        <p > {props.questionJ3}</p>
                    </ul>
                </div>

            </div>




            <div className="questionSection">
                <ul>
                    <NavLink to="/firstSemister">First Semister</NavLink>
                    <NavLink to="/secondSemister">Second Semister</NavLink>
                    <NavLink to="/thirdSemister"> Third Semister</NavLink>
                    <NavLink to="/fourthSemister"> Fourth Semister</NavLink>
                    <NavLink to="/fifthSemister"> Fifth Semister</NavLink>
                    <NavLink to="/sixthSemister"> Sixth Semister</NavLink>
                    <NavLink to="/seventhSemister"> Seventh Semister</NavLink>
                    <NavLink to="/eightSemister"> Eight Semister</NavLink>

                </ul>
            </div>
        </div >
    )
}
