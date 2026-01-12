//handle dialog events!
const newMsgBtn = document.getElementById('msg-add');
const msgDialog = document.getElementById('msg-dialog');
const closeDialog =document.getElementById('msg-close');
newMsgBtn.addEventListener('click',()=>{
    msgDialog.showModal();
})
msgDialog.addEventListener('close',()=>{
    msgDialog.close();
})
closeDialog.addEventListener('click',()=>{
    msgDialog.close();
})


