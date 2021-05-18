const express       = require('express');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const mongoose      = require('mongoose');
const config        = require('./config/config').get(process.env.NODE_ENV);
const app           = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, {
    useCreateIndex:     true,
    useNewUrlParser:    true,
    useUnifiedTopology: true
})

const { User  } = require('./models/user');
const { Salon } = require('./models/salon');
const { Employee } = require('./models/employee');
const { auth  } = require('./middleware/auth');

app.use(bodyParser.json());
app.use(cookieParser());

// GET //
app.get('/api/auth', auth, (req,res) => {
    res.json({
        isAuth      : true,
        id          : req.user._id,
        email       : req.user.email,
        firstname   : req.user.firstname,
        lastname    : req.user.lastname
    })
})

app.get('/api/logout', auth, (req,res) => {
    req.user.deleteToken(req.token, (err,user) => {
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    })
})

app.get('/api/salons', (req,res) => {
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    Salon.find().sort({rating:order}).limit(limit).exec((err,doc) => {
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/getSalon', (req,res) => {
    let id = req.query.id;
    Salon.findById(id, (err,doc) => {
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})


// POST // 
app.post('/api/register', (req,res) => {
    const user = new User(req.body);
    user.save((err,doc) => {
        if(err) return res.json({success:false});
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})

app.post('/api/login', (req,res) => {
    User.findOne({ 'email': req.body.email }, (err,user) => {
        if(!user) return res.json({ isAuth: false, message: 'Auth failed, email not found' })
        
        user.comparePassword(req.body.password, (err,isMatch) => {
            if(!isMatch) return res.json({
                isAuth  : false,
                message : 'Wrong password'
            })
            user.generateToken((err,user) => {
                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).json({
                    isAuth  : true,
                    id      : user._id,
                    email   : user.email
                })
            })
        })
    })
})

app.post('/api/add_salon', (req,res) => {
    const salon = new Salon(req.body);
    salon.save((err,doc) => {
        if(err) return res.json({success:false});
        res.status(200).json({
            success:true,
            salon:doc
        })
    })
})

app.post('/api/add_employee', (req,res) => {
    const employee = new Employee(req.body);
    employee.save((err,doc) => {
        if(err) return res.json({success:false});
        res.status(200).json({
            success:true,
            employee:doc
        })
    })
})

// UPDATE //

// DELETE //


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`SERVER RUNNING`)
})

