(function(global,$){"use strict";var
dyscrollup={};dyscrollup.option={showafter:'300',scrolldelay:'500',position:'right',image:"",shape:'circle',width:32,height:32};function extendSource(source,defaults){var property;for(property in defaults){if(source.hasOwnProperty(property)===false){source[property]=defaults[property];}}
return source;}
dyscrollup.init=function(option){if(typeof option!=="undefined"){this.option=extendSource(option,this.option);}
this.createBtn();this.onscroll();this.onclick();};dyscrollup.createBtn=function(){var
self=this,html,btn,img;html="<a id='dyscrollup-btn' href='#'></a>";$("body").prepend(html);btn=$("#dyscrollup-btn");switch(self.option.position){case'left':btn.css('left','32px');break;case'right':btn.css('right','32px');break;}
if(self.option.image.length>0){btn.css('background','url('+self.option.image+') center center no-repeat');}else{btn.css('background-color','none)');}
btn=$("#dyscrollup-btn");if(self.option.shape==='circle'){btn.css('border-radius','50%');}
btn.css('width',self.option.width).css('height',self.option.height);};dyscrollup.onclick=function(){var
self=this;$("body").on("click","#dyscrollup-btn",function(e){e.preventDefault();$("html, body").animate({scrollTop:0},self.option.scrolldelay);return false;});};dyscrollup.onscroll=function(){var
self=this;$(window).on("scroll",function(e){if($(window).scrollTop()>self.option.showafter){$('a#dyscrollup-btn').fadeIn();}else{$('a#dyscrollup-btn').fadeOut();}});};global.dyscrollup=dyscrollup;}(typeof window!=="undefined"?window:this,typeof jQuery!=="undefined"?jQuery:undefined));