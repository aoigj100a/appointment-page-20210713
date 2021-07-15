// 取得按鈕元素 設置待會要用的變數
const getItems = document.querySelectorAll(".type-item")
const typeItemList = [...getItems]
const typeWrap = document.querySelectorAll("#typeWrap .type-item")
let board = document.querySelector("#board")
let items = []
let temp = []

// 1.綁上id 2.綁上 data-name 3.使用 if 判斷式來做篩選功能
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
  board.innerHTML = temp
  return temp
}

function backNextText() {
  (temp.length === 0) ? temp = "請用畫面鍵盤輸入電話號碼" : temp.pop()
  board.innerHTML = temp
  return temp
}

function clearBoard() {
  (board.innerHTML === "請用畫面鍵盤輸入電話號碼") ? temp = [] : temp = "請用畫面鍵盤輸入電話號碼"
  board.innerHTML = temp
  return temp = []
}
