function test(request, response){
const dynamicDate = new Date();

response.json({
    Date: dynamicDate.toGMTString()
})
}

export default test;