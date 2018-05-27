import {pug_merge, pug_classes, pug_style, pug_attr, pug_attrs, pug_escape, pug_rethrow, exports as pug} from 'pug/pug-runtime';function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (count, page, step) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
//- css styles for paginator's links
var paginatorName = 'scoreboard_paginator';
var leftArrowClass = 'link paginator__link paginator__link-left';
var rightArrowClass = 'link paginator__link paginator__link-right';
var linkClass = 'link paginator__link';
var linkActiveClass = 'link paginator__link paginator__link-active';
//- Params for paginator
var isFirst = page === 1;
var isLast = page === count;
var maxPage = page + step;
maxPage = maxPage > count ? count : maxPage;
var minPage = page - step;
minPage = minPage < 1 ? 1 : minPage;
var i = minPage;

;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
if ((!isFirst)) {
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([leftArrowClass], [true]), false, false)+" href=\"\""+pug.attr("name", paginatorName, true, false)+pug.attr("value", page-1, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = '<Назад') ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
while (i <= maxPage) {
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
if ((i === page)) {
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([linkClass + ' ' + linkActiveClass], [true]), false, false)+" href=\"\""+pug.attr("name", paginatorName, true, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = i++) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([linkClass], [true]), false, false)+" href=\"\""+pug.attr("name", paginatorName, true, false)) + "\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = i++) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
}
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
if ((!isLast)) {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([rightArrowClass], [true]), false, false)+" href=\"\""+pug.attr("name", paginatorName, true, false)+pug.attr("value", page + 1, true, false)) + "\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fscoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Вперед>') ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}}.call(this,"count" in locals_for_with?locals_for_with.count:typeof count!=="undefined"?count:undefined,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined,"step" in locals_for_with?locals_for_with.step:typeof step!=="undefined"?step:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;} export default template;