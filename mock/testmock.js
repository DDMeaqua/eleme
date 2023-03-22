const Mock = require("mockjs");
let obj = Mock.mock({
  id: "@id",
  username: "@cname",
  time: "@datetime()",
  email:"@email",
  ip:"@ip"
});
console.log(obj);
