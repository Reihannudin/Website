import { useState } from 'react';


const AddNote = ({handlerAddNote}) => {

    const [titleText , setTitleText] = useState('');
    const titleHandleChange = (event) => {
        if(characterTitleLimits - event.target.value.length >= 0){
            setTitleText(event.target.value)
        }
    }

    const [noteText , setNoteText] = useState('');
    const textHandleChange = (event) => {
        if(characterTextLimits - event.target.value.length >= 0){
            setNoteText(event.target.value)
        }
    }

    const characterTitleLimits = 50;
    const characterTextLimits = 200;

    const handleSaveClick = () => {
        if(titleText.trim().length > 0 || noteText.trim().length > 0){
          handlerAddNote(titleText , noteText)
          setTitleText('')
          setNoteText('')
        }
    }

    return(
        <div className='note new'>
             <div className='container-title'>
                <textarea 
                   rows='2'
                   cols='100'
                   placeholder='Type to add a title'
                   onChange={titleHandleChange}
                   value={titleText}
                ></textarea>
            </div>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note'
                onChange={textHandleChange}
                value={noteText}
            ></textarea>
            <div className='note-footer'>
                <div className='limitText'>
                    <small className='limitText'>Title : {characterTitleLimits - titleText.length} Remaining</small>
                    <small className='limitText'>Text : {characterTextLimits - noteText.length} Remaining</small>
                </div>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;