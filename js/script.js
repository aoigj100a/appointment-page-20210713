const getItems = document.querySelectorAll(".type-item")
const board = document.querySelector("#board")
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
          tpyeToBoard(item)
        })
      }
  })
function tpyeToBoard(item) {
  temp.push(item.dataset.name)
  board.innerText = temp.join("")
  return temp.slice("")
}
function backNextText() {
  if (temp.length <= 1 || temp.length === 12) {
    temp = "請用畫面鍵盤輸入電話號碼"
    board.innerText = temp
    return temp = []
  } else {
    temp.pop()
    board.innerText = temp.join("")
    return temp.slice("")
  }
}
function clearBoard() {
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