
//login button handle
const loginBtn = document.getElementById('loginID');
loginBtn.addEventListener('click',function(event) {
    console.log('Entered Success');
    const loginArea=document.getElementById('login-area');loginArea.style.display='none';
    const transArea=document.getElementById('transection-area').style.display='block';
})

//deposit button handle
    const depositBtn = document.getElementById('add').addEventListener('click',function(event){
    const depositNumber=number('addin');
    // const depositAmount=document.getElementById('addin').value;
    // const depositNumber=parseFloat(depositAmount);

    updateSpanText('currentIn',depositNumber);
    // const currentInAmount=document.getElementById('currentIn').innerText;
    // const currentInNumber=parseFloat(currentInAmount);
    // document.getElementById('currentIn').innerText=depositNumber+currentInNumber;
    updateSpanText('currentSave',depositNumber);
    // const currentSaveAmount=document.getElementById('currentSave').innerText;
    // const currentSaveNumber=parseFloat(currentSaveAmount);
    // document.getElementById('currentSave').innerText=depositNumber+currentSaveNumber;

    document.getElementById('addin').value='';

})
//withdraw button handle
    const withdrawBtn = document.getElementById('sub').addEventListener('click',function(event){

    const withdrawNumber=number('subin');
    // const withdrawAmount=document.getElementById('subin').value;
    // const withdrawNumber=parseFloat(withdrawAmount);

    updateSpanText('currentOut',withdrawNumber);
    // const currentOutAmount=document.getElementById('currentOut').innerText;
    // const currentOutNumber=parseFloat(currentOutAmount);
    // document.getElementById('currentOut').innerText=withdrawNumber+currentOutNumber;
    updateSpanText('currentSave',-1*withdrawNumber);
    // const currentSaveAmount=document.getElementById('currentSave').innerText;
    // const currentSaveNumber=parseFloat(currentSaveAmount);
    // document.getElementById('currentSave').innerText=currentSaveNumber-withdrawNumber;

    document.getElementById('subin').value='';

})

function number(id){
    const Amount=document.getElementById(id).value;
    const dwNumber=parseFloat(Amount);
    return dwNumber;
}

function updateSpanText(id,dwNumber){
    const currentAmount=document.getElementById(id).innerText;
    const currentNumber=parseFloat(currentAmount);
    document.getElementById(id).innerText=dwNumber+currentNumber;
}
