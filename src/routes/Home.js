import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { dbService } from '../firebase';

const HomeApp = () => {
    const [haru, setHaru] = useState('');
    const [harus, setHarus] = useState([]);
    const [itemsClass, setItemsClass] = useState(true);
    const [dummy, reload] = useState(false);
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
        if(haru !== '') {
            dbService.collection('harus').add({
                haru,
                createdAt: Date.now(),
            })
            setHaru('');
        }else{
            setHaru('');
        }
        console.log(harus)
        setTimeout(hi,500)      
    }
    const hi = () => {
        console.log("hi");
        
        window.location.reload();
    }
    const onChange = (e) => {
        const {target: {value}} = e;
        setHaru(value)
    }
    const onItemsClick = (e) => {
        setItemsClass(!itemsClass);
    }
    
    return (
        <div className='haru_home_container'>
            <form className='haru_form' onSubmit={onSubmit}>
                <input className='haru_text_bar' onChange={onChange} type='text' placeholder="하고 싶은 말" value={haru}/>
                <input className='haru_it'  type='submit' value='HARU IT'/>
            </form>
            <div>
                {harus.map((items) => {
                    
                    return (
                        <h4 className={itemsClass ? 'items' : 'items_big'} onClick={onItemsClick}>{items.haru}</h4>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeApp;