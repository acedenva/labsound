const fs = require('fs')
const request = require('request')
const cookie = require('tough-cookie-filestore')
const uri = 'https://www.amazon.de/'
//const uri = 'https://streamlabs.com/api/v5/cloudbot/loyalty-store'
let jar = request.jar(new cookie('./cookies.json'))
request({
		uri,
		jar,
	},
	function (err,res,body){
		console.log(res)
})


function getToughJar(jsonPath) {
	let importObj = JSON.parse(fs.readFileSync(jsonPath,{encoding:'utf8'}))
	let jar = {}
	importObj.forEach((cookieObj)=>{
		
	})	

} 
