function funcao1(){
    const elemento = document.getElementsByClassName("section3")
    elemento.classList.add('sectionAnimation')
}
function funcao2(){
    const elemento1 = document.querySelector(".section4")
    elemento1.classList.add('sectionAnimation')
}
function funcao3(){
    const elemento2 = document.querySelector(".section4")
    elemento2.classList.add('sectionAnimation')
}

const elementosObservados = document.querySelectorAll('.observado');

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            const id = entry.target.getAttribute('data-id');
            if ( id === "1"){
                funcao1()
            }
            else if ( id === "2"){
                funcao2()
            }
            else if ( id === "3"){
                funcao3()
            }
            observer.unobserve(entry.target);
        }
    })
})

elementosObservados.forEach(elemento => observer.observe(elemento))
