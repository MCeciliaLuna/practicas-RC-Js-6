function saludo() {
  alert('hola mundo!')
}

saludo() // función anónima


function suma(num1, num2) {
  const resultado = num1 + num2
  console.log(resultado)
}

suma(10, 30) // nombres de parámetros toman valores que luego se mencionan en la función anónima


function saludo2(nombre, apellido) {
  alert(`Hola ${nombre} ${apellido}`)
}

const num1 = parseInt(prompt('Ingrese un número'))
const num2 = parseInt(prompt('Ingrese un número'))

function resta(num1, num2) {
  const res = num1 - num2
  document.write(res)
}

resta(num1, num2)


function saludo() {
  const nombre = prompt('Ingrese su nombre')
  const apellido = prompt('Ingrese su apellido')

alert(`Hola ${nombre} ${apellido}`)
}


const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun']

meses.map((mes) => console.log(mes))

// (params) => {
// }
// mes.map((mes, i) => {
// })

meses.map((mes, i) => {
  if (i <= 2) {
    console.log(mes)
  }
})


const personas =[
  {
    nombre: 'Ceci',
    edad: 24,
    dni: 41000000
  },
  {
    nombre: 'Nico',
    edad: 36,
    dni: 40000000
  },
  {
    nombre: 'Elias',
    edad: 27,
    dni: 50000000
  }  
]

const menores30 = personas.filter(persona => persona.edad < 30)
console.log(menores30)



const usuario = personas.find(persona => persona.dni == 40000000)
console.log(usuario)


const isPersona = personas.some(persona => persona.nombre == 'Ceci')
console.log(isPersona)


const mensaje = personas.map(persona => console.log(`Hola ${persona.nombre}, de ${persona.edad}, de dni: ${persona.dni}. Gracias por entrar a mi página`))