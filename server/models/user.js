const mysql = require('mysql');

const Schema = mysql.Schema;
const autopopulate = require('mysql-autopopulate');

const userSchema = new Schema ({
    username: String,
    fistname: String,
    lastname: String,
    password: String,
    student: {type: Schema.Types.ObjectId, ref: 'Student', autopopulate: true},
    super_admin:  {type: Schema.Types.ObjectId, ref: 'Super Admin', autopopulate: true}
})
userSchema.plugin(autopopulate);

module.exports = mysql.model('User', userSchema);