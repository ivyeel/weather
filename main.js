const request = require("request");
const dotenv =require("dotenv").config();

const arguement = process.argv[2];

const options = {
    url : `https://api.openweathermap.org/data/2.5/weather?q=${arguement}&units=metric&appid=${process.env.API_KEY}`,//units=metric で摂氏温度に変換
    method: "GET",
    json: true,
};

//APIキーを叩く
request(options, (error, res, body) => {
    console.log(`現在の${arguement}の気温は${body.main.temp}です．`);//console.log(body.main.temp)
});

console.log(process.argv);

// console.log(process.argv[2]);//第一引数，第二引数などの情報を確認
