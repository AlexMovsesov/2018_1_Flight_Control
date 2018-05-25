export default function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_mixins["makeBackLink"] = pug_interp = function(section){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"box__link box__link_back\""+" href=\"#\""+pug_attr("data-section", section, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = '< Назад') ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";









;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_mixins["makeForm"] = pug_interp = function(className, fields){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Cform" + (pug_attr("class", pug_classes([className+' form'], [true]), false, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"form__validation\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
// iterate fields
;(function(){
  var $$obj = fields;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var field = $$obj[pug_index0];
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"form__input input\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"input__label\""+pug_attr("for", field.id, true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = field.label) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"input__field\""+pug_attr("id", field.id, true, false)+pug_attr("placeholder", field.placeholder||'', true, false)+pug_attr("autocomplete", field.autocomplete||'off', true, false)+pug_attr("type", field.type||'text', true, false)+pug_attr("name", field.name, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var field = $$obj[pug_index0];
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"form__input input\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"input__label\""+pug_attr("for", field.id, true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = field.label) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"input__field\""+pug_attr("id", field.id, true, false)+pug_attr("placeholder", field.placeholder||'', true, false)+pug_attr("autocomplete", field.autocomplete||'off', true, false)+pug_attr("type", field.type||'text', true, false)+pug_attr("name", field.name, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fmixins.pug";
pug_html = pug_html + "\u003Cinput class=\"form__submit js-submit\" type=\"submit\" value=\"Submit\"\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
};
;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fheader.pug";
pug_html = pug_html + "\u003Ch1 class=\"header__gameTitle\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fblocks\u002Fcommon\u002Fheader.pug";
pug_html = pug_html + "Flight Control\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fsignup\u002Fsignup.pug";
pug_html = pug_html + "\u003Csection class=\"signin box\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fsignup\u002Fsignup.pug";
pug_mixins["makeBackLink"]('menu');
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falex\u002FWebstormProjects\u002Fflightcontrol\u002Fjs\u002Fviews\u002Fsignup\u002Fsignup.pug";
pug_mixins["makeForm"]('signup_form', [
        {
            id: 'email',
            name: 'email',
            label: 'Email',
            placeholder: 'Type your email',
            type: 'text'
        },
        {
            id:'username',
            name:'username',
            label:'Username',
            placeholder:'Type your username',
            type:'text'
        },
        {
            id: 'password',
            name: 'password',
            label: 'Password',
            placeholder: 'Type your password',
            type: 'password'
        },
        {
            id: 'repeat_password',
            name: 'repeat_password',
            label: 'Retype password',
            placeholder: 'Retype your password',
            type: 'password'
        },
        {
            id: 'img',
            name: 'img',
            label: 'Upload an avatar',
            type: 'file'
        }

    ]);
pug_html = pug_html + "\u003C\u002Fsection\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}