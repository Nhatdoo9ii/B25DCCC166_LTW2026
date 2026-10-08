import { useState } from "react";

const StudentForm = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const [className, setClassName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            name.trim() === "" ||
            score === "" ||
            className.trim() === ""
        ) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const numberScore = Number(score);

        if (numberScore < 0 || numberScore > 10) {
            alert("Điểm phải nằm trong khoảng từ 0 đến 10!");
            return;
        }

        const newStudent = {
            id: Date.now(),
            name: name.trim(),
            score: numberScore,
            class: className.trim()
        };

        onAdd(newStudent);

        setName("");
        setScore("");
        setClassName("");
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <h2>Thêm sinh viên</h2>

            <input
                type="text"
                placeholder="Họ tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Điểm"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                step="0.1"
            />

            <input
                type="text"
                placeholder="Lớp"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
            />

            <button type="submit">
                Thêm
            </button>
        </form>
    );
};

export default StudentForm;