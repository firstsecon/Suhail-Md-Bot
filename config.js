const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_18_10_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMzLFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDg1LFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgODcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA5NixcbiAgICAgICAgNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInp4T2d4cnZ0amFmRVhoSDBGK1BTY2oyTkxTYVptUjY0ejBka2REbDlLSWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE5MTU5NjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0ODAzQTk1RDhFRjQ3MEIxNTdDNjNGMjVGODJGQzlBNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc5MDAzMzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia1J5Ny1OeFFRYXFpUkx1RnlqNmwtUVwiLFxuICBcInBob25lSWRcIjogXCI3ZjQ4MjYyNC0yYmIwLTQxNGYtYTA4NC1jY2QwNTJlYmMwOGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICA5MyxcbiAgICAgIDE0NSxcbiAgICAgIDE5LFxuICAgICAgMjMzLFxuICAgICAgMjM1LFxuICAgICAgMzQsXG4gICAgICAyMzAsXG4gICAgICA0MSxcbiAgICAgIDM0LFxuICAgICAgMTk3LFxuICAgICAgMjExLFxuICAgICAgMTQzLFxuICAgICAgMjE5LFxuICAgICAgMjQ2LFxuICAgICAgODUsXG4gICAgICAxMjAsXG4gICAgICAxMTMsXG4gICAgICAxMTcsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTQ1LFxuICAgICAgMjUyLFxuICAgICAgMTcwLFxuICAgICAgMjE2LFxuICAgICAgMjEsXG4gICAgICAyMTYsXG4gICAgICA2MCxcbiAgICAgIDEzOSxcbiAgICAgIDc4LFxuICAgICAgMTQyLFxuICAgICAgMTM5LFxuICAgICAgMjgsXG4gICAgICAyNDYsXG4gICAgICAxODQsXG4gICAgICA3MCxcbiAgICAgIDc1LFxuICAgICAgMTUxLFxuICAgICAgMjIsXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBMjlHUURTU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE5MTU5NjcwOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MzY1MDU4NTc2NzkzODo1M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZG08J2RvPCdka/wnZGo8J2RtPCdkbTwnZGo8J2RqyDwnZGo8J2RuvCdkb7wnZGo8J2RqyDwn5iOXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkdIK1pNQkVLWFY5cmNHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwaDNRaFdQRmU0bVpuaVFURTVaSEltRUZ4WEY0Ykg3WHZpbFU3bUhuN0UwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkN4QXVvR3hvbEcvV0FBV1JNa2xCc3R4VXZNVUVzRVJkVWZoSGx3dklIcDh0ZnNCTjZOZldIbUJNVVUwUW96eTAzVFBudUZ5aWMxYTRiWjFNTXVaRERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInV6VkdoMDkzOE8waDZDdnVJTGRjODM1TFRvUldvYlhzeTI4QUduOFdsSnZOQkFmckpxeGxDMVpBdHFJa211QVZqbkRvU1U2RW4xa0J2SlRnNStSVENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxOTE1OTY3MDo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc5MDAzMjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMaUFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxpQS5qc29uIjogIntcImtleURhdGFcIjpcIjFxYjV4QjNtMzBBQmd1c3V0cm4zM1B0dVdiLzFKZnJUMnJQdmd1djdFUnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzEwMjY0Nzg0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
