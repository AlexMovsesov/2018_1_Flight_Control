import {pug_merge, pug_classes, pug_style, pug_attr, pug_attrs, pug_escape, pug_rethrow, exports as pug} from 'pug/pug-runtime';function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_mixins["makeBackLink"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Ca" + (pug.attrs(pug.merge([{"class": "box__link box__link_back","href": "#"},attributes]), false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003C Назад\u003C\u002Fa\u003E";
};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";









;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
































;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fheader.pug";
pug_html = pug_html + "\u003Ch1 class=\"header__gameTitle\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fheader.pug";
pug_html = pug_html + "Flight Control\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fabout\u002Fabout.pug";
pug_html = pug_html + "\u003Csection class=\"about box\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fabout\u002Fabout.pug";
pug_mixins["makeBackLink"]('menu');
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fabout\u002Fabout.pug";
pug_html = pug_html + "\u003Ch1 class=\"box_header about__header\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fabout\u002Fabout.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'About') ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fabout\u002Fabout.pug";
pug_html = pug_html + "\u003Cspan class=\"about__content\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fabout\u002Fabout.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'This game presents an simplified airplane management. This is dynamically game, developed in JS (ES6) and Java (Spring).') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fsection\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;} export default template;