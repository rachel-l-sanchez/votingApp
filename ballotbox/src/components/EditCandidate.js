
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCandidate = (props) => {
  //const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [pastTermStartDate, setPastTermStartDate] = useState("");
  const [pastTermEndDate, setPastTermEndDate] = useState("");
  const [party, setParty] = useState("");
  const [stance, setStance] = useState("");
  const [experience, setExperience] = useState("");
  const [voteCount, setVoteCount] = useState("");
  const [candidate, setCandidate] = useState({})

  const {id} = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/editcandidate/${id}`, {
        withCredentials: true, credentials:'include'
      })
      .then((res) => {
        console.log(res);
        setName(res.data.candidate.name);
        setPastTermStartDate(res.data.candidate.pastTermStartDate);
        setPastTermEndDate(res.data.candidate.pastTermEndDate);
        setParty(res.data.candidate.party);
        setStance(res.data.candidate.stance);
        setExperience(res.data.candidate.experience);
        setVoteCount(res.data.candidate.voteCount);
        setCandidate(res.data.candidate);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(
        `http://localhost:8000/api/edit/candidate/${id}`,
        {
          name,
          pastTermStartDate,
          pastTermEndDate,
          party,
          stance,
          experience,
          voteCount,
        },
        { withCredentials: true, credentials: 'include' }
      )
      .then((res) => {
        console.log(res);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCandidate = () => {
    axios.delete(`http://localhost:8000/api/${id}`)
    .then(res=> {
      console.log('Candidate deleted', res.data)
      alert(`Are you sure you want to delete ${candidate.name}?`)
      navigate('/admin')
    })
  }

  return (
    <div className="candidate-form bg-div">
      <span>Edit {candidate.name}</span>

      {/* Create candidate form */}
      <form className="p-4" onSubmit={submitHandler}>
        <label className="form-label">Full Name:</label>
        <input name="name" value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
        />

        {/* {errors.name ? (
          <p className="text-danger">{errors.name.message}</p>
        ) : null} */}

        <label className="form-label">Past Term Start Date:</label>
        <input name="pastTermStartDate" value={pastTermStartDate}
          onChange={(e) => setPastTermStartDate(e.target.value)}
          className="form-control"
          type="date"
        />
        {/* {errors.pastTermStartDate ? (
          <p className="text-danger">{errors.pastTermStartDate.message}</p>
        ) : null} */}

        <label className="form-label">Past Term End Date:</label>
        <input name="pastTermEndDate" value={pastTermEndDate}
          onChange={(e) => setPastTermEndDate(e.target.value)}
          className="form-control"
          type="date"
        />
        {/* {errors.pastTermEndDate ? (
          <p className="text-danger">{errors.pastTermEndDate.message}</p>
        ) : null} */}

        <label className="form-label">Party:</label>
        <select onChange={(e) => setParty(e.target.value)}
            className="form-control"
            type="text" value={party}>
            <option value="Democrat">Democrat</option>
            <option value="Republican">Republican</option>
            <option value="Libertarian">Libertarian</option>
            <option value="Green">Green</option>
            <option value="Constitution">Constitution</option>
            <option value="Independent">Independent</option>
        </select>
        {/* {errors.party ? (
          <p className="text-danger">{errors.party.message}</p>
        ) : null} */}

        <label className="form-label">Stance:</label>
        <textarea
            onChange={(e) => setStance(e.target.value)}
            className="form-control" value={stance}
          />
        {/* {errors.stance ? (
          <p className="text-danger">{errors.stance.message}</p>
        ) : null} */}

        <label className="form-label">Experience:</label>
        <textarea
            onChange={(e) => setExperience(e.target.value)}
            className="form-control"
            type="text" value={experience}
          />
        {/* {errors.experience ? (
          <p className="text-danger">{errors.experience.message}</p>
        ) : null} */}

        <label className="form-label">Vote Count:</label>
        <input
          onChange={(e) => setVoteCount(e.target.value)}
          className="form-control"
          type="number" value={voteCount}
        />
        {/* {errors.voteCount ? (
          <p className="text-danger">{errors.voteCount.message}</p>
        ) : null} */}

        <button className="mt-3 btn btn-info ">Update</button>
        <button onClick={deleteCandidate} className="mt-3 btn btn-danger ">Delete</button>
      </form>
      <button className="navButton"><NavLink to="/admin">Back to Admin Dashboard</NavLink></button>
    </div>
  );
};

export default EditCandidate;

