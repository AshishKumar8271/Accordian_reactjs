import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";


const QuesAndAns = ({info,title}) => {
    const [ans, setAns] = useState(false);
    return (
                        <div className="QAcontainer">
                            <div className="quesAns">
                                <h3 id="ques">{title}</h3>
                                
                                <button id="show" onClick={()=>setAns(!ans)}>
                                    {
                                        ans ? <AiFillMinusCircle/> : <AiFillPlusCircle/>
                                    }
                                </button>
                            </div>
                            {
                            ans && <p class="ans">{info}</p>
                            }
                        </div>
      

    )
}

export default QuesAndAns;
