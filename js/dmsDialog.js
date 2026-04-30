var dmsDialog = {

cb: null,

on: false,

q: [],

qLimit: 8,

el: function(n) {
	var el = document.getElementById('dmsDialog' + (n||''));
	if (!el) {
		this.setup();
		return this.el(n);
	}
	return el;
},

di: function(cont,cancBtn,cb) {
	if (this.on) {
		if (this.q.length < this.qLimit)
			this.q.push([cont,cancBtn,cb]);
		return;
	}
	this.cb = cb;
	this.on = true;

	// add <p> tags
	if (!Array.isArray(cont)) cont = [cont];
	var cont2 = '';
	cont.forEach((e) => {cont2 = cont2 + '<p>' + e + '</p>'});

	this.el('Content').innerHTML = cont2;
	this.el('ButtonCancel').style.display = cancBtn ? 'inline' : 'none';
	this.el().style.display = 'block';
},

qShow: function() {
	if (this.q.length) {
		var e = this.q.shift();
		this.di(e[0],e[1],e[2]);
	}
},

pressOK: function(){
	this.el().style.display = 'none';
	if (this.cb) this.cb(true);
	this.on = false;
	this.qShow();
},

pressCx: function(){
	this.el().style.display = 'none';
	if (this.cb) this.cb(false);
	this.on = false;
	this.qShow();
},

alert: function(cont) { this.di(cont, false, null); },

confirm: function(cont,fn){ this.di(cont, true, fn); },

setup: function() {
	var div = document.createElement("div");
	div.id = 'dmsDialog';
	div.className = 'dmsDialog';
	div.innerHTML = '<div class="overlay"></div>\
		<div class="dialog">\
			<div id="dmsDialogContent"></div>\
			<div class="buttons">\
				   <button id="dmsDialogButtonCancel" onclick="return dmsDialog.pressCx();" class="cancel">Cancel</button><button id="dmsDialogButtonOK" onclick="return dmsDialog.pressOK();" class="ok">OK</button>\
			</div>\
		</div>';

	document.body.appendChild(div);
}

};
