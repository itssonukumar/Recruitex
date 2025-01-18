const express = require('express');
const seekerRoute = express.Router();  //Extract router from express
const { seekerTable } = require('../models/seekerModel');
const { jobPostTable } = require('../models/jobpost');
const { recruiterTable } = require('../models/recruiterModel');
const { appliedJobTable } = require('../models/appliedJobs');

// insert data
seekerRoute.post('/seeker-register', async (req, res) => {
    const { name, email, contact, password, location, qualification, jobPreference } = req.body;
    let image = req.files.image;
    let resume = req.files.resume;

    //Move file to uploads
    await image.mv('Backend/uploads/' + image.name, (err) => {
        if (err) {
            res.send(err);
        }
    });

    await resume.mv('Backend/uploads/' + resume.name, (err) => {
        if (err) {
            res.send(err);
        }
    });

    // Store data
    const data = new seekerTable({ name, email, contact, password, location, qualification, jobPreference, image: image.name, resume: resume.name });
    const result = await data.save();

    //send respose in json
    res.json({
        code: 200,
        data: result
    });
});

// Login
seekerRoute.post('/seeker-login', async (req, res) => {
    const { email, password } = req.body;
    const result = await seekerTable.findOne({ email, password })
    if (result) {
        if (result.isBlock) {
            res.json({
                code: 203,
                message: "Your Account is Blocked",
                data: {}
            })
        }
        else {
            res.json({
                code: 200,
                message: "Login Successful",
                data: result
            })
        }
        
    }
    else {
        res.json({
            code: 302,
            message: "Invalid Email Password",
            data: {}
        })
    }
});

//All Jobs list
seekerRoute.get('/seeker-joblist', async (req, res) => {
    const jobPost = await jobPostTable.find().sort({createdAt: -1});
    const finalData = await Promise.all(  //store all data that need in frontend
        jobPost.map(async (item) => {
            const companyDetails = await recruiterTable.findOne({ _id: item.companyId });  //store recruites table dets

            // return all data that need in frontend
            return {
                _id: item?._id,  // ? is handelling null value
                companyId: item?.companyId,
                category: item?.category,
                jobType: item?.jobType,
                experience: item?.experience,
                jobLocation: item?.jobLocation,
                jobTitle: item?.jobTitle,
                applyDate: item?.applyDate,
                salary: item?.salary,
                vacancies: item?.vacancies,
                logo: companyDetails?.logo,
                name: companyDetails?.name
            }
        })
    )
    res.json({
        code: 200,
        message: 'Data Found!',
        data: finalData
    })
})


seekerRoute.post('/seeker-apply', async (req, res) => {
    const { jobId, companyId, userId } = req.body;
    const isApplied = await appliedJobTable.findOne({ jobId, userId });
    if (isApplied) {
        res.json({
            code: 301,
            message: 'Already Applied',
            data: isApplied
        })
    } else {
        const data = new appliedJobTable({ jobId, userId, companyId })
        const result = await data.save();
        res.json({
            code: 200,
            message: 'Applied Succefull!',
            data: result
        })
    }
})

//Applied list
seekerRoute.post('/seeker-applied', async (req, res) => {
    const { userId } = req.body;
    const appliedList = await appliedJobTable.find({ userId }).sort({createdAt: -1});
    const finalData = await Promise.all(
        appliedList.map(async (item) => {
            const jobData = await jobPostTable.findOne({ _id: item.jobId });
            const companyData = await recruiterTable.findOne({ _id: item.companyId });
            return {
                _id: item?._id,
                jobId: item?.jobId,
                jobTitle: jobData?.jobTitle,
                experience: jobData?.experience,
                jobType: jobData?.jobType,
                jobLocation: jobData?.jobLocation,
                salary: jobData?.salary,
                applyDate: jobData?.applyDate,
                category: jobData?.category,
                vacancies: jobData?.vacancies,
                name: companyData?.name,
                logo: companyData?.logo
            }
        })
    )
    res.json({
        code: 200,
        message: 'Data Found!',
        data: finalData
    })
})


//update data
seekerRoute.put('/seeker-update/:_id', async (req, res) => {
    const id = req.params._id;
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;
    const location = req.body.location;
    const jobPreference = req.body.jobPreference;
    const qualification = req.body.qualification;
    let image = req.files.image;
    let resume = req.files.resume;

    //Move file to uploads
    await image.mv('Backend/uploads/' + image.name, (err) => {
        if (err) {
            res.send(err);
        }
    });
    await resume.mv('Backend/uploads/' + resume.name, (err) => {
        if (err) {
            res.send(err);
        }
    });

    const result = await seekerTable.findByIdAndUpdate({ _id: id }, { name: name, email: email, contact: contact, password: password, location: location, image: image.name, resume: resume.name, jobPreference: jobPreference, qualification: qualification });

    res.json({
        code: 200,
        data: result
    });
});

//Export module
module.exports = { seekerRoute }