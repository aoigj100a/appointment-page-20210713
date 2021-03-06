const getItems = document.querySelectorAll(".type-item")
const board = document.querySelector("#board")
const confirmBtn = document.querySelector("#confirm")
let temp = []

getItems.forEach((item, index) => {
  item.setAttribute('id', index)
  if (index === 9) {
    item.addEventListener('click', () => {
      clearBoard()
    })
  } else if (index === 11) {
    item.addEventListener('click', () => {
      backNextText()
    })
  } else {
    item.addEventListener('click', () => {
      typeToBoard(item)
    })
  }
})
confirmBtn.addEventListener("click", () => {
  if (confirmPhone(board.innerText)) {
    location.replace("https://aoigj100a.github.io/appointment-page-20210713/info")
  } else {
    let msg
    (board.innerText === "請用畫面鍵盤輸入電話號碼") ? msg = "這" : msg = board.innerText
    Swal.fire({
      title: '錯誤！',
      text: `${msg}不是一個合法的電話號碼！`,
      icon: 'error',
      confirmButtonText: '知道了'
    })
    clearBoard()
  }
})

function typeToBoard(item) {
  if (temp.length < 10) {
    temp.push(item.dataset.name)
    board.innerText = temp.join("")
    board.classList.add("typing")
    return temp.slice("")
  } else {
    Swal.fire({
      title: '錯誤！',
      text: "不能超過10個號碼喔！",
      icon: 'error',
      confirmButtonText: '知道了'
    })
    clearBoard()
  }

}
function backNextText() {
  if (temp.length <= 1 || temp === "請用畫面鍵盤輸入電話號碼") {
    board.classList.remove("typing")
    temp = "請用畫面鍵盤輸入電話號碼"
    board.innerText = temp
    return temp = []
  } else {
    board.classList.add("typing")
    temp.pop()
    board.innerText = temp.join("")
    return temp.slice("")
  }
}
function clearBoard() {
  board.classList.remove("typing")
  temp = "請用畫面鍵盤輸入電話號碼"
  board.innerText = temp
  return temp = []
}
function confirmPhone(phoneNumber) {
  // 手機、市話、市話加分機
  const reg = new RegExp(/^(0\d{1,2})-?(\d{6,7})(#\d+)?$/);
  return reg.test(phoneNumber);
};
function confirmIdCard(cardNumber) {
  const reg = new RegExp(/^[a-zA-Z]\d{9}$/);
  console.log(reg.test(cardNumber))
};