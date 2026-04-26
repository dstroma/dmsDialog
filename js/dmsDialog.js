var dmsDialog = {

cb: null,
el: function(n){ return document.getElementById('dmsDialog' + (n||'')); },
di: function(cont,cancBtn,cb) {
	this.cb = cb;

	// add <p> tags
	if (!Array.isArray(cont)) cont = [cont];
	var cont2 = '';
	cont.forEach((e) => {cont2 = cont2 + '<p>' + e + '</p>'});

	this.el('Content').innerHTML = cont2;
	this.el('ButtonCancel').style.display = cancBtn ? 'inline' : 'none';
	this.el().style.display = 'block';
},

pressOK: function(){
	this.el().style.display = 'none';
	if (this.cb) this.cb(true);
},
pressCancel: function(){
	this.el().style.display = 'none';
	if (this.cb) this.cb(false);
},

alert:   function(cont)   { this.di(cont, false, null); },
confirm: function(cont,fn){ this.di(cont, true, fn); },

};
