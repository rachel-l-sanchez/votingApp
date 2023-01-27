import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from "react-router-dom";

const CandidateList = () => {   
    const [candidateList, setCandidateList] = useState([]);
    const [counter, setCounter] = useState(0);
    const {submitted, setSubmitted} = useState(false)
    const {id} = useParams();
    const [errors,setErrors] = useState({})
    const navigate = useNavigate();

    useEffect (() => {
        axios.get('http://localhost:8000/api/candidates', {withCredentials:true})
            .then((res) => {
                console.log(res)
                setCandidateList(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, []);

    const deleteSelection = (index) => {
        setCandidateList((prevState) => {
          let items = [...prevState];
          console.log(items);
          items.splice(index, 1);
          return items;
        });
      };

    const onSubmitHandler = (e) => {
        if (submitted) {
          return;
        }
        e.preventDefault();
        axios.put(`http://localhost:8000/api/vote/${id}`,{
            counter
        })
        .then((res)=> {
          console.log(res.data)
          setSubmitted(true)
          setCounter(counter => counter + 1)
          navigate('/api/candidates')
        }).catch((err) => {
          console.log(err)
          setErrors(err.response.data.errors)
      })
    }

  return (
    <div>
        { 
            candidateList.map(candidate => (
                <div className="h5 container d-flex p-2 mx-auto my-2 justify-content-between border-top">
                    <p>{candidate.firstName} {candidate.lastName} </p>
                    <Link to={`/api/candidate/${candidate._id}`}>View</Link>
                    <form onSubmit={onSubmitHandler}>
                        <input type="checkbox"  defaultChecked={false} onClick={((e) => setCounter(e.target.value))}></input>
                        <button>Vote!</button>
                    </form>
                 
                    <button id="Delete" onClick={deleteSelection}>
                        ✗
                    </button>
                </div>
            ))
        }
    </div>
  )
}


export default CandidateList;