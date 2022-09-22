import got from "./data.js"

// const characters=["STARKS","LANNISTERS","BARATHEONS","TRAGARYENS","GERYJOYS","TYRELLS","TULLYS",
// "REDWYNE","FREYS","ARRYNS","DOTHRAKIS"]
let characters=[]

got.houses.forEach(ele=>{
    characters.push(ele.name)
})


window.addEventListener('load',()=>{

    let lists=document.querySelector(".lists")
    let actors=document.querySelector(".characters")
    let input=document.getElementById("search-input")

    characters.forEach(character=>{
        let btn=document.createElement("button")
        btn.innerText=character
        btn.classList.add("btn")
        btn.id=character
        btn.onclick=()=>func(character)
        lists.appendChild(btn)
    })

    let houses=got.houses
    houses.forEach(house=>{
        let people=house.people
        
        people.forEach(person=>{
            let charDiv=document.createElement("div")
            charDiv.classList.add("character-div")
            charDiv.id=person.name

            let img=document.createElement("img")
            let para=document.createElement("p")
            let a=document.createElement("a")
            let head=document.createElement("h3")

            
            img.src=person.image
            img.alt=person.name
            para.innerText=person.description
            a.href=person.wikiLink
            a.innerText="KNOW MORE"
            head.innerText=person.name

            charDiv.appendChild(img)
            charDiv.appendChild(head)
            charDiv.appendChild(para)
            charDiv.appendChild(a)
            actors.appendChild(charDiv)
        })
    })
    
    input.addEventListener("keyup",(e)=>{
        while(actors.hasChildNodes()){
            actors.removeChild(actors.lastChild)
        }

        let houses=got.houses
        houses.forEach(house=>{
            let people=house.people
            people.forEach(person=>{
                let name=person.name
                // console.log("anything");
                if(name.includes(e.target.value)){
                    
                    let newDiv=document.createElement("div")
                    newDiv.classList.add("character-div")
                    newDiv.id=name
                    
                    let img=document.createElement("img")
                    let para=document.createElement("p")
                    let a=document.createElement("a")
                    let head=document.createElement("h3")
                    
                    
                    img.src=person.image
                    img.alt=name
                    para.innerText=person.description
                    a.href=person.wikiLink
                    a.innerText="KNOW MORE"
                    head.innerText=name
        
                    newDiv.appendChild(img)
                    newDiv.appendChild(head)
                    newDiv.appendChild(para)
                    newDiv.appendChild(a)
                    actors.appendChild(newDiv)
            
                }
            })
        })
    })

    // if(document.querySelector(".btn")){
    //     let btn=document.querySelector(".btn")
    //     let btnID=btn.id
    //     console.log(btnID);
    //     btn.addEventListener('click',(e)=>{
    //         console.log("<SOUVIK>");
    //         let btnID=btn.id
            
    //     })
    // }
    function func(name){
        while(actors.hasChildNodes()){
            actors.removeChild(actors.lastChild)
        }

        let houses=got.houses
        
        houses.filter(house=>{
            if(name===house.name){

                house.people.map(person=>{
                    let newDiv=document.createElement("div")
                newDiv.classList.add("character-div")
                newDiv.id=name
                    
                let img=document.createElement("img")
                let para=document.createElement("p")
                let a=document.createElement("a")
                let head=document.createElement("h3")
                    
                    
                img.src=person.image
                    img.alt=name
                    para.innerText=person.description
                    a.href=person.wikiLink
                    a.innerText="KNOW MORE"
                    head.innerText=name
        
                    newDiv.appendChild(img)
                    newDiv.appendChild(head)
                    newDiv.appendChild(para)
                    newDiv.appendChild(a)
                    actors.appendChild(newDiv)


                })
                
            }
        })
    }

})

