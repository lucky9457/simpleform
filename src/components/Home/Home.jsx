
import React, { useState } from 'react'
import tick from "../../assets/kcKoj8dki.png"
import "./Home.css"
const Home = () => {

    const [isclick, setisclick] = useState(false)
    const handlesubmit = (e) => {
        e.preventDefault()
        setisclick(true)
    }

    return (
        <div className='main'>
            <div className='form'>

                <form className='innerform' onSubmit={handlesubmit}>


                    {isclick ?
                        <>
                            <div className='submitedview'>
                                <img src={tick} alt="imgtick" />
                                <p>Form submitted successfully</p>
                            </div>
                        </> : (<>
                            <fieldset>
                                <legend>Name</legend>
                                <input className='name' type='text' required />
                            </fieldset><fieldset>


                                <legend>Email</legend>
                                <input className='email' type='email' required />
                            </fieldset><fieldset>


                                <legend>Message</legend>
                                <textarea required placeholder='Enter Message....' rows="5" cols="30" class="mesage"></textarea>
                            </fieldset><br /><button className='btn'>Submit</button></>)


                    }


                </form>
            </div >

        </div >
    )
}

export default Home
