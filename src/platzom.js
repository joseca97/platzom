export default function platzom(str) {
	let translation = str

	// Si la palabra termina en 'ar' se le quitan los dos caracteres.
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2)
	}

	// Si la palabra inicia con Z, se le añade 'pe' al final
	if (str.toLowerCase().startsWith('z')){
		// translation = translation + 'pe'
		translation += 'pe'
	}

	// Si la palabra tiene 10 o mas letras se debe partir por la mitad
	// y unir con un guión.
	if(translation.length >= 10){
		const firstHalf = translation.slice(0, Math.round(translation.length / 2))
		const secondHalf = translation.slice(Math.round(translation.length / 2))
		translation = `${firstHalf}-${secondHalf}`
	}

	// Si la palabra orginal es un palíndromo,
	// ninguna regla anterior cuenta y se devuelve
	// la misma palabra intercalando mayus y minus.

	const reverse = (str) => str.split('').reverse().join('')

	function minMay (str) {
		const length = str.length
		let translation = ''
		let capitalize = true
		for (let i = 0; i < length; i++){
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}

	if(str == reverse(str)) {
		return minMay(str)
	}

	return translation
}
