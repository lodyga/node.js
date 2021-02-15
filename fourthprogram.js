var express = require("express");
var app = express();
app.engine('pug', require('pug').__express)
app.set('view engine', 'jade');
app.route('/Node').get(function(req,res)
{
    res.send('Tutorial on Node');
});
app.route('/Angular').get(function(req,res)
{
    res.send("Tutorial on Angular");
});
app.route('/qw').get(function(req,res)
{
    res.send('Welcome to Guru99 Tutorials');
});
app.get('/',function(req,res)
{
	res.send('dup');
//res.render('index',
//{title:'Guru99',message:'Welcome'})
});
var server=app.listen(3000,function() {});