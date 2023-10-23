import { useState, useEffect } from 'react';

function Nasa() {
    const [explanation, setExplanation] = useState('');
  const [url, setUrl] = useState('');
  const [mediaType, setMediaType] = useState('');

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json())
    .then(data => {
      setExplanation(data.explanation);
      setUrl(data.url);
      setMediaType(data.media_type);
    })
    .catch(err => console.log(err))
  }, [])

  if (!url) {
    return <>Loading...</>;
  }
  else if (mediaType === 'image') {
    return (
      <>
      <h2>NASA&apos;S APOD API</h2>
        <br />
        <img alt="Nasa APOD" src={url} style={{width:"60%"}} />
        <p>Explanation: {explanation}</p>
      </>
    );
  }
  else {
    return (
      <>
        <br />
        <iframe width="520" height="415" src={url} title="Nasa APOD"></iframe>
        <p>Explanation: {explanation}</p>
      </>
    );
  }
}

export default Nasa;