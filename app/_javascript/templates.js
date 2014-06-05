module.exports = (function() {
    var Hogan = require('hogan-updated');
    var templates = {};
    templates['apple'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("I say: ");t.b(t.v(t.f("text",c,p,0)));return t.fl(); },partials: {}, subs: {  }});
    templates['layout-a'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1>Layout A</h1>");t.b("\n" + i);t.b("<div class=\"slot-1\">");t.b("\n" + i);t.b(t.t(t.f("1",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
    return templates;
})();