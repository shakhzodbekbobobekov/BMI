const elUserName = document.getElementById('nameEl')
let elUserWeigth = document.getElementById('weightEl')
let elUserHeigth = document.getElementById('heightEl')
let elBtn = document.getElementById('btnEl')
const whitedrop = document.querySelector('.whitedrop')
const thin = document.querySelector('.thin')
const normal = document.querySelector('.normal')
const fat = document.querySelector('.fat')
const veryFat = document.querySelector('.fat-very')
const ismKeladi1 = document.getElementById('ismKeladi1')
const ismKeladi2 = document.getElementById('ismKeladi2')
const ismKeladi3 = document.getElementById('ismKeladi3')
const ismKeladi4 = document.getElementById('ismKeladi4')




elBtn.addEventListener('click', function(e) {
    e.preventDefault()
    
    elUserWeigth = Number(elUserWeigth.value)
    elUserHeigth = Number(elUserHeigth.value)
    console.log({ elUserHeigth,elUserWeigth})
    
    formulaEl = ( elUserWeigth / ( elUserHeigth * elUserHeigth ) ).toFixed(1)

    if( formulaEl <=  18.5 ) {
        // console.log('siz juda oriqsiz')
        ismKeladi1.textContent = elUserName.value
        thin.style.display = 'block'
        whitedrop.style.display = 'block'        
        
    } else if( ( formulaEl > 18.5 )  &&  ( formulaEl <=  24.9 ) ) {
        
        // console.log('siz normalsiz')
        ismKeladi2.textContent = elUserName.value
        normal.style.display = 'block'
        whitedrop.style.display = 'block'
    
    } else if( ( formulaEl >= 25 ) && ( formulaEl <=  29.9 ) ) {
    
        ismKeladi3.textContent = elUserName.value
        fat.style.display = 'block'
        whitedrop.style.display = 'block'
    
    } else if ( formulaEl >= 30 ){
        // console.log('siz utsa semizsiz.')
        ismKeladi4.textContent =  elUserName.value
        veryFat.style.display = 'block'
        whitedrop.style.display = 'block'
    }
})

whitedrop.addEventListener('click', function() {
    thin.style.display = 'none'
    normal.style.display = 'none'
    fat.style.display = 'none'
    veryFat.style.display = 'none'
    whitedrop.style.display = 'none'
})      