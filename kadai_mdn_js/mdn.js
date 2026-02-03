const today = new Date("2026-02-03");

const getDate = () => {
  console.log(today.getFullYear() + "年" + today.getMonth() + "月" + today.getDate() + "日");
}

getDate()