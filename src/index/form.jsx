import { useState } from 'react';
import '../index/form.css';

function Form() {
    const [formData, setFormData] = useState({
        dataStudentName: '',
        dataAdvisorName: '',
        dataTitle: '',
        dataJournalName: '',
        dataVolume: '',
        dataNumber: '',
        dataYear: ''
    });
    const [submittedData, setSubmittedData] = useState([]);

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formData.dataStudentName.trim() ||
            !formData.dataAdvisorName.trim() ||
            !formData.dataTitle.trim() ||
            !formData.dataJournalName.trim() ||
            !formData.dataVolume ||
            !formData.dataNumber ||
            !formData.dataYear) 
        { 
            alert("Please provide complete information");
            return; 
        }
        setSubmittedData([...submittedData, formData]);
        saveDataToLocalStorage([...submittedData, formData]);
        setFormData({
            dataStudentName: '',
            dataAdvisorName: '',
            dataTitle: '',
            dataJournalName: '',
            dataVolume: '',
            dataNumber: '',
            dataYear: ''
        });
    }

    function saveDataToLocalStorage(data) {
        localStorage.setItem('submittedData', JSON.stringify(data));
    }
   
    return (
        <div className='container'> 
         
            <div className='form-wrapper'>
                <form className='default-form' onSubmit={handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center'
                }}>   
                    <h1>AMS Student Publication</h1>
                    <h2>Insert Publication Data</h2>
                    <div style={{ width: '100%' }}>
                        <p>ชื่อนักศึกษา (Student name)</p>
                        <input type='text' className='default-font-size' name="dataStudentName" style={{ width: '100%' }} onChange={handleChange} value={formData.dataStudentName} />
                    </div>

                    <div style={{ width: '100%' }}>
                        <p>ชื่ออาจารย์ที่ปรึกษา (Advisor name)</p>
                        <input type='text' className='default-font-size' name="dataAdvisorName" style={{ width: '100%' }} onChange={handleChange} value={formData.dataAdvisorName} />
                    </div>

                    <div style={{ width: '100%' }}>
                        <p>ชื่อเรื่อง (Title)</p>
                        <input type='text' className='default-font-size' name="dataTitle" style={{ width: '100%' }} onChange={handleChange} value={formData.dataTitle} />
                    </div>

                    <div style={{ width: '100%' }}>
                        <p>ชื่อวารสาร (Journal name)</p>
                        <input type='text' className='default-font-size' name="dataJournalName" style={{ width: '100%' }} onChange={handleChange} value={formData.dataJournalName} />
                    </div>

                    <div style={{ width: '100%' }}>
                        <p>ปีที่พิมพ์วารสาร (Volume)</p>
                        <input type='number' className='default-font-size' name="dataVolume" style={{ width: '100%' }} onChange={handleChange} value={formData.dataVolume} />
                    </div>

                    <div style={{ width: '100%' }}>
                        <p>ฉบับที่ (Issue/No.)</p>
                        <input type='number' className='default-font-size' name="dataNumber" style={{ width: '100%' }} onChange={handleChange} value={formData.dataNumber} />
                    </div>

                    <div style={{ width: '100%' }}>
                        <p>ปีที่ตีพิมพ์ (Year)</p>
                        <input type='number' className='default-font-size' name="dataYear" style={{ width: '100%' }} onChange={handleChange} value={formData.dataYear} />
                    </div>

                    <button style={{
                        margin: '20px 0',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        cursor: 'pointer',
                        width: '100%',
                    }} type='submit'>Insert</button>
                </form>

                {submittedData.length > 0 && (
                    <div className='submitted-data' style={{
                        marginTop: '20px',
                        padding: '10px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '5px',
                        color: 'black',
                    }}>
                        <h3>Submitted Data:</h3>
                        {submittedData.map((data, index) => (
                            <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                                <p><strong>Student Name:</strong> {data.dataStudentName}</p>
                                <p><strong>Advisor Name:</strong> {data.dataAdvisorName}</p>
                                <p><strong>Title:</strong> {data.dataTitle}</p>
                                <p><strong>Journal Name:</strong> {data.dataJournalName}</p>
                                <p><strong>Volume:</strong> {data.dataVolume}</p>
                                <p><strong>Issue/No.:</strong> {data.dataNumber}</p>
                                <p><strong>Year:</strong> {data.dataYear}</p>
                            </div>
                        ))}
                    </div>
                )}
            <h3>
                ห้องสมุดคณะเทคนิคการแพทย์ มหาวิทยาลัยเชียงใหม่ 
                <br/>
                110 ถนนอินทวโรรส ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่ 50200
                <br/>
                กันตภณ พรมคำ © 2025
            </h3>
            </div>
        </div>
    );
}

export default Form;
