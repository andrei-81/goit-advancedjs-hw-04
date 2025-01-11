/* empty css                      */import{a as y,S,i as d}from"./assets/vendor-Dpd1z_xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const f=15,H="47925753-e7f436f37bf276331d4c00f65";y.defaults.baseURL="https://pixabay.com";async function b(o,e=1){return await y.get("/api/",{params:{key:H,q:o,pretty:!0,orientation:"horizontal",safesearch:!0,image_type:"photo",page:e,per_page:f}})}function L(o){var e=[];for(const{previewURL:n,largeImageURL:s,likes:t,views:r,comments:a,downloads:g,tags:v}of o)e.push(`<div class="gallery-item">
        <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${n}" alt="${v}" />
            <table class="description-table">
                <tr class="description-table-row table-header">
                    <td>Likes</td>
                    <td>Views</td>
                    <td>Comments</td>
                    <td>Downloads</td>
                </tr>
                <tr class="description-table-row table-content">
                    <td>${t}</td>
                    <td>${r}</td>
                    <td>${a}</td>
                    <td>${g}</td>
                </tr>
            </table>

        </a>
    </div>`);return e.join(" ")}const E=document.querySelector(".search-button"),p=document.querySelector(".in-progress"),P=document.querySelector(".search-string"),u=document.querySelector(".gallery"),i=document.querySelector(".load-more");let l=0,c=1,h="";var w=new S(".gallery a",{captionDelay:250,captionsData:"alt"});i.style.display="none";const m={messageSize:"16px",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconUrl:"https://site-assets.fontawesome.com/releases/v6.7.2/svgs/sharp-light/octagon-xmark.svg",iconColor:"#FAFAFB",maxWidth:432,messageLineHeight:"24px",position:"topRight"};E.addEventListener("click",o=>{o.preventDefault(),u.innerHTML="",i.style.display="none",p.innerHTML='<span class="loader"></span>',c=1,l=0,h=P.value,b(h).then(e=>{if(e.status!=200)throw new Error(e.status);return e}).then(e=>{if(p.innerHTML="",l=e.data.total,l==0)d.error({message:"Sorry, there are no images matching your search query. Please try again!",...m});else{const n=e.data.hits,s=L(n);u.innerHTML=s,i.style.display="block",w.refresh()}}).catch(e=>{d.error({title:"Something bad happened",message:e,...m}),console.log(e)})});i.addEventListener("click",o=>{if(o.preventDefault(),l<=c*f){d.error({message:"We're sorry, but you've reached the end of search results.",...m}),i.style.display="none";return}c++,b(h,c).then(e=>{if(e.status!=200)throw new Error(e.status);return e}).then(e=>{p.innerHTML="";const n=e.data.hits,s=L(n);u.insertAdjacentHTML("beforeend",s),w.refresh();const r=document.querySelector(".gallery-item").getBoundingClientRect(),a=window.getComputedStyle(u),g=parseFloat(a.gap||a.rowGap||0);window.scrollBy({top:(r.height+g)*2,behavior:"smooth"})}).catch(e=>{d.error({title:"Something bad happened",message:e,...m}),console.log(e)})});
//# sourceMappingURL=index.js.map
