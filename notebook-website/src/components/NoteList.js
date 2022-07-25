import Note from './Note'
import AddNote from './AddNote'
import './styles/nodeList.css'


const NodeList = ({ notes , handlerAddNote , handlerDeleteNote}) => {
    return (
        <div className="node-list">
            { notes.map((note) => (
                <Note 
                    id={note.id} 
                    title={note.title} 
                    text={note.text} 
                    date={note.date}
                    handlerDeleteNote={handlerDeleteNote} />
            ))}
            <AddNote handlerAddNote={handlerAddNote}/>

        </div>
    )
}

export default NodeList;