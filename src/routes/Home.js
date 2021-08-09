import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { dbService } from '../firebase';
import Haru from '../components/Haru';

const HomeApp = ({userObj}) => {
    const [haru, setHaru] = useState('');
    const [harus, setHarus] = useState([]);
    useEffect(() => {
        dbService.collection('harus').onSnapshot((snapshot) => {
            const haruArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),

            }))
            setHarus(haruArray);
        })
    }, [])

    

    const onSubmit = (e) => {
        e.preventDefault();
        if(haru !== '') {
            dbService.collection('harus').add({
                text: haru,
                createdAt: Date.now(),
                createrId: userObj.uid,
            })
            setHaru('');
        }else{
            setHaru('');
        }
  
    }

    const onChange = (e) => {
        const {target: {value}} = e;
        setHaru(value)
    }

    
    return (
        <div className='haru_home_container'>
            <form className='haru_form' onSubmit={onSubmit}>
                <input className='haru_text_bar' onChange={onChange} type='text' placeholder="하고 싶은 말" value={haru}/>
                <input className='haru_it'  type='submit' value='HARU IT'/>
            </form>
            <div>
                {harus.map((haru) => {
                    
                    return (
                        <Haru  key={haru.id} haruobj={haru} isOwner={haru.createrId === userObj.uid}/>
                        //<h4 className={itemsClass ? 'items' : 'items_big'} onClick={onItemsClick}>{items.text}</h4>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeApp;