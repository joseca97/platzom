
const expect = require('chai').expect
const platzom = require('../lib/src/platzom.js').default

describe('#platzom', function () {

	it('Si la palabra termina en "ar" se le quitan los dos caracteres', function () {
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")
		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})

	it('Si la palabra tiene 10 o mas letras se debe partir por la mitad y unir con un guión', function () {
		const translation = platzom("Abecedario")
		expect(translation).to.equal("Abece-dario")
	})

	it('Si la palabra orginal es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayus y minus', function () {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})

})