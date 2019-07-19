const fs = require('fs')
const request = require('request')
const toughCookie = require('tough-cookie')
const toughCookieFile = require('tough-cookie-filestore')

const uri = 'https://streamlabs.com/dashboard#/stats'
//const uri = 'https://www.amazon.de/'
//const uri = 'https://streamlabs.com/api/v5/cloudbot/loyalty-store'
let jar = getToughJar('./cookies.json')
console.log(jar)
request({
		uri,
		jar,
	},
	function (err,res,body){
		console.log(body)
})


function getToughJar(jsonPath) {
	let testArr = []
	let importArr = JSON.parse(fs.readFileSync(jsonPath,{encoding:'utf8'}))
	let jar = request.jar() 
	importArr.forEach(cookieObj => { 
		let cookieString = ''
		cookieString += cookieObj.name + '=' + cookieObj.value + ';'
		for ( directive in cookieObj ) {
			if (directive != 'name' || directive != 'value') {
				cookieString += directive + '=' + cookieObj[directive] + ';'
			}
		}
//		console.log(cookieString)
		jar.setCookie(toughCookie.parse(cookieString), 'https://' + cookieObj.domain) //(cookieObj.domain.match(/[\w]+\.[\w]+$/))[0])
	})	
	return jar 
} 


//console.log(getToughJar("./browsercookies.json"))
