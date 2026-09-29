import { getSettings, getPages} from "./api.js"

async function start() {
  try{
    const [setting, page] = await Promise.all([
    getSettings(),
    getPages(location.pathname)
  ]);
  document.title = `${page.title} - ${setting.siteName}`

  console.log(setting,page);
  
  } catch(error){
    AudioParamMap.textContent = 'Something went wrong: ${error.message}'
  }
}

start();