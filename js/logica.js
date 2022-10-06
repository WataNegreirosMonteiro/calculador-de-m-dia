function Calcular_Nota(nota1,nota2,nota3,nota4){
    nota1=parseFloat(document.getElementById("nota01").value)
    nota2=parseFloat(document.getElementById("nota02").value)
    nota3=parseFloat(document.getElementById("nota03").value)
    nota4=parseFloat(document.getElementById("nota04").value)
    document.getElementById("resultado").innerHTML=`Media final: ${(nota1+nota2+nota3+nota4)/4}`
}