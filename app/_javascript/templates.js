module.exports = (function() {
    var Hogan = require('hogan-updated');
    var templates = {};
    templates['apple'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("I say: ");t.b(t.v(t.f("text",c,p,0)));t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['banana'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h3>");t.b(t.v(t.f("data",c,p,0)));t.b("</h3>");return t.fl(); },partials: {}, subs: {  }});
    templates['layout-a'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1>");t.b(t.v(t.f("title",c,p,0)));t.b("</h1>");t.b("\n" + i);t.b("<div class=\"slot-1\">");t.b("\n" + i);t.b(t.t(t.f("1",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
    templates['melon'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"slot-left-pane\">");t.b(t.t(t.f("left-pane",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("<div class=\"slot-middle-pane\">");t.b(t.t(t.f("middle-pane",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("<div class=\"slot-right-pane\">");t.b(t.t(t.f("right-pane",c,p,0)));t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
    return templates;
})();