const btnWork = document.getElementById('btn-work');
const btnCivil = document.getElementById('btn-civil');
const btnPenal = document.getElementById('btn-penal');
const btnCom = document.getElementById('btn-com');
const areaText = document.getElementById('sol-area');


btnWork.addEventListener('click',()=>{
    areaText.innerHTML = 'Direito Trabalhista';
})
btnCivil.addEventListener('click',()=>{
    areaText.innerHTML = 'Direito Civil';
})
btnPenal.addEventListener('click',()=>{
    areaText.innerHTML = 'Direito Penal';
})
btnCom.addEventListener('click',()=>{
    areaText.innerHTML = 'Direito Empresarial';
})