const UserSchema=new mongoose.Schema({
    email:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectIDd,
        ref:'Course'
    }]
    
});
const CourseSchema=new mongoose.Schema({
    title:String,
    price:5999
});

const User=mongoose.model('User', UserSchema);
User.create({
    username:req.body.username,
     passowrd:req.body.password
});

User.findById("1")