const form = document.querySelector("#mainForm");
const username = document.querySelector("#username");
const useremail = document.querySelector("#useremail");
const usernumber = document.querySelector("#usernumber");
const mainFormOne = document.querySelector(".formText1");
const mainFormTwo = document.querySelector(".formText2");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const numberformat = /^\d{11}$/;
const circle1 = document.querySelector("#circle1");
const circle2 = document.querySelector("#circle2");
const circle3 = document.querySelector("#circle3");
const circle4 = document.querySelector("#circle4");
const mainFormThree = document.querySelector(".formText3");
const form2 = document.querySelector("#mainForm2");
const checkPlan = document.querySelector("#flexSwitchCheckDefault");
const formButton2 = document.querySelector("#formButton2");
const redioText1 = document.querySelector(".radioText1");
const redioText2 = document.querySelector(".radioText2");
const redioText3 = document.querySelector(".radioText3");
const btn2Prev = document.querySelector("#btn2Prev");
const form3 = document.querySelector("#mainForm3");
const form4 = document.querySelector("#mainForm4");
const mainFormFour = document.querySelector(".formText4");
mainFormTwo.style.display = "none";
mainFormThree.style.display = "none";
mainFormFour.style.display = "none";
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username.value.length >= 5) {
        if (useremail.value.match(mailformat)) {
            if (usernumber.value.match(numberformat)) {
                usernumber.style.backgroundColor = "transparent";
                usernumber.style.color = "black";
                usernumber.blur();
                setTimeout(() => {

                    mainFormOne.style.display = "none";
                    mainFormTwo.style.display = "block";
                    formTwoCheck();
                }, 0)
            }
            else {
                console.log("must be a valid phone number");
                usernumber.style.backgroundColor = "#dc3545";
                usernumber.style.color = "white";
                usernumber.focus();
            }
            useremail.style.backgroundColor = "transparent";
            useremail.style.color = "black";
            useremail.blur();
        }
        else {
            console.log("must be a valid email");
            useremail.style.backgroundColor = "#dc3545";
            useremail.style.color = "white";
            useremail.focus();
        }
        username.style.backgroundColor = "transparent";
        username.style.color = "black";
        username.blur();
    } else {
        console.log("username must be 5 chracters");
        username.style.backgroundColor = "#dc3545";
        username.style.color = "white";
        username.focus();
    }
});
const selectRadioCard = (cardNo) => {
    const allRadioCards = document.querySelectorAll(".radio-card");
    allRadioCards.forEach((element, index) => {
        element.classList.remove(["selected"]);
    });
    const selectedCard = document.querySelector(".radio-card-" + cardNo);
    selectedCard.classList.add(["selected"]);
};
function formTwoCheck() {
    circle1.classList = "circleText2";
    circle2.classList = "circleText";
    form2.addEventListener("submit", (e) => {
        e.preventDefault();
    })
    btn2Prev.addEventListener("click", () => {
        mainFormTwo.style.display = "none";
        mainFormOne.style.display = "block";
        circle2.classList = "circleText2";
        circle1.classList = "circleText";
    });
    formButton2.addEventListener("click", () => {
        mainFormTwo.style.display = "none";
        mainFormThree.style.display = "block";
        circle3.classList = "circleText";
        circle2.classList = "circleText2";
        formThreeCheck();
    })
    checkPlan.addEventListener("click", () => {
        if (checkPlan.checked) {
            redioText1.textContent = "$90/Yearly";
            redioText2.textContent = "$120/Yearly";
            redioText3.textContent = "$150/Yearly";
        }
        else {
            redioText1.textContent = "$9/monthly";
            redioText2.textContent = "$12/monthly";
            redioText3.textContent = "$15/monthly";
        }

    });
}

function formThreeCheck() {
    const btn3Prev = document.querySelector("#btn3Prev");
    const formButton3 = document.querySelector("#formButton3");
    form3.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    btn3Prev.addEventListener("click", () => {
        mainFormThree.style.display = "none";
        mainFormTwo.style.display = "block";
        circle3.classList = "circleText2";
        circle2.classList = "circleText";
    });
    formButton3.addEventListener("click", () => {
        mainFormThree.style.display = "none";
        mainFormFour.style.display = "block";
        circle4.classList = "circleText";
        circle3.classList = "circleText2";
        formFourCheck();
    });
}

function formFourCheck() {
    const btn4Prev = document.querySelector("#btn4Prev");
    const formButton4 = document.querySelector("#formButton4");
    form4.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    btn4Prev.addEventListener("click", () => {
        mainFormThree.style.display = "block";
        mainFormFour.style.display = "none";
        circle4.classList = "circleText2";
        circle3.classList = "circleText";
    });
    formButton4.addEventListener("click", () => {
        mainFormFour.textContent = "Thank YOu! u have subscribed the For the Purchased items. "
    });

}


