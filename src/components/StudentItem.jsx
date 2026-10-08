const StudentItem = ({ student, onDelete }) => {
    const { id, name, score, class: className } = student;

    return (
        <div className="student-item">
            <p>
                <strong>ID:</strong> {id}
            </p>

            <p>
                <strong>Họ tên:</strong> {name}
            </p>

            <p>
                <strong>Điểm:</strong> {score}
            </p>

            <p>
                <strong>Lớp:</strong> {className}
            </p>

            <button
                className="delete-button"
                onClick={() => onDelete(id)}
            >
                Xóa
            </button>
        </div>
    );
};

export default StudentItem;