import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'


const backend_uri = 'https://api.nikitabobylev.site/items'


function App() {
    const [items, setItems] = useState(null)

    const fetchItems = () => {
        axios.get(backend_uri).then(r => {
            setItems(r.data)
        })
    }

    useEffect(() => {
        fetchItems()
        setInterval(() => {
            fetchItems()
        }, 2000)
    }, [])

    return (
        <>
            {items && items.map(item => {
                return <span style={{padding: '0px 4px'}} key={item.name} className="roll-out">
          <img src={item.img} alt='logo' width="16" style={{padding: '0px 5px'}}></img>
          <span>{item.name}</span>
        </span>
            })}
        </>
    )
}

export default App
