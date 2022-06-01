var convMap = new Map([
  ["ども！", "おせわになっております。"],
  ["マジで", "大変"],
  ["ごめんなさい", "申し訳ありません。"],
  ["ごめん", "申し訳ありません。"],
  ["before", "after"],
  ["before", "after"],
  ["before", "after"],
  ["before", "after"]
]);

function genTxt() {
  var txt = document.getElementById("befGen").value;
  // alert(txt);

  txt.split("").map(function(num){
    return convMap.hasOwnProperty(num) ? convMap[num] : num;
}).join("");

  document.getElementById("aftGen").value = txt;
}
