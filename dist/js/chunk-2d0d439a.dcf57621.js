(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d439a"],{"5fb5":function(a,e,s){"use strict";s.r(e);var n=function(){var a=this,e=a._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Vue Good Table",folder:"Datatables"}}),e("vue-good-table",{attrs:{columns:a.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",selectOptions:{enabled:!0,selectionInfoClass:"table-alert__box"},rows:a.rows},scopedSlots:a._u([{key:"table-row",fn:function(s){return["button"==s.column.field?e("span",[e("a",{attrs:{href:""}},[e("i",{staticClass:"i-Eraser-2 text-25 text-success mr-2"}),a._v(" "+a._s(s.row.button))]),e("a",{attrs:{href:""}},[e("i",{staticClass:"i-Close-Window text-25 text-danger"}),a._v(" "+a._s(s.row.button))])]):a._e()]}}])},[e("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[e("b-button",{staticClass:"btn-rounded",attrs:{variant:"primary"}},[a._v(" Add Button ")])],1)])],1)},t=[],r={metaInfo:{title:"Task Manager"},data:function(){return{columns:[{label:"Name",field:"name"},{label:"Span",field:"span",html:!0},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"yyyy-mm-dd",dateOutputFormat:"MMM Do yy"},{label:"Percent",field:"score",type:"percentage"},{label:"Button",field:"button",html:!0,tdClass:"text-right",thClass:"text-right"}],rows:[{id:1,name:"John",span:'<span class="badge badge-primary">Primary</span>',createdAt:"2019-10-29",score:.03343},{id:2,name:"Jane",span:'<span class="badge badge-danger">Primary</span>',createdAt:"2011-10-31",score:.03343},{id:3,name:"Susan",span:'<span class="badge badge-warning">Primary</span>',createdAt:"2011-10-30",score:.03343},{id:4,name:"Chris",span:'<span class="badge badge-primary">Primary</span>',createdAt:"2011-10-11",score:.03343},{id:5,name:"Dan",span:'<span class="badge badge-danger">Primary</span>',createdAt:"2011-10-21",score:.03343},{id:6,name:"John",span:'<span class="badge badge-success">success</span>',createdAt:"2011-10-31",score:.03343},{id:1,name:"John",span:'<span class="badge badge-warning">Warning</span>',createdAt:"2019-10-29",score:.03343},{id:2,name:"Jane",span:'<span class="badge badge-info">Info</span>',createdAt:"2011-10-31",score:.03343},{id:3,name:"Susan",span:'<span class="badge badge-dark">Dark</span>',createdAt:"2011-10-30",score:.03343},{id:4,name:"Chris",span:'<span class="badge badge-warning">Warning</span>',createdAt:"2011-10-11",score:.03343},{id:5,name:"Dan",span:'<span class="badge badge-info">Info</span>',createdAt:"2011-10-21",score:.03343},{id:6,name:"John",span:'<span class="badge badge-primary">Primary</span>',createdAt:"2011-10-31",score:.03343}]}},methods:{addFile:function(){console.log("hello")}}},d=r,o=s("2877"),l=Object(o["a"])(d,n,t,!1,null,null,null);e["default"]=l.exports}}]);