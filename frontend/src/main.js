import './styles/base.css';
import { getSettings, getPages} from "./api.js"
import { renderBlokcs } from "./render.js";

async function start() {
  try{
    const [setting, page] = await Promise.all([
    getSettings(),
    getPages(location.pathname)
  ]);
  document.title = `${page.title} - ${setting.siteName}`
  
  app.innerHTML = `<main>${renderBlokcs(page.blocks)}</main>`

  console.log(setting,page);
  
  } catch(error){
    app.textContent = `Something went wrong: ${error.message}`
  }
}

start();