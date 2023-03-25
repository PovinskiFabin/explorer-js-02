const students = [
  {
    name: "Angela",
    n1: 8,
    n2: 9
  },
  {
    name: "Paulo",
    n1: 7,
    n2: 5
  },
  {
    name: "Andre",
    n1: 9,
    n2: 6
  },
  {
    name: "Katia",
    n1: 5,
    n2: 6
  },
]

function average(value1, value2) {
  return ((value1 + value2) / 2).toFixed(2)
}

function positive(person) {
  return ` A média do(a) aluno(a) ${person.name} é: ${average(person.n1, person.n2)} \n Parabéns ${person.name}! Você foi aprovado(a) no concurso!
  `
}

function negative(person) {
  return ` A média do(a) aluno(a) ${person.name} é: ${average(person.n1, person.n2)} \n Não foi dessa vez, ${person.name}! Tente novamente!
  `
}

for (let student of students) {
  if(average(student.n1, student.n2) >= 7) {
    alert(positive(student))
  } else {
    alert(negative(student))
  }
}