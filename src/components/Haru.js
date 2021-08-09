import React,{useState} from 'react';
import { HashRouter } from 'react-router-dom';
import { dbService } from '../firebase';

const Haru = ({haruobj, isOwner}) => {
    const [itemsClass, setItemsClass] = useState(true);
    const onDeleteClick = async () => {
        const ok = window.confirm('진짜 지울거야?ㅠㅅㅠ');
        if(ok){
            await dbService.doc(`harus/${haruobj.id}`).delete();
        }
    }

    const onItemsClick = (e) => {
        setItemsClass(!itemsClass);
    }
    return (
        <div className='haru_Text_container'>
            <h4 className={itemsClass ? 'items' : 'items_big'} onClick={onItemsClick}>{haruobj.text}</h4> 
            {isOwner && (
            <div setItemsClass='delete_edit'> 
                <button className='deldel'  onClick={onDeleteClick}>x</button>
                <button className='editedit' >edit</button>
            </div>)}
            
        </div>
    )
}


export default Haru;