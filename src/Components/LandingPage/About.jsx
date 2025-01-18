import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Our Platform</h2>
      <p>
        Welcome to our job platform where recruiters and job seekers can connect
        easily! Whether you're here to find the perfect candidate or the ideal
        job, we make the process simple and efficient.
      </p>

      <div className="panels">
        {/* Recruiter Panel */}
        <div className="panel recruiter-panel">
          <h3>For Recruiters</h3>
          <ul>
            <li>Create an account to post jobs</li>
            <li>Manage job postings from your dashboard</li>
            <li>Review applicant profiles in real-time</li>
            <li>Download resumes of applicants</li>
          </ul>
          <p>
            Recruiters can post job listings, and as soon as a job is posted,
            all job seekers on the platform can view and apply for the position.
            You'll be able to see details of the applicants and download their
            resumes directly from your dashboard.
          </p>
        </div>

        {/* Job Seeker Panel */}
        <div className="panel seeker-panel">
          <h3>For Job Seekers</h3>
          <ul>
            <li>Create an account to apply for jobs</li>
            <li>View job listings in real-time</li>
            <li>Apply with your profile and resume</li>
            <li>Get updates on the status of your applications</li>
          </ul>
          <p>
            Job seekers can browse available job listings as soon as they are
            posted. Applying for a job is easy: just submit your profile and
            resume. Recruiters will be able to see your details and reach out
            if you're a good fit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;