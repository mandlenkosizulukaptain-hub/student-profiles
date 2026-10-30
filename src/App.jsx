

import StudentCard from "./Components/Card";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Student Profiles
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        <StudentCard
          name="Mandlenkosi Zulu"
          age={33}
          course="Software Development"
          location="Lupane"
        />

        <StudentCard
          name="Hannah Zulu"
          age={24}
          course="Web Development"
          location="Gwaii"
        />
      </div>
    </div>
  );
}

export default App;
