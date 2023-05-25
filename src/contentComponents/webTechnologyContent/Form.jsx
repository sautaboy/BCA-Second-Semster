import React from 'react'

export default function Form() {
    return (
        <div className='form'>
            <form action="#" >
                <h2>Submit Your Form</h2>
                <fieldset className='personalDetailsFieldset'>
                    <legend>Submit Your Form</legend>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='Ente your name' />

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="name" id="email" placeholder='enter your email address' />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="number" name="phone" id="phone" placeholder='enter your phone number' />

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder='enter your address' />

                    <label htmlFor="iq">IQ</label>
                    <input type="text" name="iq" id="id" placeholder='enter you answer' />


                    {/* Gender Selection works if the name of all inout is same  */}

                    <label htmlFor="gender" className='genderRadio'>
                        <h3>Gender:</h3>
                        <li>
                            <input type="radio" name="gender" id="male" value="male" />
                            <label htmlFor="male">Male</label>
                        </li>
                        <li>
                            <input type="radio" name="gender" id="female" value="female" />
                            <label htmlFor="female">Female</label>
                        </li>
                        <li>
                            <input type="radio" name="gender" id="lgbtq" value="lgbtq" />
                            <label htmlFor="lgbtq">LGBTG</label>
                        </li>
                    </label>
                    <label htmlFor="date">Date of Propesed Admission:</label>
                    <input type="date" name="" id="" />
                </fieldset>

                <fieldset className='checkList'>
                    <legend>Check Check</legend>
                    <li>
                        <input type="checkbox" name="checkBoxList" />
                        <label htmlFor="checkBoxList">I am from Hetauda</label>
                    </li>

                    <li>
                        <input type="checkbox" name="checkboxList" />
                        <label htmlFor="checkboxList">I have 1st divison in SlC</label>
                    </li>
                    <li>
                        <input type="checkbox" name="checkboxList" />
                        <label htmlFor="checkboxList">I have first division in +2</label>
                    </li>
                    <li>
                        <input type="checkbox" name="checkboxList" />
                        <label htmlFor="checkboxList">I studies computer science before</label>
                    </li>
                    <li>
                        <input type="checkbox" name="checkboxList" />
                        <label htmlFor="checkboxList">I owned highend laptop</label>
                    </li>
                    <li>
                        <input type="checkbox" name="checkboxList" />
                        <label htmlFor="checkboxList">I took intrance preparation class in here HCC</label>
                    </li>
                </fieldset>
                <fieldset className='religionSelect'>
                    <label htmlFor="religionSelect">Religion:</label>
                    <select name="religon" id="religion">
                        <option value="">Please Choose Religion</option>
                        <option value="hindu">Hindu</option>
                        <option value="christian">Christian</option>
                        <option value="sikh">Sikh</option>
                        <option value="islam">Islam</option>
                        <option value="buddhism">BUsshism</option>
                    </select>

                </fieldset>
                <fieldset className='easySectionFieldset'>
                    <legend>Eassy section</legend>
                    <h3>In 50 words or more explain why you want to take admission in HCC</h3>
                    <textarea name="essay" id="essay" cols="30" placeholder='enter your queries here' rows="10"></textarea>
                </fieldset>


                <fieldset className='contactDetailsFieldset'>
                    <h3>Please upload contact details for 2 reference</h3>
                    <textarea name="contactDetails" id="contactDetails" cols="30" rows="10" placeholder='enter here'></textarea>
                </fieldset>


                <fieldset className='educationCertificatesFields'>
                    <label htmlFor="attachFile">Upload all the education certificates</label>
                    <input type="file" name="attachFile" id="attachFile" />
                </fieldset>
                <fieldset>

                    <label htmlFor="submit">
                        <button type='submit' value="Submit">Submit</button>
                    </label>
                </fieldset>
            </form>
        </div>
    )
}
