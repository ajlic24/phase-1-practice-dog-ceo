// console.log('%c HI', 'color: firebrick')
document.addEventListener(`DOMContentLoaded`, () => {
    const div = document.getElementById(`dog-image-container`)
    const dogBreeds = document.getElementById(`dog-breeds`)
    fetch(`https://dog.ceo/api/breeds/image/random/4`)
    .then(resp => resp.json())
    .then(data => {
        data.message.map(img => {
            let image = document.createElement(`img`)
            image.setAttribute(`src`, img)
            div.appendChild(image)
        })
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
        let dog = data.message
        for (breed in dog) {
            const li = document.createElement(`li`)
            li.className = 'breeds'
            li.textContent = breed
            dogBreeds.appendChild(li)
            
        }
        const breeds = document.getElementsByClassName(`breeds`)
        const breedsArray = Array.from(breeds)
        breedsArray.forEach(item => {
            item.addEventListener(`click`, () => {
                item.style = `color:red;`
            })
        })
        
        const showOrHide = (letter) => {
            breedsArray.forEach(item => {
                if(item.textContent[0] === letter) {
                    item.style = 'display: block;'
                } 
                else {
                    item.style = 'display: none;'
                }
            })
        }
        showOrHide()
        const select = document.getElementById(`breed-dropdown`)
        select.addEventListener(`change`, function() {
            let letter = this.value
            showOrHide(letter)
            }
        )
    })
        
    })

    
