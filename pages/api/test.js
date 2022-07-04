function test(request, response){
const dynamicDate = new Date();

response.json({
    Message: "Hi mr James este eh uma api teste que retorna a a data e hora atual, brevemente o teras no link polegar group.com",
    Date: dynamicDate.toGMTString()
})
}

export default test;