import{E as c}from"./kaplay-Bj6vLwYP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const t=c({width:400,height:800,background:"#000000"});t.loadRoot("./");t.loadSprite("player","sprites/playerShip1_blue.png");t.scene("game",()=>{t.add([t.pos(t.width()/2,t.height()/2),t.sprite("player"),t.anchor("center")])});t.go("game");
//# sourceMappingURL=index-DWY1jIg_.js.map
