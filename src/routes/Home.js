import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';

const HomeApp = () => {
    const [haru, setHaru] = useState('');
    const [harus, setHarus] = useState([]);
    const getHarus = async() => {
        const dbHarus = await dbService.collection('harus').get();
        dbHarus.forEach((document) => {
            const haruOj = {
                ...document.data(),
                id: document.id,
            }
            setHarus((prev) => [haruOj, ...prev]);
        });
    }
    console.log(harus)
    useEffect(() => {
        getHarus();
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        dbService.collection('harus').add({
            haru,
            createdAt: Date.now(),
        })
        setHaru('');
    }
    const onChange = (e) => {
        const {target: {value}} = e;
        setHaru(value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type='text' placeholder="what's in there" value={haru}/>
                <input type='submit' value='HARU IT'/>
            </form>
            <div>
                {harus.map((items) => (
                    <h4>{items.haru}</h4>
                ))}
            </div>
        </div>
    )
}

export default HomeApp;