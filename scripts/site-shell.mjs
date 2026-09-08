import { headerMarkup, footerMarkup } from '../src/data/design.js'
import { CONTENT_ITEMS, publicPath } from '../src/data/seo.js'
export function refreshStandalone(html,page){
 const article=page.articleType,skip=html.includes('id="article-main"')?'#article-main':'#main-content'
 html=html.replace(/<a class="ed-skip"[\s\S]*?<\/dialog>/,headerMarkup(article?'archive':'work').replace('href="#main-content"',`href="${skip}"`))
 html=html.replace(/<section class="ed-contact\b[\s\S]*?<\/section>/g,'')
 html=html.replace(/<section class="ed-further-reading"[\s\S]*?<\/section>/g,'')
 const related=article?`<section class="ed-further-reading ed-container"><span class="ed-eyebrow">Keep exploring / From the journal</span><div>${CONTENT_ITEMS.filter(item=>item.id!==page.id).slice(0,2).map(item=>`<a href="${publicPath(item.path)}"><span class="ed-label">${item.type} · ${item.readTime} read</span><h2>${item.title}</h2><span aria-hidden="true">↗</span></a>`).join('')}</div></section>`:''
 html=html.replace(/<footer class="ed-footer\b[\s\S]*?<\/footer>/,related+footerMarkup())
 if(!html.includes('href="/experience.css"'))html=html.replace('</head>','<link rel="stylesheet" href="/experience.css" /></head>')
 return html.replaceAll('/conversation.html','/contact/')
}
