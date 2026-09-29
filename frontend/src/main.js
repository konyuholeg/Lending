import './styles/base.css';
import { getSettings, getPages} from "./api.js"
import {hero} from "./blocks/hero/hero";

async function start() {
  try{
    const [setting, page] = await Promise.all([
    getSettings(),
    getPages(location.pathname)
  ]);
  document.title = `${page.title} - ${setting.siteName}`
  const heroBlock = page.blocks.find((block)=> block.type ==='hero');
  app.innerHTML = hero(heroBlock);

  console.log(setting,page);
  
  } catch(error){
    AudioParamMap.textContent = 'Something went wrong: ${error.message}'
  }
}

start();