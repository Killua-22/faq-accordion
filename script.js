function toggleanswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector(".plusorminus");

    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        icon.src = "./assets/images/icon-minus.svg";
        
    } else {
        answer.style.display = "none";
        icon.src = "./assets/images/icon-plus.svg";
       
    }
}