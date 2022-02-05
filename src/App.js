import React,{useContext, useState,useEffect} from 'react';
import Row from './Row';
import {ThemeContext} from './context'

export default function App(props) {
  const name = useFormInput('kotbass');
  const surname = useFormInput('lucksila')
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();

  useEffect(() => {
    document.title = name
  })

  return (
    <section style={theme}>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Surname">
        <input {...surname}/>
      </Row>
      <Row label="Width">
        {width}
      </Row>
    </section>
  );
}

function useFormInput(initialValue) {
  const [value,setValue] = useState(initialValue)
  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange:handleChange
  }
}

function useWindowWidth() {
  const [width,setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  })
  return width;
}