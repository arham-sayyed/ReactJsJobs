/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "http://localhost:5000/jobs?_limit=3"
        : "http://localhost:5000/jobs";
      try {
        const res = await fetch(apiUrl);
        const jobs = await res.json();

        setJobs(jobs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Top Jobs" : "Browse All Jobs"}
          </h2>
          {loading && <Spinner loading={loading} />}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard
                type={job.type}
                key={job.id}
                title={job.title}
                description={job.description}
                salary={job.salary}
                location={job.location}
                id={job.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListings;
