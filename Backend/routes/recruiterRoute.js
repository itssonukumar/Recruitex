const express = require('express');
const recruiterRoute = express.Router();  //Extract router from express
const { recruiterTable } = require('../models/recruiterModel');
const { jobPostTable } = require('../models/jobpost');
const {appliedJobTable} = require('../models/appliedJobs');
const { seekerTable } = require('../models/seekerModel');

// insert data
recruiterRoute.post('/recruiter-register', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;
    const location = req.body.location;
    let logo = req.files.logo;

    //Move file to uploads
    await logo.mv('Backend/uploads/' + logo.name, (err) => {
        if (err) {
            res.send(err);
        }
    });

    // Store data
    const data = new recruiterTable({ name: name, email: email, contact: contact, password: password, location: location, logo: logo.name });
    const result = await data.save();

    //send respose in json
    res.json({
        code: 200,
        data: result
    });
});

// Login
recruiterRoute.post('/recruiter-login', async (req, res) => {
    const { email, password } = req.body;
    const result = await recruiterTable.findOne({ email, password })
    if (result) {
        if (result.isBlock) {
            res.json({
                code: 203,
                message: "This Account is Blocked",
                data: {}
            })
        } else {
            res.json({
                code: 200,
                message: "Login Successful",
                data: result
            })
        }
    }
    else {
        res.json({
            code: 404,
            message: 'Invalid Email or Password',
            data: {}
        })
    }
});

//Job post
recruiterRoute.post('/recruiter-jobpost', async (req, res) => {
    try {
        const { companyId, jobType, jobTitle, experience, vacancies, jobLocation, salary, applyDate, category } = req.body;
        const data = new jobPostTable({ companyId, category, jobTitle, jobType, jobLocation, experience, applyDate, vacancies, salary });
        const result = await data.save();

        res.json({
            code: 200,
            message: 'Job Posted Succefully!',
            data: result
        })
    } catch (error) {
        console.log(error);
    }
})

//Posted Jobs
recruiterRoute.post('/recruiter-postedjob', async(req,res)=>{
const {companyId} = req.body;
const jobPost = await jobPostTable.find({companyId:companyId}).sort({createdAt: -1});
const finalData = await Promise.all(  //store all data that need in frontend
jobPost.map(async(item)=>{
const companyDetails = await recruiterTable.findOne({_id:item.companyId});  //store recruites table dets

    // return all data that need in frontend
        return{
            _id: item._id,
            category: item.category,
            jobType: item.jobType,
            experience: item.experience,
            jobLocation: item.jobLocation,
            jobTitle: item.jobTitle,
            applyDate: item.applyDate,
            salary: item.salary,
            vacancies: item.vacancies,
            logo: companyDetails.logo,
            name: companyDetails.name
        }
    })
)
res.json({
    code: 200,
    message: 'Data Found!',
    data: finalData
})
})

//Applied Seekers
recruiterRoute.post('/recruiter-applied',async(req, res)=>{
    const {companyId} = req.body;
    const appliedList = await appliedJobTable.find({companyId}).sort({createdAt: -1});
    const finalData = await Promise.all(
        appliedList.map(async(item)=>{
            const jobData = await jobPostTable.findOne({_id:item.jobId});
            const seekerData = await seekerTable.findOne({_id:item.userId});
            return{
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
                name: seekerData?.name,
                image: seekerData?.image,
                contact: seekerData?.contact,
                email: seekerData?.email,
                resume: seekerData?.resume
            }
        })
    )
    res.json({
        code: 200,
        message: 'Data Found!',
        data: finalData
    })
})


// get data
recruiterRoute.get('/recruiter-get/:_id', async (req, res) => {
    const id = req.params._id;
    const result = await recruiterTable.find({ _id: id });

    res.json({
        code: 200,
        data: result
    });
});

//update data
recruiterRoute.put('/recruiter-update/:_id', async (req, res) => {
    const id = req.params._id;
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;
    const location = req.body.location;
    let logo = req.files.logo;

    //Move file to uploads
    await logo.mv('Backend/uploads/' + logo.name, (err) => {
        if (err) {
            res.send(err);
        }
    });

    const result = await recruiterTable.findByIdAndUpdate({ _id: id }, { name: name, email: email, contact: contact, password: password, location: location, logo: logo.name });

    res.json({
        code: 200,
        data: result
    });
});


// delete data
recruiterRoute.delete('/recruiter-delete/:_id', async (req, res) => {
    const id = req.params._id;
    const result = await recruiterTable.findByIdAndDelete({ _id: id });
    res.json({
        code: 200,
        data: result
    })
})

//Export module
module.exports = { recruiterRoute }