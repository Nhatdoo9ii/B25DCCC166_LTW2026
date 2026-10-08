import { useState } from "react";
import  StudentForm  from './components/StudentForm.jsx';
import  StudentList  from './components/StudentList.jsx';
import "./App.css";
const App = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      score: 8.5,
      class: 'D25CQCC01'
    },

    {
      id: 2,
      name: 'Trần Văn B',
      score: 7.5,
      class: 'D25CQCC02'
    },

    {
      id: 3,
      name: 'Lê Văn C',
      score: 4.5,
      class: 'D25CQCC03'
    }
  ]);

  const [filter, setFilter] = useState("all");

  const handleAddStudent = (student) => {
    const newStudent = {
      ...student,
      id: students.length + 1
    };

    setStudents((prevStudents) => [
      ...prevStudents,
      newStudent
    ]);
  };

  const handleDeleteStudent = (id) => {
    setStudents((prevStudents) => 
      prevStudents.filter((student) => student.id !== id)
    );
  }

  const filteredStudents = students.filter((student) => {
    if (filter === "excellent") {
        return student.score >= 8;
    }

    if (filter === "failed") {
        return student.score < 5;
    }

    return true;
  });

  const totalScore = students.reduce(
        (total, student) => total + student.score,
        0
    );

  const averageScore =
    students.length > 0
      ? totalScore / students.length
      : 0;
  return (
    <div className="container">
        <h1>Quản lý điểm sinh viên</h1>
        <StudentForm onAdd = {handleAddStudent} />
        <div className="filter">
          <h2>Lọc sinh viên</h2>
          <button onClick={() => setFilter("all")}>
              Tất cả
          </button>
          <button onClick={() => setFilter("excellent")}>
              Sinh viên giỏi
          </button>
          <button onClick={() => setFilter("failed")}>
              Sinh viên trượt
          </button>
        </div>
        <div className="statistics">
           <h2>Thống kê</h2>
            <p>
                Tổng số sinh viên: <strong>{students.length}</strong>
            </p>
            <p>
                Điểm trung bình:{" "}
                <strong>{averageScore.toFixed(2)}</strong>
            </p>
        </div>
        <StudentList
                students={filteredStudents}
                onDelete={handleDeleteStudent}
        />
    </div>
  );
}

export default App;