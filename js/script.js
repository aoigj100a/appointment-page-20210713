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

class TypeWriter {
  constructor() {
    this.board = $("#board"),
    this.boardContent = $("#board").html(),
    this.action = {

      getVal: n => $(items[n]).attr("deta-name"),
      tpyeToBoard: (Val) => {
          let newContent = this.board.html(Val)
          return newContent
        },
      backNextText: () => {
          let newTextArr = this.boardContent.split('')
          let removedContentArr = newTextArr.pop()
          let newBoardContent = newTextArr.join('')
          return newBoardContent
        },
        clearBoard: ()=>{
        let newTextArr = this.boardContent.html("")
        return newTextArr
        },
      }
  }
  init(){
    const self = this
  }
}

items[0].click(()=>{

  console.log(TypeWriter)
  // alert('ok')

})