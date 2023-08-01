const area_triangulo = require('../apps/area_triangulo.js');
const verificar_numero = require('../apps/verificar_numero.js');
const redondear_numero = require('../apps/redondear_numero.js');
const contiene_letra = require('../apps/contiene_letra.js');
const cant_caracteres = require('../apps/cant_caracteres.js');
const ultimo_elemento = require('../apps/ultimo_elemento.js');


test('La funcion area_triangulo funciona', () => {
    expect(area_triangulo(10,2)).toBe(10)
})

test('La funcion verificar_numero funciona cuando el numero es positivo', () => {
    expect(verificar_numero(2)).toBe('positivo')
})

test('La funcion verificar_numero funciona cuando el numero es positivo', () => {
    expect(verificar_numero(-5)).toBe('negativo')
})

test('La funcion verificar_numero funciona cuando el numero es positivo', () => {
    expect(verificar_numero(0)).toBe('cero')
})

test('La funcion redondear_numero funciona', () => {
    expect(redondear_numero(3,4)).toBe(3)
})

test('La funcion contiene_letra funciona cuando contiene a', () => {
    expect(contiene_letra('estudiante')).toBe(true)
})

test('La funcion contiene_letra funciona cuando no contiene a', () => {
    expect(contiene_letra('perro')).toBe(false)
})

test('La funcion cant_caracteres funciona', () => {
    expect(cant_caracteres('limalaya')).toBe(8)
})

test('La funcion ultimo_elemento funciona con numeros', () => {
    expect(ultimo_elemento([5,4,5,6,1,0])).toBe(0)
})

test('La funcion ultimo_elemento funciona con palabras', () => {
    expect(ultimo_elemento(['camisa', 'zanahoria', 'animal'])).toBe('animal')
})