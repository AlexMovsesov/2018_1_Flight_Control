import {pug_merge, pug_classes, pug_style, pug_attr, pug_attrs, pug_escape, pug_rethrow, exports as pug} from 'pug/pug-runtime';function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (links) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_mixins["makeBackLink"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Ca" + (pug.attrs(pug.merge([{"class": "box__link box__link_back","href": "#"},attributes]), false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003C Назад\u003C\u002Fa\u003E";
};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_mixins["menuLink"] = pug_interp = function(link){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli class=\"list__item\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"menu_link\""+" href=\"#\""+pug.attr("data-route", link.route, true, false)) + "\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = link.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
};
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
































;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fheader.pug";
pug_html = pug_html + "\u003Ch1 class=\"header__gameTitle\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fheader.pug";
pug_html = pug_html + "Flight Control\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fmenu\u002Fmenu.pug";
pug_html = pug_html + "\u003Csection class=\"signin box\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fmenu\u002Fmenu.pug";
pug_mixins["makeBackLink"]('menu');
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fmenu\u002Fmenu.pug";
pug_html = pug_html + "\u003Cul class=\"menu__items list\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fmenu\u002Fmenu.pug";
// iterate links
;(function(){
  var $$obj = links;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var link = $$obj[pug_index1];
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fmenu\u002Fmenu.pug";
pug_mixins["menuLink"](link);
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var link = $$obj[pug_index1];
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fmenu\u002Fmenu.pug";
pug_mixins["menuLink"](link);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fsection\u003E";}.call(this,"links" in locals_for_with?locals_for_with.links:typeof links!=="undefined"?links:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;} export default template;