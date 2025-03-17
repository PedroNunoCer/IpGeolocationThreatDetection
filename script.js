const OPTIONS = {
  method: 'GET',
  url: 'https://ip-lookup-threat-detection-api.p.rapidapi.com/45.8.25.69',
  headers: {
    'x-rapidapi-key': '65b992b384msh5897a739b8d25e2p14a794jsnae4a5e70446c',
    'x-rapidapi-host': 'ip-lookup-threat-detection-api.p.rapidapi.com'
  }
};

const fetchIPInfo = ip => {
  return fetch(`https://ip-lookup-threat-detection-api.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')



$form.addEventListener('submit', async (event)=>{
  event.preventDefault()
  const {value} = $input
  if(!value) return 
  
  $submit.setAttribute('disabled','')
  $submit.setAttribute('aria-busy','true')
  
  
  
  const ipInfo = await fetchIPInfo(value)

  if(ipInfo){
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)

  }

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')
})









