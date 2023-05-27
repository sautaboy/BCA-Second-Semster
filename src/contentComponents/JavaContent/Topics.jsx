import React from 'react'
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
                </ul>
            </div>

            <div className="contentSection">
                <div className='contentSectionChild' id={props.topicListAhref}>
                    <h2>{props.topicListA}</h2>
                    <section>
                        {props.topicListAcontent}
                    </section>
                </div>

                <div className='contentSectionChild' id={props.topicListBhref}>
                    <h2>{props.topicListB}</h2>
                    <section>

                        {props.topicListBcontent}
                    </section>
                </div>

                <div className='contentSectionChild' id={props.topicListChref}>
                    <h2>{props.topicListC}</h2>
                    <section>
                        {props.topicListCcontent}
                    </section>
                </div>

                <div className='contentSectionChild' id={props.topicListDhref}>
                    <h2>{props.topicListD}</h2>
                    <section>
                        {props.topicListDcontent}

                    </section>
                </div>

                <div className='contentSectionChild' id={props.topicListEhref}>
                    <h2>{props.topicListE}</h2>
                    <section>

                        {props.topicListEcontent}

                    </section>
                </div>

                <div className='contentSectionChild' id={props.topicListFhref}>
                    <h2>{props.topicListF}</h2>
                    <section>

                        {props.topicListFcontent}

                    </section>
                </div>

                <div className='contentSectionChild' id={props.topicListGhref}>
                    <h2>{props.topicListG}</h2>
                    <section>

                        {props.topicListGcontent}

                    </section>
                </div>

                <div className='contentSectionChild' id={props.topicListHhref}>
                    <h2>{props.topicListH}</h2>
                    <section>

                        {props.topicListHcontent}

                    </section>
                </div>

                <div className='contentSectionChild' id={props.topicListIhref}>
                    <h2>{props.topicListI}</h2>
                    <section>

                        {props.topicListIcontent}
                    </section>
                </div>

                <div className='contentSectionChild' id={props.topicListJhref}>
                    <h2>{props.topicListJ}</h2>
                    <section>

                        {props.topicListJcontent}
                    </section>
                </div>


                <div className='contentSectionChild' id="assignments">
                    <h2>All The Assignments Exercise Are Here</h2>
                    <div className="assignments contentSectionChild gap">
                        <h2>Assignmet One</h2>
                        <iframe src={props.assignmentA} frameborder="none"></iframe>
                    </div>
                    <div className="assignments contentSectionChild gap">
                        <h2>Assignmet Two</h2>
                        <iframe src={props.assignmentB} frameborder="none"></iframe>
                    </div>
                    <div className="assignments contentSectionChild gap">
                        <h2>Assignmet Three</h2>
                        <iframe src={props.assignmentB} frameborder="0"></iframe>
                    </div>
                </div>


                {/* This is Fucking Question Section Hai Guys */}

                <div className='contentSectionChild questions' id="questions">
                    <h2>All The Assignments Question only Are Here</h2>
                    <ul>
                        <h3>Assignments One Questions</h3>
                        <li>{props.questionA1}</li>
                        <li>{props.questionB1}</li>
                        <li>{props.questionC1}</li>
                        <li>{props.questionD1}</li>
                        <li>{props.questionE1}</li>
                        <li>{props.questionF1}</li>
                        <li>{props.questionG1}</li>
                        <li>{props.questionH1}</li>
                        <li>{props.questionI1}</li>
                        <li>{props.questionJ1}</li>
                    </ul>
                    <ul>
                        <h3>Assignments Two Question</h3>
                        <li>{props.questionA2}</li>
                        <li>{props.questionB2}</li>
                        <li>{props.questionC2}</li>
                        <li>{props.questionD2}</li>
                        <li>{props.questionE2}</li>
                        <li>{props.questionF2}</li>
                        <li>{props.questionG2}</li>
                        <li>{props.questionH2}</li>
                        <li>{props.questionI2}</li>
                        <li>{props.questionJ2}</li>
                    </ul>
                    <ul>
                        <h3>Assignments Three Questions</h3>
                        <li>{props.questionA3}</li>
                        <li>{props.questionB3}</li>
                        <li>{props.questionC3}</li>
                        <li>{props.questionD3}</li>
                        <li>{props.questionE3}</li>
                        <li>{props.questionF3}</li>
                        <li>{props.questionG3}</li>
                        <li>{props.questionH3}</li>
                        <li>{props.questionI3}</li>
                        <li>{props.questionJ3}</li>
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
