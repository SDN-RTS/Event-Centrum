function navigation(){
    let checkbox = document.querySelector("#check");
    let menuIcon = document.querySelector("#burger-icon");

    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            menuIcon.classList = "fas fa-times";
        } else {
            menuIcon.classList = "fas fa-bars";
        }
    })

}
export default navigation;