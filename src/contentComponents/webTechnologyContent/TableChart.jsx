import React from 'react'
export default function TableChart() {
    return (
        <div className='tableChartTable'>
            <header>
                <ul className='tableChartLink'>
                    <li>Login Fomrm</li>
                    <li>CSS Demo</li>
                    <li>Table Example</li>
                    <li>Javascript Demo</li>
                    <li>Update Information</li>
                </ul>
            </header>

            <table>
                <caption>
                    <h3>

                        Heatuda City College <br />
                        HTML & CSS <br />
                        Text Result
                    </h3>

                </caption>
                <tr rowspan="2">
                    <th rowspan="2">SN</th>
                    <th rowSpan="2">Name</th>
                    <th rowSpan="2">Roll</th>
                    <th rowSpan="1" colSpan="3">Marks</th>
                </tr>
                <tr>
                    <th>Assignment</th>
                    <th>Practical</th>
                    <th>Results</th>
                </tr>
                <tr>
                    <th>1</th>
                    <td>Harry</td>
                    <td>23</td>
                    <td>20</td>
                    <td>39</td>
                    <td>35</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Jenny</td>
                    <td>13</td>
                    <td>23</td>
                    <td>49</td>
                    <td>34</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Pedro</td>
                    <td>23</td>
                    <td>40</td>
                    <td>69</td>
                    <td>65</td>
                </tr>
            </table>


        </div >
    )
}
