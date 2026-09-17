const u="ofDownloader:control";export class DownloadManagerUI{constructor(e={}){this.config=e,this.panel=null,this.elements={},this.isCollapsed=!0,this.isHidden=!0}createPanel(){if(this.panel)return this.panel;const e=document.getElementById("of-download-manager");return e?(this.panel=e,this.cacheElements(),this.bindEvents(),this.panel):(this.panel=document.createElement("div"),this.panel.id="of-download-manager",this.panel.style.cssText=this.generatePanelStyles(),this.panel.innerHTML=this.generatePanelHTML(),document.querySelector(this.config.integration?.parentSelector||"body").appendChild(this.panel),this.cacheElements(),this.bindEvents(),this.setHidden(!0),this.panel)}generatePanelStyles(){const t=typeof window<"u"&&window.innerWidth<500?Math.min(window.innerWidth-40,340):380,o=typeof window<"u"?Math.min(window.innerHeight-80,500):500,n=this.config.styles||{},s=n.border||`2px solid ${n.primaryColor||"#1f74f2"}`,a=n.boxShadow||"0 4px 16px rgba(0,0,0,0.5)",r=n.textColor||"#fff",i=n.fontFamily||"-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",l=n.fontSize||"13px",d=n.backgroundColor||"#0e1424";return`
      position: fixed;
      top: 20px;
      right: 20px;
      width: ${t}px;
      max-height: ${o}px;
      background: ${d};
      border: ${s};
      border-radius: 8px;
      box-shadow: ${a};
      z-index: ${this.config.integration?.zIndexBase||2147483647};
      isolation: isolate;
      pointer-events: auto;
      font-family: ${i};
      font-size: ${l};
      color: ${r};
      overflow: hidden;
      transform: translateX(100%);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    `}generatePanelHTML(){const e=this.config.integration?.cssPrefix||"of",t=this.config.labels||{},o=this.config.styles||{},n=o.headerBackground||"linear-gradient(135deg, #111b2f, #0b1424)",s=o.headerBorder||"1px solid #1c2a40",a=o.primaryColor||"#1f74f2",r=o.primaryHoverColor||"#1660d4",i=o.backgroundColor||"#0e1424",l=typeof window<"u"?Math.min(window.innerHeight-80,500):500;return`
      <div id="${e}-download-manager-header" style="
        background: ${n};
        color: white;
        padding: 8px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
        border-bottom: ${s};
      ">
        <div id="${e}-download-manager-title">${t.title||"📥 Downloads"} (0 active)</div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button id="${e}-download-manager-cancel-all" title="${t.cancelAll||"Cancel all active downloads"}" style="
            background: #d32f2f;
            border: none;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px;
            transition: background 0.2s ease;
            display: none;
          " onmouseover="this.style.background='#b71c1c'" onmouseout="this.style.background='#d32f2f'">${t.cancelAll||"Cancel All"}</button>
          <button id="${e}-download-manager-clear" title="${t.clearCompleted||"Clear completed"}" style="
            background: ${a};
            border: none;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px;
            transition: background 0.2s ease;
          " onmouseover="this.style.background='${r}'" onmouseout="this.style.background='${a}'">${t.clearCompleted||"Clear"}</button>
          <button id="${e}-download-manager-collapse" title="${t.collapse||"Collapse"}" style="
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            border-radius: 3px;
            transition: background 0.2s ease;
          " onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">−</button>
        </div>
      </div>
      <div id="${e}-download-manager-content" style="
        max-height: ${l-50}px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #666 transparent;
        background: ${i};
      "></div>
      <style>
        #${e}-download-manager-content::-webkit-scrollbar { width: 6px; }
        #${e}-download-manager-content::-webkit-scrollbar-track { background: ${i}; }
        #${e}-download-manager-content::-webkit-scrollbar-thumb { background: #666; border-radius: 3px; }
        #${e}-download-manager-content::-webkit-scrollbar-thumb:hover { background: #888; }
      </style>
    `}cacheElements(){const e=this.config.integration?.cssPrefix||"of";this.elements.header=document.getElementById(`${e}-download-manager-header`),this.elements.title=document.getElementById(`${e}-download-manager-title`),this.elements.content=document.getElementById(`${e}-download-manager-content`),this.elements.clearBtn=document.getElementById(`${e}-download-manager-clear`),this.elements.cancelAllBtn=document.getElementById(`${e}-download-manager-cancel-all`),this.elements.collapseBtn=document.getElementById(`${e}-download-manager-collapse`)}bindEvents(){this.elements.collapseBtn&&this.elements.collapseBtn.addEventListener("click",e=>{e.stopPropagation(),this.dispatchControlEvent("toggle",{},()=>{typeof this.onToggleVisibility=="function"?this.onToggleVisibility():this.hidePanel()})}),this.elements.header&&this.elements.header.addEventListener("click",()=>{this.dispatchControlEvent("toggle",{},()=>{typeof this.onToggleVisibility=="function"?this.onToggleVisibility():this.isCollapsed?this.showPanel():this.hidePanel()})}),this.elements.clearBtn&&this.elements.clearBtn.addEventListener("click",()=>{this.dispatchControlEvent("clearCompleted",{},()=>{typeof this.onClearCompleted=="function"&&this.onClearCompleted()})}),this.elements.cancelAllBtn&&this.elements.cancelAllBtn.addEventListener("click",()=>{this.dispatchControlEvent("cancelAll",{},()=>{typeof this.onCancelAll=="function"&&this.onCancelAll()})})}showPanel(){this.panel&&(this.panel.style.display="block",this.panel.style.transform="translateX(0%)",this.panel.style.opacity="1",this.panel.style.pointerEvents="auto",this.isCollapsed=!1,this.isHidden=!1)}hidePanel(){this.panel&&(this.panel.style.display="block",this.panel.style.transform="translateX(100%)",this.panel.style.opacity="0",this.panel.style.pointerEvents="none",this.isCollapsed=!0)}setHidden(e){if(!this.panel)return;!!e?(this.panel.style.display="none",this.panel.style.pointerEvents="none",this.isHidden=!0):(this.panel.style.display="block",this.isHidden=!1,this.isCollapsed?this.hidePanel():this.showPanel())}updateHeader(e){const t=this.config.labels||{},o=e.active>0?(t.activeDownloads||"({count} active)").replace("{count}",e.active):t.noActiveDownloads||"(none)";this.elements.title&&(this.elements.title.textContent=`${t.title||"📥 Downloads"} ${o}`),this.elements.cancelAllBtn&&(this.elements.cancelAllBtn.style.display=e.active>1?"inline-block":"none")}addOrUpdateItem(e,t){const o=this.config.integration?.cssPrefix||"of",n=this.elements.content.querySelector(`[data-id="${e}"]`),s=this.config.styles&&this.config.styles.primaryColor||"#1f74f2",a=this.config.styles&&this.config.styles.primaryHoverColor||"#1660d4",r=i=>`
        <div class="dm-item" data-id="${e}" style="
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
          border-bottom: 1px solid #1c2a40;
          padding: 10px 12px;
        ">
          <div>
            <div class="dm-fn" style="color:#f1f5ff; font-weight:600; font-size:13px;">${(i.filename||"Video").toString().replace(/</g,"&lt;")}</div>
            <div class="dm-st" style="color:#9ab3db; font-size:12px; margin-top:3px;">${i.status||"Downloading..."}</div>
            <div class="dm-pb" style="height:6px; background:#1f2840; border-radius:3px; overflow:hidden; margin-top:8px;">
              <div class="dm-pf" style="height:100%; width:${Math.max(0,Math.min(100,i.progress||0))}%; background:${s};"></div>
            </div>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            <button class="dm-cancel" title="Cancel" style="
              background:#d32f2f; color:#fff; border:none; border-radius:4px; padding:4px 8px; font-size:11px; cursor:pointer;"
              onmouseover="this.style.background='#b71c1c'" onmouseout="this.style.background='#d32f2f'">✕</button>
            <button class="dm-remove" title="Remove" style="
              background:${s}; color:#fff; border:none; border-radius:4px; padding:4px 8px; font-size:11px; cursor:pointer;"
              onmouseover="this.style.background='${a}'" onmouseout="this.style.background='${s}'">✔</button>
          </div>
        </div>
      `;if(n)this.applyItemState(n,t);else{const i=document.createElement("div");i.innerHTML=r(t);const l=i.firstElementChild;this.elements.content.prepend(l),this.applyItemState(l,t),l.querySelector(".dm-cancel").addEventListener("click",d=>{d.stopPropagation(),this.dispatchControlEvent("cancelDownload",{downloadId:e},()=>{typeof this.onCancelItem=="function"&&this.onCancelItem(e)})}),l.querySelector(".dm-remove").addEventListener("click",d=>{d.stopPropagation(),this.dispatchControlEvent("removeDownload",{downloadId:e},()=>{typeof this.onRemoveItem=="function"&&this.onRemoveItem(e)})})}}removeDownloadItem(e){const t=this.elements.content?.querySelector(`[data-id="${e}"]`);t&&t.remove()}renderDownloads(e){e.forEach((o,n)=>this.addOrUpdateItem(n,o));const t=new Set(Array.from(e.keys()));this.elements.content.querySelectorAll("[data-id]")?.forEach(o=>{const n=o.getAttribute("data-id");t.has(n)||o.remove()})}updateUI(e,t){this.updateHeader(e),this.renderDownloads(t)}applyItemState(e,t){if(!e)return;const o=this.config.styles&&this.config.styles.primaryColor||"#1f74f2",n=!!t.awaitingUserInteraction,s=String(t.status||"").toLowerCase(),a=s.includes("failed")||s.includes("error")||s.includes("interrupted"),r=t.isCancelled||s.includes("cancelled")||s.includes("canceled"),i=t.isCompleted||!n&&(t.progress||0)>=100,l=e.querySelector(".dm-fn"),d=e.querySelector(".dm-st"),h=e.querySelector(".dm-pf"),c=e.querySelector(".dm-cancel"),f=e.querySelector(".dm-remove");if(l&&(l.textContent=t.filename||"Video"),d&&(d.textContent=t.status||(n?"Waiting for Save As...":"")),h){const m=Math.max(0,Math.min(100,t.progress||0));h.style.width=`${m}%`;let p=o;a?p="#f44336":r?p="#ff9800":i?p="#4caf50":n&&(p="#ffa000"),h.style.background=p}c&&(i||r||a?c.style.display="none":(c.style.display="inline-flex",c.disabled=n,c.textContent=n?"WAIT":"STOP",c.title=n?"Waiting for Save As... (choose a location to finish)":this.config.labels?.cancel||"Cancel",c.style.background=n?"#ffa000":"#d32f2f",c.style.cursor=n?"default":"pointer")),f&&(i||r||a?f.style.display="inline-flex":f.style.display="none")}dispatchControlEvent(e,t={},o=null){if(!e||typeof document>"u"){typeof o=="function"&&o();return}const n={action:e,...t};try{document.dispatchEvent(new CustomEvent(u,{detail:n}))}catch{}!n.__handled&&typeof o=="function"&&o()}}
