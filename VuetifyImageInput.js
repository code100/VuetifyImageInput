(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("v-dragged"),require("paperduck")):"function"==typeof define&&define.amd?define(["v-dragged","paperduck"],b):a.VuetifyImageInput=b(a.VDragged,a.PaperDuck)})(this,function(a,b){"use strict";var i=Math.max;function c(a){return function(){return a}}function d(a){return"function"==typeof a}function e(a){return d(a)?a:c(a)}function f(a,b,c){var d=Math.min;return d(i(a,b),c)}function g(){if(this.internalImageData){var a=b.from(this.internalImageData);return this.flippedHorizontally&&(a=a.flop()),this.flippedVertically&&(a=a.flip()),this.rotated&&(a=a.rotate90()),a=a.scale(this.scaling),a=a.crop(this.cropLeft,this.cropTop,this.imageWidth,this.imageHeight),a.toDataURL("image/"+this.imageFormat,this.imageQuality)}return null}function h(a){var c=this;(this.imageData||a)&&this.imageData!==a&&b.load(a).then(function(b){var d=b.width,e=b.height;d&&e?(c.internalImageData=a,c.internalImageWidth=d,c.internalImageHeight=e,c.flippedHorizontally=!1,c.flippedVertically=!1,c.rotated=!1,c.scaling=0,c.center()):c.internalImageData=null}).catch(function(){})}a=a&&a.hasOwnProperty("default")?a["default"]:a,b=b&&b.hasOwnProperty("default")?b["default"]:b;var j={MyDrag:a.directive},k={clearable:{type:Boolean,default:!1},clearIcon:{type:[Function,String],default:function(){return this.$vuetify.icons.clear}},clearIconStyle:[Function,Object],disabled:{type:Boolean,default:!1},flipHorizontallyIcon:{type:[Function,String],default:"flip"},flipHorizontallyIconStyle:[Function,Object],flipVerticallyIcon:{type:[Function,String],default:"flip"},flipVerticallyIconStyle:{type:[Function,Object],default:c({transform:"rotate(90deg)"})},fullHeight:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},hideActions:{type:Boolean,default:!1},imageQuality:{},imageHeight:{type:Number,default:256},imageFormat:{type:String,default:"png"},imageWidth:{type:Number,default:256},overlayBackgroundColor:{type:String,default:"rgba(0,0,0,0.5)"},overlayBorderColor:{type:String,default:"#fff"},overlayBorderWidth:{type:String,default:"4px"},overlayPadding:{type:String,default:"50px"},readonly:{type:Boolean,default:!1},rotateClockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateClockwiseIconStyle:{type:[Function,Object],default:c({transform:"scaleX(-1)"})},rotateCounterclockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateCounterclockwiseIconStyle:[Function,Object],uploadIcon:{type:[Function,String],default:"cloud_upload"},uploadIconStyle:[Function,Object],value:String},l=Object.assign({},{checkeredBackground:function(){return["url('data:image/svg+xml;base64,"+btoa("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\" fill-opacity=\"0.2\"><rect x=\"1\" width=\"1\" height=\"1\"/><rect y=\"1\" width=\"1\" height=\"1\"/></svg>")+"')","center center / 16px 16px","repeat","#fff"].join(" ")},cropBottom:function(){return this.displayedInternalImageHeight-this.imageHeight-this.cropTop},cropLeft:{get:function(){return f(this.dirtyCropLeft,0,this.displayedInternalImageWidth-this.imageWidth)},set:function(a){this.dirtyCropLeft=a}},cropRight:function(){return this.displayedInternalImageWidth-this.imageWidth-this.cropLeft},cropTop:{get:function(){return f(this.dirtyCropTop,0,this.displayedInternalImageHeight-this.imageHeight)},set:function(a){this.dirtyCropTop=a}},displayedInternalImageHeight:function(){return this.scaling*this.rotatedInternalImageHeight},displayedInternalImageWidth:function(){return this.scaling*this.rotatedInternalImageWidth},imageData:g,maxScaling:function(){return i(1,this.minScaling)},minScaling:function(){return this.rotatedInternalImageWidth&&this.rotatedInternalImageHeight?i(this.imageWidth/this.rotatedInternalImageWidth,this.imageHeight/this.rotatedInternalImageHeight):0},rotatedInternalImageHeight:function(){return this.rotated?this.internalImageWidth:this.internalImageHeight},rotatedInternalImageWidth:function(){return this.rotated?this.internalImageHeight:this.internalImageWidth},scaling:{get:function(){return f(this.dirtyScaling,this.minScaling,this.maxScaling)},set:function(a){this.dirtyScaling=a}}},function(a,b){var c={};return Object.entries(a).forEach(function(d){var e=d[0],f=d[1];c[e]=b(f,e,a)}),c}({remappedClearIcon:"clearIcon",remappedClearIconStyle:"clearIconStyle",remappedFlipHorizontallyIcon:"flipHorizontallyIcon",remappedFlipHorizontallyIconStyle:"flipHorizontallyIconStyle",remappedFlipVerticallyIcon:"flipVerticallyIcon",remappedFlipVerticallyIconStyle:"flipVerticallyIconStyle",remappedRotateClockwiseIcon:"rotateClockwiseIcon",remappedRotateClockwiseIconStyle:"rotateClockwiseIconStyle",remappedRotateCounterclockwiseIcon:"rotateCounterclockwiseIcon",remappedRotateCounterclockwiseIconStyle:"rotateCounterclockwiseIconStyle",remappedUploadIcon:"uploadIcon",remappedUploadIconStyle:"uploadIconStyle"},function(a){return function(){return e(this[a]).call(this)}})),m={name:"VImageInput",components:{MyUploader:{inject:{theme:{default:{isDark:!1}}},props:["disabled","uploadIcon","uploadIconStyle"],methods:{onChange:function(a){var b=a.target.files;b&&this.uploadFiles(b)},onClick:function(){this.disabled||(this.$refs.input.value=null,this.$refs.input.click())},onDragLeave:function(a){a.preventDefault()},onDragOver:function(a){a.preventDefault()},onDrop:function(a){if(a.preventDefault(),!this.disabled){var b=a.dataTransfer.files;b&&this.uploadFiles(b)}},uploadFile:function(a){var b=this,c=new FileReader;c.addEventListener("load",function(){b.$emit("load",c.result)}),c.readAsDataURL(a)},uploadFiles:function(a){a.length&&this.uploadFile(a[0])}},render:function(a){return a("div",{style:{alignItems:"center",border:"1px dashed rgba("+(this.theme.isDark?"255,255,255,0.7":"0,0,0,0.54")+")",borderRadius:"6px",cursor:"pointer",display:"flex",justifyContent:"center"},on:{dragleave:this.onDragLeave,dragover:this.onDragOver,drop:this.onDrop,click:this.onClick}},[a("input",{style:{display:"none"},attrs:{type:"file"},on:{change:this.onChange},ref:"input"}),a("VIcon",{style:this.uploadIconStyle,props:{large:!0}},this.uploadIcon)])}}},directives:j,inject:{theme:{default:{isDark:!1}}},props:k,data:function(){return{dirtyCropLeft:0,dirtyCropTop:0,dirtyScaling:0,flippedHorizontally:!1,flippedVertically:!1,internalImageData:null,internalImageHeight:0,internalImageWidth:0,rotated:!1}},computed:l,created:function(){this.$watch("value",function(a){this.load(a)},{immediate:!0}),this.$watch("imageData",function(a){this.$emit("input",a)},{immediate:!0})},methods:{center:function(){var a=Math.ceil;this.cropLeft=a((this.displayedInternalImageWidth-this.imageWidth)/2),this.cropTop=a((this.displayedInternalImageHeight-this.imageHeight)/2)},clear:function(){this.internalImageData=null},createActionButtonElement:function(a,b,c,d){return a("VBtn",{class:"ma-1",props:{disabled:this.disabled,flat:!0,icon:!0},on:{click:b}},[a("VIcon",{style:d},c)])},createClearButtonElement:function(a){return this.createActionButtonElement(a,this.clear,this.remappedClearIcon,this.remappedClearIconStyle)},createFlipHorizontallyButtonElement:function(a){return this.createActionButtonElement(a,this.flipHorizontally,this.remappedFlipHorizontallyIcon,this.remappedFlipHorizontallyIconStyle)},createFlipVerticallyButtonElement:function(a){return this.createActionButtonElement(a,this.flipVertically,this.remappedFlipVerticallyIcon,this.remappedFlipVerticallyIconStyle)},createRotateClockwiseButtonElement:function(a){return this.createActionButtonElement(a,this.rotateClockwise,this.remappedRotateClockwiseIcon,this.remappedRotateClockwiseIconStyle)},createRotateCounterclockwiseButtonElement:function(a){return this.createActionButtonElement(a,this.rotateCounterclockwise,this.remappedRotateCounterclockwiseIcon,this.remappedRotateCounterclockwiseIconStyle)},createScaleSliderElement:function(a){var b=this;return a("VSlider",{class:"mx-2 my-1",props:{disabled:this.disabled,hideDetails:!0,max:this.maxScaling,min:this.minScaling,step:1/1e3,value:this.scaling},on:{input:function(a){b.scaling=a}}})},flipHorizontally:function(){this.rotated?this.flippedVertically=!this.flippedVertically:this.flippedHorizontally=!this.flippedHorizontally,this.cropLeft=this.cropRight},flipVertically:function(){this.rotated?this.flippedHorizontally=!this.flippedHorizontally:this.flippedVertically=!this.flippedVertically,this.cropTop=this.cropBottom},load:h,onDrag:function(a){var b=Number.isFinite,c=a.deltaX,d=a.deltaY;b(c)&&b(d)&&(this.cropLeft-=c,this.cropTop-=d)},rotateClockwise:function(){var a=this.cropLeft,b=this.cropBottom;this.rotated?(this.rotated=!1,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically):this.rotated=!0,this.cropLeft=b,this.cropTop=a},rotateCounterclockwise:function(){var a=this.cropRight,b=this.cropTop;this.rotated?this.rotated=!1:(this.rotated=!0,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically),this.cropLeft=b,this.cropTop=a},scale:function(a){this.scaling*=a,this.cropLeft*=a,this.cropTop*=a}},render:function(a){return a("div",{style:Object.assign({},{display:"inline"},this.fullWidth?{width:"100%"}:{},this.fullHeight?{height:"100%"}:{})},[a("div",{style:{display:"table",height:0,minHeight:"100%",minWidth:"100%",width:0}},[a("div",{style:{display:"table-row"}},[a("div",{style:{display:"table-cell",height:"100%",position:"relative",width:"100%"}},[a("div",Object.assign({},{style:Object.assign({},{alignItems:"center",background:this.checkeredBackground,display:"flex",height:"100%",justifyContent:"center",overflow:"hidden",padding:this.overlayPadding,position:"relative",width:"100%"},this.internalImageData?{}:{opacity:0,visibility:"hidden"})},this.disabled||this.readonly?{}:{directives:[{name:"MyDrag",value:this.onDrag,modifiers:["prevent"]}]}),[a("div",{style:{height:this.imageHeight+"px",pointerEvents:"none",position:"relative",width:this.imageWidth+"px"}},[a("img",{style:{left:-this.cropLeft+"px",pointerEvents:"none",position:"absolute",top:-this.cropTop+"px",transform:["scale("+this.scaling+")"].concat(this.rotated?["rotate(90deg)","translateY(-100%)"]:[],this.flippedVertically?["translateY(100%)","scaleY(-1)"]:[],this.flippedHorizontally?["translateX(100%)","scaleX(-1)"]:[]).join(" "),transformOrigin:"0 0"},attrs:{src:this.internalImageData}}),a("div",{style:{border:this.overlayBorderWidth+" solid "+this.overlayBorderColor,bottom:0,boxShadow:"0 0 4000px 4000px "+this.overlayBackgroundColor,boxSizing:"content-box",left:0,position:"absolute",right:0,top:0}})])])].concat(this.internalImageData?[]:[a("MyUploader",{props:{disabled:this.disabled||this.readonly,uploadIcon:this.remappedUploadIcon,uploadIconStyle:this.remappedUploadIconStyle},style:{bottom:0,left:0,position:"absolute",right:0,top:0},on:{load:this.load}})])),a("div",{style:Object.assign({},{display:"table-cell",verticalAlign:"top"},this.internalImageData?{}:{opacity:0,visibility:"hidden"})},[a("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:"100%"}},(this.clearable?[this.createClearButtonElement(a),a("v-spacer")]:[]).concat(this.hideActions||this.readonly?[]:[this.createFlipHorizontallyButtonElement(a),this.createFlipVerticallyButtonElement(a),this.createRotateClockwiseButtonElement(a),this.createRotateCounterclockwiseButtonElement(a)]))])]),a("div",{style:{display:"table-row"}},[a("div",{style:Object.assign({},{display:"table-cell"},this.internalImageData?{}:{opacity:0,visibility:"hidden"})},this.hideActions||this.readonly?[]:[this.createScaleSliderElement(a)]),a("div",{style:{display:"table-cell"}})])])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(m.name,m),m});
