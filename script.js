changePage = ({target})=>{
	let prevPage= document.querySelector('.page.select')
	if (target == prevPage || isEditing) return
		isEditing=true
	let targetPageNum = target.dataset.page
	let prevPageNum= prevPage.dataset.page
	let prevSlide = document.querySelector(`.why-different>.left:nth-child(${prevPageNum})`)
	let nextSlide = document.querySelector(`.why-different>.left:nth-child(${targetPageNum})`)
	if (+targetPageNum > +prevPageNum){
		nextSlide.style.transform='translateX(+300%)'
		prevSlide.style.transform='translateX(-300%)'
		setTimeout(()=>{
		prevSlide.classList.remove('select')
		nextSlide.classList.add('select')
		setTimeout(()=>{nextSlide.style.transform='translateX(0)'
		prevPage.classList.remove('select')
		target.classList.add('select')
		isEditing=false
	},20)},100)
	} else if (+targetPageNum < +prevPageNum){
		nextSlide.style.transform='translateX(-300%)'
		prevSlide.style.transform='translateX(+300%)'
		setTimeout(()=>{
		prevSlide.classList.remove('select')
		nextSlide.classList.add('select')
		setTimeout(()=>{nextSlide.style.transform='translateX(0)'
		prevPage.classList.remove('select')
		target.classList.add('select')
isEditing=false
	},20)},100)
}
}
let isEditing=false;



document.querySelectorAll('.page').forEach(item=>{
	item.addEventListener('click',changePage)
})

document.querySelectorAll('.link').forEach(item=>{
	item.addEventListener('click',({target})=>{
		let to=document.getElementById(target.dataset.to)
		to.scrollIntoView({behavior:'smooth'})
	})
})