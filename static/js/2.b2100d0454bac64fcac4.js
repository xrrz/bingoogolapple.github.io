webpackJsonp([2],{451:function(e,t,n){function a(e){n(475)}var l=n(16)(n(462),n(487),a,"data-v-6d84b440",null);e.exports=l.exports},459:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(28),l=n.n(a),i=n(17);t.default={computed:l()({},n.i(i.b)(["labels","activeLabel"])),methods:l()({},n.i(i.a)(["setLabels","updateActiveLabel"]),{setActiveLabel:function(e){this.updateActiveLabel(e),this.$router.replace("/")}})}},462:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(482),l=n.n(a);t.default={components:{LabelsList:l.a}}},466:function(e,t,n){t=e.exports=n(448)(!0),t.push([e.i,".label-list[data-v-3fbb5b2e]{list-style:none;-ms-flex-negative:0;flex-shrink:0;padding:20px 26px 0 50px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.label-list li[data-v-3fbb5b2e]{margin-bottom:20px;margin-right:10px}.tag-unchecked[data-v-3fbb5b2e]{background-color:#f2f5f8;color:#849aa4}","",{version:3,sources:["/Users/bingoogolapple/git/WebStorm/BGAIssueBlog/src/components/LabelsList.vue"],names:[],mappings:"AACA,6BACE,gBAAiB,AACjB,oBAAqB,AACjB,cAAe,AACnB,yBAA4B,AAC5B,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,cAAgB,CACrB,AACD,gCACI,mBAAoB,AACpB,iBAAmB,CACtB,AACD,gCACE,yBAA0B,AAC1B,aAAe,CAChB",file:"LabelsList.vue",sourcesContent:["\n.label-list[data-v-3fbb5b2e] {\n  list-style: none;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  padding: 20px 26px 0px 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.label-list li[data-v-3fbb5b2e] {\n    margin-bottom: 20px;\n    margin-right: 10px;\n}\n.tag-unchecked[data-v-3fbb5b2e] {\n  background-color: #f2f5f8;\n  color: #849aa4;\n}\n"],sourceRoot:""}])},468:function(e,t,n){t=e.exports=n(448)(!0),t.push([e.i,".blog-container[data-v-6d84b440]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%}","",{version:3,sources:["/Users/bingoogolapple/git/WebStorm/BGAIssueBlog/src/views/Blog.vue"],names:[],mappings:"AACA,iCACE,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,WAAa,CACd",file:"Blog.vue",sourcesContent:["\n.blog-container[data-v-6d84b440] {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n"],sourceRoot:""}])},473:function(e,t,n){var a=n(466);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(449)("ee043406",a,!0)},475:function(e,t,n){var a=n(468);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(449)("410c1bf3",a,!0)},482:function(e,t,n){function a(e){n(473)}var l=n(16)(n(459),n(485),a,"data-v-3fbb5b2e",null);e.exports=l.exports},485:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"label-list"},[n("li",{on:{click:function(t){e.setActiveLabel(null)}}},[null==e.activeLabel?n("span",{staticClass:"tag",staticStyle:{"background-color":"#3593f2"}},[e._v("ALL")]):n("span",{staticClass:"tag tag-unchecked"},[e._v("ALL")])]),e._v(" "),e._l(e.labels,function(t){return n("li",{key:t.id},[null!=e.activeLabel&&e.activeLabel.name===t.name?n("span",{staticClass:"tag",style:{backgroundColor:"#"+t.color},on:{click:function(t){e.setActiveLabel(null)}}},[e._v(e._s(t.name))]):n("span",{staticClass:"tag tag-unchecked",on:{click:function(n){e.setActiveLabel(t)}}},[e._v(e._s(t.name))])])})],2)},staticRenderFns:[]}},487:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog-container"},[n("labels-list"),e._v(" "),n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.b2100d0454bac64fcac4.js.map