import React,{useState} from 'react';
import { HashRouter } from 'react-router-dom';
import { dbService } from '../firebase';

const Haru = ({haruobj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newHaru,  setNewHaru] = useState(haruobj.text);
    const [itemsClass, setItemsClass] = useState(true);
    const onDeleteClick = async () => {
        const ok = window.confirm('진짜 지울거야?ㅠㅅㅠ');
        if(ok){
            await dbService.doc(`harus/${haruobj.id}`).delete();
        }
    }
    const toggleEditing = () =>setEditing((prev) => !prev);

    const onItemsClick = (e) => {
        setItemsClass(!itemsClass);
    }
    const onReSubmit = async (e) => {
        e.preventDefault();
        await dbService.doc(`harus/${haruobj.id}`).update({
            text: newHaru,
        });
        setEditing(false);
    }
    const onEditingChange = (e) => {
        const {target: {value}} = e;
        setNewHaru(value);
    }
    return (
        <div className='haru_Text_container'>
            {
                editing ? 
                <>
                <form onSubmit={onReSubmit}>
                    <input onChange={onEditingChange} type='text' value={newHaru} required />
                    <input type='submit' value='re haru'  />
                </form>
                <button onClick={toggleEditing}>cancel</button>
                </>
                : 
                <>
                <h4 className={itemsClass ? 'items' : 'items_big'} onClick={onItemsClick}>{haruobj.text}{haruobj.haru}</h4> 
                {isOwner && (
                    <div setItemsClass='delete_edit'> 
                        <button className='deldel'  onClick={onDeleteClick}>x</button>
                        <button className='editedit' onClick={toggleEditing} >edit</button>
                    </div>)}
                </>
            }
            
            
        </div>
    )
}


export default Haru;