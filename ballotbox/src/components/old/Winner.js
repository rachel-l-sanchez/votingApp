import React, { useState, useRef} from 'react'

const Winner = () => {
    const [candidateList, setCandidateList] = useState({})
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 1440 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const greatestCounter = (id) => {
        Math.max.apply(Math, candidateList.map(function(o) { return o.counter; }))
    }
    


  return (
    <div>
        <div className="App">
            <div>
                {/* if there is time remaining only output the time */}
                    {/* else output only the candidate with the greatest number of 
                    votes by using another ternary operator */}
                    {getTimeRemaining >= 0} ? <h1>{timer}</h1>: <h1>{greatestCounter}</h1>
                    {candidateList.filter(candidate => candidate.includes({greatestCounter})).map(filteredCandidate => (
                    <h1>
                    {filteredCandidate}
                    </h1>
                ))}
            </div>
            <div>
                { 
                    candidateList.map(candidate => (
                        <div className="h5 container d-flex p-2 mx-auto my-2 justify-content-between border-top">
                            <table>
                                <tr>
                                    <th>Candidates:</th>
                                    <th>Race Count:</th>
                                </tr>
                                <tr>
                                    <td>{candidate.firstName} {candidate.lastName}</td>
                                    <td>{candidate.voteCount}</td>
                                </tr>
                            </table>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}


export default Winner;