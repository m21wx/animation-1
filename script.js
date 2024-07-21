


		let anmated=document.querySelector('.animation-1 .container')




function boxAnmated(n){
			for(let i =0; i<n ;i++){
			let divs= document.createElement('div');
			divs.classList.add('box')
			let scale= Math.random() * 2 + 1;
			divs.style.scale=scale
			divs.style.setProperty("--x",Math.random() * 400 -  200+'px')
			divs.style.setProperty("--y",Math.random() *400 -  200+'px')
		
			divs.addEventListener('mouseover',(e)=>{
				
				setTimeout(()=>{
					divs.remove()
				},0)
			})
			anmated.appendChild(divs)
			
		}

}


	boxAnmated(10)


let input = document.querySelector('.animation-1 .container .number input')
  input.addEventListener('input',()=>{
	 document.querySelectorAll('.animation-1 .container .box').forEach(e=>{
		 e.remove()
	 })
	  let value = Number(input.value);
	  if(value < 200){
		  boxAnmated(value)
	  }else{
		 window.alert('لا يمكن الرقم اكبر من 200');

	  }
		

  })

