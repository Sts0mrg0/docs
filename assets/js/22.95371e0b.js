(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{372:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"links-and-ipld-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links-and-ipld-schemas"}},[t._v("#")]),t._v(" Links and IPLD Schemas")]),t._v(" "),a("p",[t._v("IPLD Schemas are designed to describe data bounded by blocks. They are intentionally "),a("em",[t._v("not")]),t._v(" agnostic to block boundaries to contain the complexity of validation. You ought to be able to apply a schema to a block and have enough information to make fast, complete, validation.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("link")]),t._v(" kind may be used as with all other "),a("RouterLink",{attrs:{to:"/docs/schemas/schema-kinds.html"}},[t._v("data model kinds")]),t._v(" in schemas. These define effective block boundaries. e.g.")],1),t._v(" "),a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baz Int\n  boom Link\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Which tells us that there exists a "),a("code",[t._v("map")]),t._v(" (the default "),a("code",[t._v("struct")]),t._v(" representation) that contains a "),a("code",[t._v("baz")]),t._v(" integer property and a "),a("code",[t._v("boom")]),t._v(" link property. In this way we can state explicitly where to expect links in the same manner as describing the position of every other data model kind.")]),t._v(" "),a("p",[t._v("Links may appear in "),a("code",[t._v("struct")]),t._v("s, as elements of "),a("code",[t._v("list")]),t._v("s and as values of "),a("code",[t._v("map")]),t._v("s. They may also appear in "),a("code",[t._v("union")]),t._v("s if they are also assigned to a type:")]),t._v(" "),a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyKeyedUnion")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("union")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token representation"}},[t._v("} "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("representation")])]),t._v(" keyed\n\n"),a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  froz Bool\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")])]),t._v(" link\n")])])]),a("p",[t._v("This works for and for "),a("code",[t._v("envelope")]),t._v(" "),a("code",[t._v("union")]),t._v("s, and also "),a("code",[t._v("kinded")]),t._v(" "),a("code",[t._v("union")]),t._v("s, as "),a("code",[t._v("link")]),t._v(" is a kind that can be discriminated. "),a("code",[t._v("inline")]),t._v(" "),a("code",[t._v("union")]),t._v("s, however, currently describe complex types (structs) so cannot directly describe "),a("code",[t._v("link")]),t._v("s, although the containing "),a("code",[t._v("struct")]),t._v("s may contain "),a("code",[t._v("link")]),t._v("s.")]),t._v(" "),a("h2",{attrs:{id:"link-destination-type-hinting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-destination-type-hinting"}},[t._v("#")]),t._v(" Link Destination Type Hinting")]),t._v(" "),a("p",[t._v('In many cases it is helpful to describe what is intended to occur across block boundaries, even though this cannot be verified by schemas in their per-block usage. For the purpose of codegen and as a documentation tool, we can provide "hinting" regarding the shape of the data (in schema terms) on the other side of a link.')]),t._v(" "),a("p",[t._v("We use the "),a("strong",[a("code",[t._v("&")])]),t._v(" operator to convert a complex "),a("code",[t._v("type")]),t._v(" into a link, where, for the purpose of in-block validation we expect the thing it describes to be a "),a("code",[t._v("link")]),t._v(", but for the purpose of cross-block traversal we can "),a("em",[t._v("suggest")]),t._v(" that what is on the other side of the "),a("code",[t._v("link")]),t._v(" is of a particular "),a("code",[t._v("type")]),t._v(".")]),t._v(" "),a("p",[t._v("In our original "),a("code",[t._v("struct")]),t._v(" example, we could suggest that the "),a("code",[t._v("boom")]),t._v(" property of "),a("code",[t._v("Foo")]),t._v(", when followed, will yield a "),a("code",[t._v("Grop")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baz Int\n  boom "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v("Grop\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Grop")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  description String\n  x Float\n  y Float\n  data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" Int "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("For the purpose of validation this works for "),a("code",[t._v("Foo")]),t._v(" in precisely the same way as our original example; we still expect "),a("code",[t._v("boom")]),t._v(' to be a link, and such validation may be successful regardless of what might be found if the link were followed. But we are now providing a "hint" that we expect that when following the link at '),a("code",[t._v("boom")]),t._v(" we should find an object that can be described by "),a("code",[t._v("Grop")]),t._v(".")]),t._v(" "),a("p",[t._v("In the same way, our "),a("code",[t._v("keyed")]),t._v(" "),a("code",[t._v("union")]),t._v(" may be made more sophisticated to describe what we expect to be found if we were to follow the link:")]),t._v(" "),a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyKeyedUnion")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("union")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v("Grop "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token representation"}},[t._v("} "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("representation")])]),t._v(" keyed\n\n"),a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  froz Bool\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v('There is no facility in IPLD Schemas for implicitly describing a "may be a link, or may be inline" data structure. However we can do this explicitly with '),a("code",[t._v("kinded")]),t._v(" "),a("code",[t._v("union")]),t._v("s, although without strong guarantees regarding what we might find when we follow a link:")]),t._v(" "),a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMapNode")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  map Bytes\n  data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" Element "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Element")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("union")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" HashMapNode map\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("&")]),t._v("HashMapNode link\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" Bucket list\n"),a("span",{pre:!0,attrs:{class:"token representation"}},[t._v("} "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("representation")])]),t._v(" kinded\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... further definitions for `Bucket`")]),t._v("\n")])])]),a("p",[t._v("In this example, from the "),a("a",{attrs:{href:"https://github.com/ipld/specs/blob/master/data-structures/hashmap.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("HashMap"),a("OutboundLink")],1),t._v(" specification, we describe a "),a("code",[t._v("map")]),t._v(", named "),a("code",[t._v("HashMapNode")]),t._v(" that contains a "),a("code",[t._v("data")]),t._v(" property which is a list of "),a("code",[t._v("Element")]),t._v("s. These "),a("code",[t._v("Element")]),t._v("s may be one of three things: a "),a("code",[t._v("map")]),t._v(" that contains another "),a("code",[t._v("HashMapNode")]),t._v(" (an inlined child for a tree data structure), a "),a("code",[t._v("link")]),t._v(" which is assumed to lead to a "),a("code",[t._v("HashMapNode")]),t._v(" (a linked child) or a "),a("code",[t._v("Bucket")]),t._v(" (not described here) which comprises a "),a("code",[t._v("list")]),t._v(".")]),t._v(" "),a("p",[t._v("Our validator can scan the "),a("code",[t._v("data")]),t._v(" list and check that each element is one of: "),a("code",[t._v("map")]),t._v(", "),a("code",[t._v("link")]),t._v(" and "),a("code",[t._v("list")]),t._v(". We make no strong assertions that the "),a("code",[t._v("link")]),t._v(" actually yields a "),a("code",[t._v("HashMapNode")]),t._v(" but such assertions may be built into code generated from this schema "),a("em",[t._v("when")]),t._v(" the link is loaded and validated.")])])}),[],!1,null,null,null);e.default=n.exports}}]);