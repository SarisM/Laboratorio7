//Tomamos los elementos en pantalla.
const input = document.querySelector('input')
const add_btn = document.querySelector('.btn-add')
const ul = document.querySelector('ul')
const empty = document.querySelector('.empty')

//Agregamos un evento al boton de agregar tareas.
add_btn.addEventListener('click', e => {
	e.preventDefault()
	const text = input.value
	if (text !== '') {
		const li = document.createElement('li')
		li.className = 'list-item'
		const p = document.createElement('p')
		p.textContent = text
		p.style.fontSize = '20px'
		li.appendChild(p)
		li.appendChild(toggleTaskCompletion())
		ul.appendChild(li)
		input.value = ''
		empty.style.display = 'none'
	}
})

//Funcion para agregar un checkbox a cada tarea.
const toggleTaskCompletion = () => {
	const checkbox = document.createElement('input')
	checkbox.type = 'checkbox'

	checkbox.addEventListener('click', e => {
		const item = e.target.parentElement
		if (e.target.checked) {
			item.style.textDecoration = 'line-through'
			item.style.color = '#ccc'
		} else {
			item.style.textDecoration = 'none'
			item.style.color = 'black'
		}
		const items = document.querySelectorAll('li')
		if (items.length === 0) {
			empty.style.display = 'block'
		}
	})
	return checkbox
}
