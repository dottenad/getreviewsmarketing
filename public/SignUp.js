var button = document.getElementById('loginButton')
button.addEventListener('click', function(){
    var emailInput = document.getElementById('email')
    var url = 'https://app.getreviews.ai/signup?e=' + emailInput.value
    location.href = url
})