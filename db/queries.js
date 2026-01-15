//get all messages
//get message by id
// add user
const pool = require('./pools');

async function getAllMsgs(){
const {rows} = await pool.query('SELECT * FROM messages');
return rows
}
async function getMsgById(id){
    const {rows} = await pool.query('SELECT * FROM messages WHERE id = $1',[id]);
    return rows

}

async function createNewMsg(msg){
    await pool.query('INSERT INTO messages (username ,created_at ,text ) VALUES ($1 ,$2 ,$3 ) ',[msg.username, msg.added, msg.text])
}