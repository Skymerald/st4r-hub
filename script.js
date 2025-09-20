const target = document.querySelector('.slogan');
let menuString = ["ST4R MENU","<br/>","<h3 class='menu-item active'>Home</h3>","<br/>","<h3 class='menu-item'>About</h3>","<br/>","<h3 class='menu-item'>Contact</h3>","<br/>", "<h3 class='menu-item'>Credits</h3>", "<br/>"];
const menuLink = ["index.html", "about.html", "contact.html", "credits.html"];

let entered = false;

let typeWriter = new Typewriter(target, {
    loop:true,
    cursor: "█",
})
typeWriter
    .typeString("Innovation onboard")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1000)
    .typeString("Web development")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1000)
    .typeString("Professional software")
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
                if(index < menuLink.length-1){
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
    return new Promise(async (resolve) => {
        await deleteText(target);

        let menuTypeWriter = new Typewriter(target, {
            loop: false,
            cursor: "█",
            delay: 75
        });

        menuTypeWriter
            .deleteAll()
            .typeString(menuString.join(""))
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
    return new Promise(async (resolve) => {
        let text = target.innerText; // Get the current text
        while (text.length > 0) {
            text = text.slice(0, -1); // Remove the last character
            target.innerText = text + "█"; // Add the cursor back
            await wait(60); // Wait 100ms before deleting the next character
        }
        resolve();
    });
    
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function updateMenuIndicator() {
    const currentURL = window.location.href; // Get the current page URL

    // Loop through the menuLink array to find a match
    menuLink.forEach((link, index) => {
        // Check if the current URL includes the link or is the homepage
        if (currentURL.includes(link) || (link === "index.html" && currentURL.endsWith("/"))) {
            // Check if the indicator is already present
            if (!menuString[index * 2 + 2].includes("# here")) {
                // Add the "actual" indicator to the corresponding menuString
                menuString[index * 2 + 2] = menuString[index * 2 + 2].replace(
                    "</h3>",
                    "</h3><h3 class='comment'># here</h3>"
                );
            }
        }
    });
}

// Call the function on page load
window.addEventListener("DOMContentLoaded", updateMenuIndicator);
window.addEventListener("keypress", showMenu);
