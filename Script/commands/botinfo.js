module.exports.config = {
	name: "botinfo",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Alvi Chowdhury", //don't change the credits please
	description: " Bot info.",
	commandCategory: "system",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/gSW285Z.gif"];
var callback = () => api.sendMessage({body:`╭──────•◈•───────╮\n         𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁       \n\n\n☄️𝘽𝙊𝙏𝙉𝘼𝙈𝙀☄️ »» ${global.config.BOTNAME}\n🌸𝙋𝙍𝙀𝙁𝙄𝙓🌸  »» ${global.config.PREFIX} ««\n\n🥳𝙐𝙋𝙏𝙄𝙈𝙀🥳\n\n𝑫𝑨𝑻𝑬 𝑨𝑵𝑫 𝑻𝑰𝑴𝑬 \n${juswa}\n\n⚡𝘽𝙊𝙏 𝙄𝙎 𝙍𝙐𝙉𝙉𝙄𝙉𝙂⚡ \n🕛${hours}:${minutes}:${seconds}🕧\n\n  BOT OWNER 𝗠𝗥. 𝗣𝟰𝗥𝟰𝗗𝟬𝗫 \n╰──────•◈•───────╯`,attachment: fs.createReadStream(__dirname + "/cache/juswa1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa1.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/juswa1.jpg")).on("close",() => callback());
   };
