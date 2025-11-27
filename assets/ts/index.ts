interface Student {
  name: string;
  age: number;
  grade: number;
  address: string;
  gender: "M" | "F";
}

const students: Student[] = [
  { name: "Pandu", age: 21, grade: 8.5, address: "Hyderabad", gender: "M" },
  { name: "Siri", age: 22, grade: 9.1, address: "Bangalore", gender: "F" },
  { name: "Rahul", age: 23, grade: 7.8, address: "Hyderabad", gender: "M" },
  { name: "Meera", age: 20, grade: 8.2, address: "Bangalore", gender: "F" },
  { name: "Teja", age: 24, grade: 6.9, address: "Hyderabad", gender: "M" },
  { name: "Latha", age: 19, grade: 9.0, address: "Bangalore", gender: "F" },
  { name: "Kiran", age: 22, grade: 7.5, address: "Hyderabad", gender: "M" },
  { name: "Divya", age: 21, grade: 8.8, address: "Bangalore", gender: "F" },
  { name: "Arjun", age: 25, grade: 7.2, address: "Hyderabad", gender: "M" },
  { name: "Neha", age: 20, grade: 8.9, address: "Bangalore", gender: "F" },
  { name: "Suman", age: 23, grade: 7.0, address: "Hyderabad", gender: "M" },
  { name: "Priya", age: 22, grade: 9.3, address: "Bangalore", gender: "F" },
];

const grid = document.getElementById("grid") as HTMLElement;
const search = document.getElementById("search") as HTMLInputElement | null;

if (!grid || !search) {
  throw new Error("HTML elements not found");
}

function showAll(): void {
  grid.innerHTML = "";

  students.forEach((s) => {
    const card = `
      <div class="card">
        <h3>${s.name}</h3>
        <p>Age: ${s.age}</p>
        <p>Grade: ${s.grade}</p>
        <p>Address: ${s.address}</p>
        <p>Gender: ${s.gender}</p>
      </div>
    `;

    grid.innerHTML += card;
  });
}

function searchStudent(text: string): void {
  grid.innerHTML = "";
  let found = false;

  const numValue = Number(text);

  students.forEach((s) => {
    const nameMatch = s.name.toLowerCase().includes(text.toLowerCase());
    const addressMatch = s.address.toLowerCase().includes(text.toLowerCase());
    const gradeMatch = !isNaN(numValue) && s.grade === numValue;

    if (nameMatch || addressMatch || gradeMatch) {
      found = true;

      const card = `
        <div class="card">
          <h3>${s.name}</h3>
          <p>Age: ${s.age}</p>
          <p>Grade: ${s.grade}</p>
          <p>Address: ${s.address}</p>
          <p>Gender: ${s.gender}</p>
        </div>
      `;

      grid.innerHTML += card;
    }
  });

  if (!found) {
    grid.innerHTML = "<p>No Name found</p>";
  }
}

search.addEventListener("input", () => {
  const text = search.value.trim();

  if (text === "") {
    showAll();
  } else {
    searchStudent(text);
  }
});

showAll();
