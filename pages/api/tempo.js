function test(request, response){
const dynamicDate = new Date();

response.json({
    Date: dynamicDate.toDateString()
})
}

export default test;