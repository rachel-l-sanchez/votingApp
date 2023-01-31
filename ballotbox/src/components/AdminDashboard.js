import { NavLink } from "react-router-dom";
import React, { useState, Link, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [pastTermStartDate, setPastTermStartDate] = useState("");
  const [pastTermEndDate, setPastTermEndDate] = useState("");
  const [party, setParty] = useState("");
  const [stance, setStance] = useState("");
  const [experience, setExperience] = useState("");
  const [voteCount, setVoteCount] = useState("");
  const navigate = useNavigate();

  const [candidateList, setCandidateList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault(); //prevents default action of page refresh and state clear, once button is clicked

    axios
      .post(
        "http://localhost:8000/api/candidate",
        {
          name,
          pastTermStartDate,
          pastTermEndDate,
          party,
          stance,
          experience,
          voteCount,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        console.log(err.response.data);
        setErrors(err.response.data.errors);
      });
  };

  //useEffect to get All Candidates
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/candidates")

      .then((res) => {
        console.log(res);
        setCandidateList(res.data);
        navigate("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-div">
      <div className="">
        <span className="">New Candidate</span>

        {/* Create candidate form */}
        <form className="d-flex p-4" onSubmit={submitHandler}>
          <label className="form-label">Full Name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            type="text"
          />

          {errors.name ? (
            <p className="text-danger">{errors.name.message}</p>
          ) : null}

          <label className="form-label">Past Term Start Date:</label>
          <input
            onChange={(e) => setPastTermStartDate(e.target.value)}
            className="form-control"
            type="date"
          />
          {errors.pastTermStartDate ? (
            <p className="text-danger">{errors.pastTermStartDate.message}</p>
          ) : null}

          <label className="form-label">Past Term End Date:</label>
          <input
            onChange={(e) => setPastTermEndDate(e.target.value)}
            className="form-control"
            type="date"
          />
          {errors.pastTermEndDate ? (
            <p className="text-danger">{errors.pastTermEndDate.message}</p>
          ) : null}

          <label className="form-label">Party:</label>
          <select
            onChange={(e) => setParty(e.target.value)}
            className="form-control"
            type="text"
          >
            <option>Select a Party</option>
            <option value="Democrat">Democrat</option>
            <option value="Republican">Republican</option>
            <option value="Libertarian">Libertarian</option>
            <option value="Green">Green</option>
            <option value="Constitution">Constitution</option>
            <option value="Independent">Independent</option>
          </select>

          {errors.party ? (
            <p className="text-danger">{errors.party.message}</p>
          ) : null}

          <label className="form-label">Stance:</label>
          <textarea
            onChange={(e) => setStance(e.target.value)}
            className="form-control"
          />
          {errors.stance ? (
            <p className="text-danger">{errors.stance.message}</p>
          ) : null}

          <label className="form-label">Experience:</label>
          <textarea
            onChange={(e) => setExperience(e.target.value)}
            className="form-control"
            type="text"
          />
          {errors.experience ? (
            <p className="text-danger">{errors.experience.message}</p>
          ) : null}

          <label className="form-label">Vote Count:</label>
          <input
            onChange={(e) => setVoteCount(e.target.value)}
            className="form-control"
            type="number"
          />
          {errors.voteCount ? (
            <p className="text-danger">{errors.voteCount.message}</p>
          ) : null}

          <button className="mt-3 btn btn-info ">Submit</button>
        </form>
      </div>

      {/* Display All Candidates section*/}
      <div className="all-candidates">
        <span>Candidates</span>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Party</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidateList.map((candidate, index) => (
            <tr key={index}>
              {/* Display candidate name and Link to view page */}
              <td>
              <div className="">{candidate.name}</div>
                {/* <div>
                  <Link
                    to={`/view/${candidate._id}`}
                    className="d-flex justify-content-around m-5">
                    <>
                      <td className="">
                        <div className="">{candidate.name}</div>
                      </td>
                    </>
                  </Link>
                </div> */}
              </td>

              {/* <td>
                  <div className="d-flex justify-content-around mx-auto m-3">
                    <img src={candidate.photo} className="col col-4" />
                  </div>
                </td> */}

              <td>
                <div className="d-flex justify-content-around">
                  {candidate.party}
                </div>
              </td>
              <td>
              <button className="navButton"><NavLink to={`/edit/${candidate._id}`}>Edit Candidate</NavLink></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;


