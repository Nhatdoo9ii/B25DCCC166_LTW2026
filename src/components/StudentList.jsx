import StudentItem from "./StudentItem";

const StudentList = ({ students, onDelete }) => {
    return (
        <div>
            <h2>Danh sách sinh viên</h2>

            {students.length === 0 ? (
                <p>Không có sinh viên nào.</p>
            ) : (
                students.map((student) => (
                    <StudentItem
                        key={student.id}
                        student={student}
                        onDelete={onDelete}
                    />
                ))
            )}
        </div>
    );
};

export default StudentList;