const  spies = document.querySelectorAll('[data-spy]');
const  abouts = document.querySelectorAll('.about-section');
const threshold = .6;

console.log(abouts);
if (abouts.length>0) {
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(function (entry) {
            console.log(entry.target);
            // spies[0].classList.remove('d-none')

            
        })
    }, {})
    abouts.forEach(function(about){
        observer.observe(about)
    })
    
}

// spies[0].classList.remove('d-none')



// const anime = function (elt) {
//     elt.animate(
//         {
//             opacity: [0, 0.5, 0.8, 1],
//             offset: [0, 0.8],
//             easing: ["ease-out"]
//         }, 1500,
//     );
    
// }

// const callback = (entries, observer)=>{
//     entries.forEach(function(entry){
//         if (entry.intersectionRatio > 0) {
            
//             anime(entry.target);
            
//         }
//     })
    
// }

// if(spies.length > 0){
//     const observer = new IntersectionObserver(callback, {
       
//     })
//     spies.forEach(function(spy){
//         observer.observe(spy)
//     })
// }