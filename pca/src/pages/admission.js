import React, {useState} from "react";
import Header from "../components/header"
import SideMenu from "../components/side-menu"
import "../css/dashboard.css"
import "../css/admission.css"
import { Student } from "../data";

const Admission = () =>{

    const genStudentIds = () =>{
        const min = 10000000
        const student_id = Math.floor(Math.random()*min)

        return String(student_id)
    }
    
    console.log(genStudentIds())

    const [modal, setModal] = useState(false)
    const [student, setStudent] = useState(Student)
    const [searchQuery, setSearchQuery] = useState('');
    const [formData, setFormData] = useState({
        student_id: '',
        email: '',
        f_name: '',
        l_name: '',
        o_name: '',
        gender: '',
        nationality: '',
        date_of_birth: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any actions with the form data, like sending it to a server
        console.log(formData);
        // Reset the form after submission
        setFormData({
            student_id: genStudentIds(),
            email: '',
            f_name: '',
            l_name: '',
            o_name: '',
            gender: '',
            nationality: '',
            date_of_birth: '',
        });
    }


    const filteredData = Student.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const user = {
        name:"Michael"
    
    }

    const handleRegistration = () =>{
        setModal(!modal)
        console.log("Button Clicked")
    } 

    return (
        <>
            <div className="container">
                <div className="leftMenu">
                    <SideMenu />
                </div>
                <div className="rightContent">
                    <Header user = {user} title ="Students"/>

                    {/* Table of all student */}
                    
                    <div style ={{display: modal ==false ? 'block' : 'none'}}id= "student-list" className="student-list">
                    <div className="page-label">
                            <h3>Students</h3>
                        </div>
                        <div className="tools">
                            
                                <input
                                    type="text"
                                    placeholder="Search by name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            
                            
                                <button onClick={handleRegistration}>
                                    Register Student
                                </button>
                            
                        </div>
                        <div className="student-table">
                            <table>
                                <thead>
                                    <th>ID</th>
                                    <th>F Name</th>
                                    <th>L Name</th>
                                    <th>Class</th>
                                    <th>Section</th>
                                    <th>Actions</th>
                                </thead>

                                <tbody>
                                    {filteredData.map(item => (
                                        <tr className="data" key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.likes}</td>
                                        <td>{item.likes}</td>
                                        <td>{item.dislikes}</td>
                                        <td>
                                            <button onClick={() => handleReaction(item.id, 'like')}>Like</button>
                                            <button onClick={() => handleReaction(item.id, 'dislike')}>Dislike</button>
                                        </td>
                                    </tr>
                                ))}

                                </tbody>

                            </table>
                        </div>
                    </div>


                    {/* Student Registration */}
                    {modal && 
                    
                    <div id = "register" className="registerView">
                        <div className="page-label">
                            <h3>New Student Application Form</h3>
                        </div>
                            <form onSubmit={handleSubmit}>
                                <div className="aca-info">
                                    <div>
                                        <h4>School Details</h4>
                                    </div>
                                    <div className="info-input" style={{marginBottom:"20px"}}>
                                        <label htmlFor="">
                                            Student ID
                                        </label>
                                        <input readonly="true" type="text" placeholder="Auto Generated" />
                                    </div>
                                    <div className="info-data" >
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Class
                                            </label>
                                            <input value={formData.class} onChange={handleChange} requried= "true"  type="text" placeholder="B3" />
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Section
                                            </label>
                                            <select value={formData.section} onChange={handleChange} name="gender" id="" requried= "true">
                                                <option value="a">A</option>
                                                <option value="b">B</option>
                                                <option value="c">C</option>
                                                <option value="d">D</option>
                                            </select>
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Date
                                            </label>
                                            <input value={formData.date} onChange={handleChange}requried= "true" type="date"  />
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Group
                                            </label>
                                            <input value={formData.group} onChange={handleChange} requried= "true" type="text" placeholder="2023/2024" />
                                        </div>

                                    </div>

                                </div>
                                <div className="stu-info">
                                    <div>
                                        <h4>Student Information</h4>
                                    </div>
                                    <div className="info-data" >
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Last Name
                                            </label>
                                            <input value={formData.lastName} onChange={handleChange} requried= "true" type="text" placeholder="B3" />
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                First Name
                                            </label>
                                            <input value={formData.firstName} onChange={handleChange} requried= "true" type="text" placeholder="A" />
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Other Names
                                            </label>
                                            <input value={formData.otherName} onChange={handleChange} requried= "true" type="date"  />
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Gender
                                            </label>
                                            <select value={formData.gender} onChange={handleChange} name="gender" id="">
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Date of birth
                                            </label>
                                            <input value={formData.dob} onChange={handleChange} requried= "true" type="date"  />
                                        </div>


                                    </div>

                                </div>
                                <div className="stu-info">
                                    <div>
                                        <h4>Sponsor Information</h4>
                                    </div>
                                    <div className="info-data" >
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Last Name
                                            </label>
                                            <input value={formData.lastName} onChange={handleChange} requried= "true" type="text" placeholder="B3" />
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                First Name
                                            </label>
                                            <input value={formData.firstName} onChange={handleChange} requried= "true" type="text" placeholder="A" />
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Other Names
                                            </label>
                                            <input value={formData.otherName} onChange={handleChange} requried= "true" type="date"  />
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Gender
                                            </label>
                                            <select value={formData.gender} onChange={handleChange} name="gender" id="">
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div className="info-input">
                                            <label htmlFor="">
                                                Date of birth
                                            </label>
                                            <input value={formData.dob} onChange={handleChange} requried= "true" type="date"  />
                                        </div>


                                    </div>

                                </div>
                                <div className="submit">
                                    <button type= "submit">Submit</button>
                                </div>

                            </form>
                    </div>
                   }
                </div>
            </div>
        </>
    )
}

export default Admission;