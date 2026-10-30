
function StudentCard({ name, age, course, location }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
      <h2 className="text-xl font-bold text-blue-600 mb-3">
        {name}
      </h2>

      <p className="text-gray-600 mb-2">Age: {age}</p>
      <p className="text-gray-600 mb-2">Course: {course}</p>
      <p className="text-gray-600">Location: {location}</p>
    </div>
  );
}

export default StudentCard;
