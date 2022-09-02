document.querySelector('button').addEventListener('click', getFetch).value = ""

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=me6xABOtdbiwWEpn1SpH7PhNeGDe0jxoF5f83k9q&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        if(data.media_type === 'image') {
          document.querySelector('.space').src = data.hdurl
          document.querySelector('iframe').style.display = 'none'
          document.querySelector('.space').style.display = 'block'
        }else if(data.media_type === 'video') {
          document.querySelector('iframe').src = data.url
          document.querySelector('.space').style.display = 'none';
          document.querySelector('iframe').style.display = 'block';
        }
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

