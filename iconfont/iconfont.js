(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-liebiao" viewBox="0 0 1024 1024">'+""+'<path d="M32 173.796c0 37.669 30.534 68.203 68.203 68.203 37.668 0 68.203-30.534 68.203-68.203 0-37.664-30.534-68.198-68.203-68.198-37.669 0-68.203 30.534-68.203 68.198z m0 338.201c0 37.67 30.534 68.202 68.203 68.202 37.668 0 68.203-30.532 68.203-68.202 0-37.668-30.534-68.203-68.203-68.203-37.669 0-68.203 30.535-68.203 68.203z m0 338.202c0 37.659 30.534 68.203 68.203 68.203 37.668 0 68.203-30.544 68.203-68.203 0-37.669-30.534-68.203-68.203-68.203C62.534 781.996 32 812.53 32 850.199z m960-674.711c0 32.709-26.766 59.475-59.475 59.475H313.558c-32.709 0-59.475-26.766-59.475-59.475v-3.38c0-32.709 26.766-59.475 59.475-59.475h618.967c32.709 0 59.475 26.765 59.475 59.475v3.38z m0 338.201c0 32.705-26.766 59.47-59.475 59.47H313.558c-32.709 0-59.475-26.765-59.475-59.47v-3.384c0-32.709 26.766-59.47 59.475-59.47h618.967c32.709 0 59.475 26.761 59.475 59.47v3.384z m0 338.198c0 32.71-26.766 59.476-59.475 59.476H313.558c-32.709 0-59.475-26.766-59.475-59.476v-3.384c0-32.7 26.766-59.466 59.475-59.466h618.967c32.709 0 59.475 26.766 59.475 59.466v3.384z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)