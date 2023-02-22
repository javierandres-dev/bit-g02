import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

export const Ex02 = () => {
  const [duck, setDuck] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getDuck= async () => {
    try {
      setLoading(true)
      const res = await fetch('https://random-d.uk/api/v2/random')
      setDuck(await res.json())
    } catch (error) {
      setError(true)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }
  }

  return <section>
    <h2>Patos</h2>
    {error
      ? <Alert variant="danger"><p>Ocurrió un error</p></Alert>
      : loading
      ? <Spinner animation="border" variant="success" />
      : duck && <Image src={duck.url} alt='Duck' thumbnail className='my-5' />
    }
    <Button variant="success" onClick={getDuck} className="d-block mx-auto mb-5">Obtener Pato</Button>
  </section>;
};
