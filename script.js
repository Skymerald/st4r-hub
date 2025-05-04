const target = document.querySelector('.slogan');
const menuString = "ST4R MENU\n<h3 class='menu-item active'>Home</h3>\n<h3 class='menu-item'>About</h3>\n<h3 class='menu-item'>Contact</h3>\n<h3 class='menu-item'>Projects</h3>\n";
const menuLink = ["index.html", "about.html", "contact.menu", "projects.html"];

let entered = false;

let typeWriter = new Typewriter(target, {
    loop:false,
    cursor: "█",
})
typeWriter
    .typeString("Innovation starts here")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1000)
    .typeString("Web development")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1000)
    .start()

async function showMenu(e){
    if(e.key ==="Enter" && entered == false){
        entered = true;
        typeWriter
            .deleteAll()
            .stop()

        // Delete the current text with the typewriter effect
        await typeMenu();

        let menuItems = await document.querySelectorAll('.menu-item');
        let index = 0;
        window.addEventListener("keydown", function(e){
            if(e.key === "ArrowDown"){
                if(index < 3){
                    index++;
                    setActive(menuItems[index]);
                    setUnactive(menuItems[index-1]);
                }
            } else if (e.key === "ArrowUp"){
                if(index > 0){
                    index--;
                    setActive(menuItems[index]);
                    setUnactive(menuItems[index+1]);
                }
            } else if(e.key === "Enter"){
                window.location.href = menuLink[index];
            }
        });
    }
    
        
}
async function typeMenu() {
    return new Promise((resolve) => {
        let menuTypeWriter = new Typewriter(target, {
            loop: false,
            cursor: "█"
        });

        menuTypeWriter
            .deleteAll()
            .typeString(menuString)
            .callFunction(() => {
                resolve("Menu typed!"); // Resolve the promise when typing is complete
            })
            .start();
    });
}
function setActive(element){
    element.classList.add("active");
}
function setUnactive(element){
    element.classList.remove("active");
}
async function deleteText(target) {
    let text = target.innerText; // Get the current text
    while (text.length > 0) {
        text = text.slice(0, -1); // Remove the last character
        target.innerText = text + "█"; // Add the cursor back
        await wait(100); // Wait 100ms before deleting the next character
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("keypress", showMenu);
