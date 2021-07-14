// 取得按鈕元素
const typeItemList = [...$(".type-item")]
let items = []

// 綁上 id 
typeItemList.forEach((odj, index) => {
  items[index] = $(typeItemList[index]).attr("id", index).attr("deta-name", index + 1)
})

// 修正 部分按鈕 deta-name
$(items[9]).attr("deta-name", "清空")
$(items[10]).attr("deta-name", 0)
$(items[11]).attr("deta-name", "退回")

// // 新增類別 Item
// let Item = new Object();
// Item.board = $("#board")
// Item.boardContent = $("#board").html()
// Item.action = {
//   getVal: n => $(items[n]).attr("deta-name"),
//   tpyeToBoard: (Val) => {
//     let newContent = Item.board.html(Val)
//     return newContent
//   },
//   backNextText: () => {
//     let newTextArr = Item.boardContent.split('')
//     let removedContentArr = newTextArr.pop()
//     let newBoardContent = newTextArr.join('')
//     return newBoardContent
//   },
//   cancel: () => {
//     //  這邊要放使用者取消 回到上一頁的動作
//   }
// }

// class TypeWriter {
//   constructor() {
//     this.board = $("#board"),
//     this.boardContent = $("#board").html(),
//     this.action = {

//       getVal: n => $(items[n]).attr("deta-name"),
//       tpyeToBoard: (Val) => {
//           let newContent = this.board.html(Val)
//           return newContent
//         },
//       backNextText: () => {
//           let newTextArr = this.boardContent.split('')
//           let removedContentArr = newTextArr.pop()
//           let newBoardContent = newTextArr.join('')
//           return newBoardContent
//         },
//         clearBoard: ()=>{
//         let newTextArr = this.boardContent.html("")
//         return newTextArr
//         },
//       }
//   }
//   init(){
//     const self = this
//   }
// }

let board = $("#board")
let temp =[]
items[0].click(() => {
  temp.push($(items[0]).attr("deta-name")) 
  board.html(temp)
  console.log(temp)
  return temp
})

items[1].click(() => {
  temp.push($(items[1]).attr("deta-name")) 
  board.html(temp)
  console.log(temp)
  return temp
})

items[2].click(() => {
  temp.push($(items[2]).attr("deta-name")) 
  board.html(temp)
  console.log(temp)
  return temp
})

items[3].click(() => {
  temp.push($(items[3]).attr("deta-name")) 
  board.html(temp)
  console.log(temp)
  return temp
})

items[4].click(() => {
  temp.push($(items[4]).attr("deta-name")) 
  board.html(temp)
  console.log(temp)
  return temp
})

items[5].click(() => {
  temp.push($(items[5]).attr("deta-name")) 
  board.html(temp)
  console.log(temp)
  return temp
})

items[6].click(() => {
  temp.push($(items[6]).attr("deta-name")) 
  board.html(temp)
  console.log(temp)
  return temp
})

items[7].click(() => {
  temp.push($(items[7]).attr("deta-name")) 
  board.html(temp)
  console.log(temp)
  return temp
})

items[8].click(() => {
  temp.push($(items[8]).attr("deta-name")) 
  board.html(temp)
  console.log(temp)
  return temp
})

items[9].click(() => {
  temp = []
  board.html('請用畫面鍵盤輸入電話號碼')
  console.log(temp)
  return temp
})

items[10].click(() => {
  temp.push($(items[10]).attr("deta-name")) 
  board.html(temp)
  console.log(temp)
  return temp
})

items[11].click(() => {
  temp.pop() 
  board.html(temp)
  console.log(temp)
  return temp
})