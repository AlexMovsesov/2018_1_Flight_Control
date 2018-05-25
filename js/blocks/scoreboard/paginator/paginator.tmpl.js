export default function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (count, page, step) {;pug_debug_line = 1;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
//- css styles for paginator's links
var paginatorName = 'paginator-link';
var leftArrowClass = 'scoreboard__paginator-left';
var rightArrowClass = 'scoreboard__paginator-right';
var linkClass = 'scoreboard__paginator-link';
var linkActiveClass = 'scoreboard__paginator-active-link';
//- Params for paginator
var isFirst = page === 1;
var isLast = page === count;
var maxPage = page + step;
maxPage = maxPage > count ? count : maxPage;
var minPage = page - step;
minPage = minPage < 1 ? 1 : minPage;
var i = minPage;

;pug_debug_line = 17;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
if ((!isFirst)) {
;pug_debug_line = 18;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes([leftArrowClass], [true]), false, false)+" href=\"\""+pug_attr("name", paginatorName, true, false)+pug_attr("value", page-1, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = '<Назад') ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
;pug_debug_line = 19;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
while (i <= maxPage) {
;pug_debug_line = 20;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
if ((i === page)) {
;pug_debug_line = 21;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes([linkClass + ' ' + linkActiveClass], [true]), false, false)+" href=\"\""+pug_attr("name", paginatorName, true, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i++) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 23;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes([linkClass], [true]), false, false)+" href=\"\""+pug_attr("name", paginatorName, true, false)) + "\u003E";
;pug_debug_line = 23;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i++) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
}
;pug_debug_line = 24;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
if ((!isLast)) {
;pug_debug_line = 25;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes([rightArrowClass], [true]), false, false)+" href=\"\""+pug_attr("name", paginatorName, true, false)+pug_attr("value", page + 1, true, false)) + "\u003E";
;pug_debug_line = 25;pug_debug_filename = "data\u002Fjs\u002Fcomponents\u002FScoreboard\u002Fpaginator\u002Fpaginator.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Вперед>') ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}}.call(this,"count" in locals_for_with?locals_for_with.count:typeof count!=="undefined"?count:undefined,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined,"step" in locals_for_with?locals_for_with.step:typeof step!=="undefined"?step:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}