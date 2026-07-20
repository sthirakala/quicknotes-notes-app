import {useState} from "react";
import TextInput from './inputs/TextInput'; 
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput'; 


const NoteForm = ({notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium', 
        description: ''
    })
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        } );
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!formData.title || !formData.description){
            return;
        }
        const newNote = {id: Date.now(), ...formData};
        setNotes([newNote, ...notes]);
        setFormData({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: '',
        });

    }
    
    return ( 
        <>
        <button onClick = {()=>setIsFormVisible(!isFormVisible)} className = "w-full bg-gray-100 border border-gray-300 text-blue-800 py-2 rounded-lg cursor-pointer hover:bg-blue-200 hover:border-blue-300 transition mb-4">
            {isFormVisible ? 'Hide Form ✖️' : 'Add New Note ➕'} </button>
        {isFormVisible && (<form  onSubmit = {handleSubmit} className = "mb-6">
            <TextInput
                label = 'Title'
                name = 'title'
                value = {formData.title}
                onChange = {handleChange}
                required  

            />
            <SelectInput
                label = 'Priority'
                name = 'priority'
                value = {formData.priority}
                onChange = {handleChange}
                options = {[
                    {value:"High", label: "High ❤️"},
                    {value:"Medium", label: 'Medium 💛'},
                    {value: "Low", label: 'Low 💚'},
                ]}
            
            
            />
            <SelectInput
                label = 'Category'
                name = 'category'
                value = {formData.category}
                onChange = {handleChange}
                options = {[
                    {value:"Work", label: "Work 📂"},
                    {value:"School", label: 'School 📓'},
                    {value: "Personal", label: 'Personal 🔐'},
                ]}
            
            
            />
            <TextAreaInput
                label = 'Description'
                name = 'description'
                value = {formData.description}
                onChange = {handleChange}
                required
            
            
            />
            <button className = "w-full bg-blue-100 text-black block font-semibold py-2 rounded-lg cursor-pointer hover: bg-blue-100">Add Note</button>
        </form>)}
        </>





     );
}
 
export default NoteForm;