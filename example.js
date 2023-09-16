const ol = document.querySelector('ol')
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")
const li6 = document.createElement("li")


const heading = document.querySelector("h2")
const phrase  = heading.textContent


ol.append(li1)
ol.append(li2)
ol.append(li3)
ol.append(li4)
ol.append(li5)
ol.append(li6)


li1.textContent = phrase.toUpperCase()
li2.textContent = phrase.replace('fox' , 'parrot')
li3.textContent = phrase.replace('dog' , 'eagle')
// li2.textContent = text.toUpperCase(`the quick brown crow jumps over the lazy eagle`)
li4.textContent  = phrase.slice(0, 20)
li5.textContent  = phrase.slice(20, 43)
li6.textContent  = phrase.indexOf('over')

