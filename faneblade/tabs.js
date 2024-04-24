const buttons = document.querySelectorAll(".tabs-header button")
const destinations = document.querySelectorAll(".tab-dest li")

console.log(destinations)
buttons.forEach(function(element, index){
    
    element.onclick = function(){
      
        destinations.forEach(function(element){
            element.style.display= "none"
        })

        destinations[index].style.display="block"
    }
})