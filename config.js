//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0584b5b57c8fdde99a583.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255652248835";
global.owner = process.env.OWNER_NUMBER || "255652248835";
global.style = process.env.STYLE || "4";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/0584b5b57c8fdde99a583.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUp6U3Z1OVU1bHF1MTZrVUdEOE94UTVzak1TSC9HQnpFVmduOUJ3SDRuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkZwdE1GY3ZNaW8wck5jODVTMzFmSFFJZ1hsWXF0YURVWENrOEtpcmgxaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSEpvYjFFWjRlc1NZbHhaenh3MENmaldZRk9uUm5wVWdlaHdmR25pSkcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTZ0orblIzbzFLWDZZbTNjdU9qQlhGa3k5MnNsVnZwOVdlQ1I4cVY1czFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQVGZmWFFyVlhjWE1IeTNuV2x6Y29xbjJpRmd4bWFDaWlmZ3BLd0NXblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdRbVJaZ2o2YzVZYndtR2RWNkRKMFFXOGZOMDFETDJWcTQrYmVzMG5IMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZFckV6d2pRVmhxdXlvbjFMNnl3RDNlWTVTY1cvN3YzdHRwK2tJN21YZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHJ3NWJVdnBWWm42T1NzelV2cjh1K1VsOXgzVW01a3ErN0NqZTFTQVlTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLZnVrek0yMTJZRE1oQ3gxZldYQ09xQkdqdS8rZVdQMzBXT1BpZGlSK1hURjlYNmZ3VWJLTmx6Ukx6Vk0ydlhHbWhMQmYzZTYzYlNoLzA3VDE5Rmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJKNjJMUXlySmZKWXdPbHUwOFpuWWhCa3J5cjlPZDQ4S1VBSTJjbGMyWk9nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwMWU0TTJ0dFFSTzhTZG1WajV0bG5RIiwicGhvbmVJZCI6IjMwZjg0MWJkLWEwODktNDAxMC1hZmNjLTNkNjljYzc5N2ZkZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5NTJSRCt0OFM1WHVtRy84dGJ0THhBak5Fd1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmVsM1hITjVVbWRlaWVxWUtnblpVbTBKd1VFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZWTEU5NENKIiwibWUiOnsiaWQiOiIyNTU2NTIyNDg4MzU6NTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tRy91MEhFTFdmeXJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJ1Vi8vYnkrODFFZysxSUNZVy93ekY5TFZhUnUwMmZuamFVV2tHUzJ4azA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpMdjA4YWlGVmpYSVp6MDdrNHc0bG5wa21LbkpPYXk2Sk1rSDJSWDlwcTJGaGU1OE9ySHpzMXExaENFZm5pd1JxZ1Y0SUFjOXpUbmdmLzJ3aEgwT0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDOEo5WUNWWStKMkg5cFhQNFgybVdoekgwWGR0R01aOGhCSzlFMEZlelUvekVsV2sxTGpPaGx3bFJNUWlFSERlNnptT29iak5CSUpqS0RBKzN4dGxnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY1MjI0ODgzNTo1N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVYmxmLzI4dnZOUklQdFNBbUZ2OE14ZlMxV2tidE5uNTQybEZwQmt0c1pOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODgxMDkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJROCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "V",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "MR HEISME-𝐌𝐃",
  packname: process.env.PACK_NAME || "MR HEISME-𝐌𝐃",
  botname: process.env.BOT_NAME || "MR HEISME-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "MR HEISME",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "MR HEISME-𝐌𝐃").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
