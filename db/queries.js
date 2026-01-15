//get all messages
//get message by id
// add user
const {pool} = require("./pool");

async function getAllMsgs(){
const {rows} = await pool.query('SELECT * FROM messages');
return rows
}
async function getMsgById(id){
    const {rows} = await pool.query('SELECT * FROM messages WHERE id = $1',[id]);
    return rows[0]

}

async function createNewMsg(msg){
    await pool.query('INSERT INTO messages (username,text ) VALUES ($1 ,$2) ',[msg.username,msg.text])
}

module.exports ={
    getAllMsgs,
    getMsgById,
    createNewMsg
}