define([],function(){function e(e,t){var n=e,r=document,i=/^#[\w\-]+/,s=/^([\w\-]+)?\.([\w\-]+)/,o=/^([\w\*]+)$/,u=/^([\w\-]+)?\[([\w]+)(=(\w+))?\]/,t=t==undefined?document:typeof t=="string"?r.getElementById(t.substr(1,t.length)):t;if(i.test(n))return r.getElementById(n.substr(1,n.length))}return e});