const express = require('express');
const adminRoute = express.Router();  //Extract router from express
const { adminTable } = require('../models/adminModel');
const { seekerTable } = require('../models/seekerModel')
const { recruiterTable } = require('../models/recruiterModel')

// insert data
adminRoute.post('/admin-register', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const image = req.files.image;

    //Move file to uploads
    await image.mv('Backend/uploads/' + image.name, (err) => {
        if (err) {
            res.send(err);
        }
    });

    // Store data
    const data = new adminTable({ name, email, password, image: image.name });
    const result = await data.save();

    //send respose in json
    res.json({
        code: 200,
        data: result
    });
});

// Login
adminRoute.post('/admin-login', async (req, res) => {
    const { email, password } = req.body;
    const result = await adminTable.findOne({ email, password })
    if (result) {
        res.json({
            code: 200,
            message: 'Login Successfull',
            data: result
        })
    }
    else {
        res.json({
            code: 404,
            message: 'Invalid Email or Password',
            data: []
        })
    }
});

//Seeker List
adminRoute.get('/admin-seekerlist', async (req, res) => {
    try {
        const result = await seekerTable.find();
        res.json({
            code: 200,
            message: 'Data Found',
            data: result
        })
    } catch (error) {
        res.json({
            code: 404,
            message: error
        })
    }
})

// recruiter List
adminRoute.get('/admin-recruiterlist', async (req, res) => {
    try {
        const result = await recruiterTable.find();
        res.json({
            code: 200,
            message: 'Data Found',
            data: result
        })
    } catch (error) {
        res.json({
            code: 404,
            message: error
        })
    }
})

//update
adminRoute.put('/admin-update/:_id', async (req, res) => {
    const id = req.params._id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    let image = req.files.image;
// console.log(image);

    //Move file to uploads
      await image.mv('Backend/uploads/' + image.name, (err) => {
        if (err) {
            // res.send(err);
        }
    });

    const result = await adminTable.findByIdAndUpdate({ _id:id },
        { name: name, email: email, password: password, image: image.name });

    res.json({
        code: 200,
        message:'Data Updated',
        data: result
    });
});

//seeker block
adminRoute.put('/admin-seekerblock/:_id',async(req, res)=>{
    const _id = req.params._id;
    const status = req.body.status;
    const result = await seekerTable.findByIdAndUpdate({_id:_id},
        {$set:{isBlock: status}},
        {new: true})
        res.json({
            code: 200,
            message: "Updated Successfully",
            data: result
        })
})
//recruiter block
adminRoute.put('/admin-recruiterblock/:_id',async(req, res)=>{
    const _id = req.params._id;
    const status = req.body.status;
    const result = await recruiterTable.findByIdAndUpdate({_id:_id},
        {$set:{isBlock: status}},
        {new: true})
        res.json({
            code: 200,
            message: "Updated Successfully",
            data: result
        })
})

//Export module
module.exports = { adminRoute }