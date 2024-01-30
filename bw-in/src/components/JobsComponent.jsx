import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
export default function JobsComponent() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const fetchJobs = async (e) => {
    e.preventDefault();
    console.log("insiede fetchJobs");
    console.log(search);
    try {
      const response = await axios.get(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${search}` +
          "&limit=20",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjdlOTkxM2Y2NTAwMThkMDk1M2YiLCJpYXQiOjE3MDYxODMzNzMsImV4cCI6MTcwNzM5Mjk3M30.jlnbNCzWMI4-v24KVu6nH7wwIrEHBS8ld2efQrYXFUo",
          },
        }
      );
      const data = response.data;
      // store.dispatch(setResponse(data));
      /*   console.log(data); */
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(jobs);
  return (
    <>
      <Row>
        <Form onSubmit={fetchJobs}>
          <Form.Control
            size="lg"
            type="text"
            value={search}
            placeholder="Search for jobs"
            onChange={handleChange}
          />
        </Form>
      </Row>
      <Row>
        {jobs.data &&
          jobs.data.map((job) => {
            return (
              <div key={job._id} className="px-5">
                <a href={job.url} className="fs-1 text-dark">
                  {job.title}
                </a>
                <h2>{job.company_name}</h2>
                <h3>{job.location}</h3>
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
                <h5>
                  <strong className="font-weight-strong">uploaded on: </strong>
                  {job.publication_date.slice(0, 10)}
                </h5>

                <hr />
              </div>
            );
          })}
      </Row>
    </>
  );
}
