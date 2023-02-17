window.onload = () => {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", clickEvent);
};

function clickEvent() {
    const name = document.getElementById("inputName");
    const checkbox = document.getElementsByClassName("checkbox");
    const children = checkbox[0].children;
    let count = 0;

    for (i = 0; i < children.length; i++) {
        console.log(children[i]);
        if (children[i].checked) {
            count++;
        }
    }

    alert(`${name.value}, 저와 ${count}개의 취향이 같으시네요!`);
}
