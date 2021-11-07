const generateRandomId = () => {
  let randomId = [];
  
  for (let i = 0; i < 4; i++) {
    const group = Math.random().toString(36).substr(2, 4);
    randomId.push(group)
  }

  return randomId.join("-");
};

let id = generateRandomId()

console.log(id);
