function initGmap(){var e=[],t=[],n=null,r=[[1,"Alpe d’Huez","Frankrig, 6 rejsemål",45.09308,6.068466],[2,"Titel","beskrivelse",46.088472,3.460693],[3,"Titel","beskrivelse",46.188472,5.560693],[4,"Titel","beskrivelse",46.388472,4.460693],[5,"Titel","beskrivelse",46.088472,4.460693]],i=new google.maps.LatLng(45.383019,9.788818),s={streetViewControl:!0,zoom:7,scrollwheel:!1,center:i,panControl:!1,zoomControl:!0,scaleControl:!1,mapTypeControl:!0,draggable:!0,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}};map=new google.maps.Map(document.getElementById("google-map"),s);for(var o=0;o<r.length;o++){var u=new google.maps.Marker({position:new google.maps.LatLng(r[o][3],r[o][4]),icon:new google.maps.MarkerImage("../css/images/google-map-marker.png",new google.maps.Size(49,65),new google.maps.Point(0,0),new google.maps.Point(24,65)),id:r[o][0],map:map});e.push(u);var a={content:'<a href="#link" class="inner"><i class="icon-arrow-right6"></i><div class="caption"><h5>'+r[o][1]+"</h5><h6>"+r[o][2]+"</h6></div></a>",disableAutoPan:!1,maxWidth:0,alignBottom:!0,pixelOffset:new google.maps.Size(-90,-20),zIndex:null,boxClass:"info-windows",closeBoxURL:"",pane:"floatPane",enableEventPropagation:!1,infoBoxClearance:"10px",position:u.position},f=new InfoBox(a);t[u.id]=f;google.maps.event.addListener(e[e.length-1],"click",function(){n&&t[n].close();n=this.id;t[this.id].open(this.map);return!1})}}$(document).ready(function(){$("#scroll-top-top").click(function(){$("html, body").animate({scrollTop:0},300);return!1});$(".section-expand").click(function(){var e=$(this),t=e.attr("rel");e.addClass("current");$("#"+t).show();return!1});$("#show-extended-search").click(function(){var e=$(this);if(e.hasClass("open")){$("#extended-search").hide();e.find(".closed").removeClass("hidden");e.find(".open").addClass("hidden");e.removeClass("open")}else{$("#extended-search").show();e.find(".open").removeClass("hidden");e.find(".closed").addClass("hidden");e.addClass("open")}return!1});$(".inline-gallery .item").each(function(){var e=$(this).next();e.length||(e=$(this).siblings(":first"));e.children(":first-child").clone().appendTo($(this));for(var t=0;t<4;t++){e=e.next();e.length||(e=$(this).siblings(":first"));e.children(":first-child").clone().appendTo($(this))}});$("#inlineCarousel").carousel({interval:4e3});$("#view-toggle .btn").click(function(){var e=$(this).attr("data-view"),t=$("#view-grid-list");if(!t.hasClass(e)){if(e==="grid"){t.addClass("grid");t.removeClass("list")}if(e==="list"){t.addClass("list");t.removeClass("grid")}}});$("#top-navigation").on({"shown.bs.dropdown":function(){$(document.body).addClass("modal-open navigation");$('<div class="modal-backdrop fade in"></div>').appendTo(document.body)},"hide.bs.dropdown":function(){$(document.body).removeClass("modal-open");$(".modal-backdrop").remove()}})});var map;$(document).ready(function(){$("#google-map").length>0&&initGmap()});