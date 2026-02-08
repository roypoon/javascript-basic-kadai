const today = new Date();

const month = today.getMonth()+1 

const getDate = () => {
  console.log(today.getFullYear() + "年" + month + "月" + today.getDate() + "日");
}

getDate()