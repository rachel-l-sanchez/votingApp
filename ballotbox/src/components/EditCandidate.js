

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCandidate = () => {
  //const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [pastTermStartDate, setPastTermStartDate] = useState("");
  const [pastTermEndDate, setPastTermEndDate] = useState("");
  const [party, setParty] = useState("");
  const [stance, setStance] = useState("");
  const [experience, setExperience] = useState("");
  const [voteCount, setVoteCount] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/edit/candidate/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setName(res.data.name);
        setPastTermStartDate(res.data.pastTermStartDate);
        setPastTermEndDate(res.data.pastTermEndDate);
        setParty(res.data.party);
        setStance(res.data.stance);
        setExperience(res.data.experience);
        setVoteCount(res.data.voteCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8000/edit/candidate/${id}`,
        {
          name,
          pastTermStartDate,
          pastTermEndDate,
          party,
          stance,
          experience,
          voteCount,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="candidate-form bg-div">
      <span>New Candidate</span>

      {/* Create candidate form */}
      <form className="p-4" onSubmit={submitHandler}>
        <label className="form-label">Full Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
        />

        {/* {errors.name ? (
          <p className="text-danger">{errors.name.message}</p>
        ) : null} */}

        <label className="form-label">Past Term Start Date:</label>
        <input
          onChange={(e) => setPastTermStartDate(e.target.value)}
          className="form-control"
          type="text"
        />
        {/* {errors.pastTermStartDate ? (
          <p className="text-danger">{errors.pastTermStartDate.message}</p>
        ) : null} */}

        <label className="form-label">Past Term End Date:</label>
        <input
          onChange={(e) => setPastTermEndDate(e.target.value)}
          className="form-control"
        />
        {/* {errors.pastTermEndDate ? (
          <p className="text-danger">{errors.pastTermEndDate.message}</p>
        ) : null} */}

        <label className="form-label">Party:</label>
        <input
          onChange={(e) => setParty(e.target.value)}
          className="form-control"
          type="text"
        />
        {/* {errors.party ? (
          <p className="text-danger">{errors.party.message}</p>
        ) : null} */}

        <label className="form-label">Stance:</label>
        <input
          onChange={(e) => setStance(e.target.value)}
          className="form-control"
        />
        {/* {errors.stance ? (
          <p className="text-danger">{errors.stance.message}</p>
        ) : null} */}

        <label className="form-label">Experience:</label>
        <input
          onChange={(e) => setExperience(e.target.value)}
          className="form-control"
          type="text"
        />
        {/* {errors.experience ? (
          <p className="text-danger">{errors.experience.message}</p>
        ) : null} */}

        <label className="form-label">Vote Count:</label>
        <input
          onChange={(e) => setVoteCount(e.target.value)}
          className="form-control"
          type="text"
        />
        {/* {errors.voteCount ? (
          <p className="text-danger">{errors.voteCount.message}</p>
        ) : null} */}

        <button className="mt-3 btn btn-info ">Update</button>
        <button className="mt-3 btn btn-danger ">Delete</button>
      </form>
    </div>
  );
};

export default EditCandidate;

