import './styles/note.css'


const Node = ({ id , title , text , date , handlerDeleteNote }) => {
    return (
        <>
         <div className='note'>
            <div className='container-button'>
                <span className='arcive-button'></span>
                <span  className='edit-button'></span>
                <span onClick={() => handlerDeleteNote(id)} className='delete-button'></span>
            </div>
            <div className='note-content'>
                <div className='container-text'>
                    <div className='container-title'>
                        <h2 className='title'>{title}</h2>
                    </div>
                    <span className='text'>{text}</span>
                </div>
            </div>    
            <div className='note-footer'>
                <small>{date}</small>
            </div>
        </div>
        </>
    )
}

export default Node;