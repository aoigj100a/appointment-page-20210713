// 取得按鈕元素 設置待會要用的變數
const getItems = document.querySelectorAll(".type-item")
const typeItemList = [...getItems]
let board = document.querySelector("#board")
let items = []
let temp = []
// 1.綁上id 2.綁上 data-name 3.使用 if 判斷式來做篩選功能 4.綁上事件監聽器
typeItemList.forEach((odj, index) => {

  items[index] = odj
  items[index].setAttribute('id', index)
  items[index].dataset.name = index + 1

  if (index === 9) {
    items[index].dataset.name = "清空"
    items[index].addEventListener('click', () => {
      clearBoard()
    })
  } else if (index === 11) {
    items[index].dataset.name = "退回"
    items[index].addEventListener('click', () => {
      backNextText()
    })
  } else if (index === 10) {
    items[index].dataset.name = 0
    items[index].addEventListener('click', () => {
      tpyeToBoard(items[index])
    })
  } else {
    items[index].addEventListener('click', () => {
      tpyeToBoard(items[index])
    })
  }
})
function tpyeToBoard(item) {
  temp.push(item.dataset.name)
  board.innerText = temp.join("")
  console.log(temp)
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