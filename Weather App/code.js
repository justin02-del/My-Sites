document.getElementById('search').addEventListener('click',function(){
    const countryToSearch=document.getElementById('countryInput').value;
    //make API call
    fetch('https://api.openweathermap.org/data/3.0/onecall?lat=-26.190877107620658&lon=28.03051435853526&units=metric&appid=7c27ab50d30426acbcb5d10d5f4cfa1b').then(
        response=>{
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return response.json();
        }
    )
    .then(data=>{
        //handeling the api response
        console.log(data)
        const currentWeather = data.current;
        var myJSON = JSON.stringify(currentWeather);
        console.log(currentWeather[2])
        console.log(myJSON)
        console.log(myJSON[2])
        console.log(myJSON[5])
        console.log(myJSON[0])



        //document.write(myJSON);
    })
    //handel an error
    .catch(error=>{
        console.log('there was an error',error)
    })
})
