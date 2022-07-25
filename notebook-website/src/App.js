import { useState , useEffect } from 'react'
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList'
import Search from './components/Search'
import Header from './components/Header'
import './components/styles/app.css'

const App = () => {
    const [notes , setNotes] = useState([]);

    
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

    // useEffect(() => {
    //     const savedNotes = JSON.parse(
    //         localStorage.getItem('react-notes-app-data')
    //     );

    //     if(savedNotes){
    //         setNotes(savedNotes);
    //     }
    // })

    // useEffect(()=> {
    //     localStorage.setItem(
    //         'react-notes-app-data',
    //         JSON.stringify(notes)
    //     );
    // }, [notes]);

    const addNote = (title , text) => {
        // console.log([title  , text]);
        const date = new Date();
        const newNote = {
            id : nanoid(),
            title : title,
            text : text,
            date : date.toLocaleDateString()
        }
        const newNotes = [...notes , newNote]
        setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const deleteNotes = notes.filter((note) => note.id !== id);
        setNotes(deleteNotes);
    }

    const [searchText , setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

  

    return(
        <div className={`${darkMode && 'dark-mode'}`}>
             <div className="container">
                <Header handlerToggleDarkMode={setDarkMode} />
                <Search handlerSearchNote = {setSearchText}/>
                <NoteList
                notes={notes.filter((note) =>
                    note.text.toLowerCase().includes(searchText)
                )}
                 handlerAddNote={addNote} 
                 handlerDeleteNote={deleteNote}

                />
        </div>
        </div>
    )
}

export default App
