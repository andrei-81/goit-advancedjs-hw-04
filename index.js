/* empty css                      */import{a as b,S as E,i as c}from"./assets/vendor-Dpd1z_xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const L=15,M="47925753-e7f436f37bf276331d4c00f65";b.defaults.baseURL="https://pixabay.com";async function w(o,e=1){return await b.get("/api/",{params:{key:M,q:o,pretty:!0,orientation:"horizontal",safesearch:!0,image_type:"photo",page:e,per_page:L}})}function v(o){var e=[];for(const{previewURL:n,largeImageURL:s,likes:t,views:r,comments:a,downloads:h,tags:H}of o)e.push(`<div class="gallery-item">
        <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${n}" alt="${H}" />
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
                    <td>${h}</td>
                </tr>
            </table>

        </a>
    </div>`);return e.join(" ")}const P=document.querySelector(".search-button"),m=document.querySelector(".in-progress"),T=document.querySelector(".search-string"),d=document.querySelector(".gallery"),p=document.querySelector(".load-more");let i=0,l=1,f="";var S=new E(".gallery a",{captionDelay:250,captionsData:"alt"});p.style.display="none";const u={messageSize:"16px",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconUrl:"https://site-assets.fontawesome.com/releases/v6.7.2/svgs/sharp-light/octagon-xmark.svg",iconColor:"#FAFAFB",maxWidth:432,messageLineHeight:"24px",position:"topRight"};P.addEventListener("click",o=>{o.preventDefault(),d.innerHTML="",y(),l=1,i=0,f=T.value,w(f).then(e=>{if(e.status!=200)throw new Error(e.status);return e}).then(e=>{if(y(),i=e.data.total,i==0)m.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",...u});else{const n=e.data.hits,s=v(n);d.innerHTML=s,g(),S.refresh()}}).catch(e=>{c.error({title:"Something bad happened",message:e,...u}),console.log(e),g()})});function y(){p.style.display="none",m.innerHTML='<span class="loader"></span>'}function g(){m.innerHTML="",p.style.display="block"}p.addEventListener("click",o=>{if(o.preventDefault(),y(),i<=l*L){c.error({message:"We're sorry, but you've reached the end of search results.",...u}),m.innerHTML="";return}else l++,w(f,l).then(e=>{if(e.status!=200)throw new Error(e.status);return e}).then(e=>{const n=e.data.hits,s=v(n);d.insertAdjacentHTML("beforeend",s),S.refresh();const r=document.querySelector(".gallery-item").getBoundingClientRect(),a=window.getComputedStyle(d),h=parseFloat(a.gap||a.rowGap||0);window.scrollBy({top:(r.height+h)*2,behavior:"smooth"}),g()}).catch(e=>{c.error({title:"Something bad happened",message:e,...u}),console.log(e),g()})});
//# sourceMappingURL=index.js.map
