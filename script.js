
let students = [
    {
        name: "Joao!",
        notaUm: 8,
        notaDois: 7,
    },
    {
        name: "Fracisco",
        notaUm: 5,
        notaDois: 7,
    },
    {
        name: "Romulo",
        notaUm: 8,
        notaDois: 10,
    },
    {
        name: "Maria",
        notaUm: 3,
        notaDois: 6,
    },
];


function media(notaUm,notaDois) {
    let average =(student.notaUm + student.notaDois)/ 2;
    return average
}

for(student of students){
    mediaIndividual = media(student.notaDois, student.notaDois)
    let resultado = mediaIndividual < 7 ? "Infelizmente não foi dessa vez, estude mais!" : `Parabens pela sua aprovação!`
    alert(`A média de ${student.name} é ${mediaIndividual} .
    ${resultado}`)
}
console.log(mediaIndividual)
