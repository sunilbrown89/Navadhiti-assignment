const searchInput = document.querySelector(".search-input");
const suggestions = document.querySelector(".suggestions");

const fields = [
  {
    label: "Date of Birth (YYYY-MM-DD)",
    key: "birthday",
    isRequired: true,
    order: 1,
    isReadonly: false,
    type: "date",
  },
  {
    label: "Gestational Age",
    key: "gestationalAge",
    isRequired: true,
    order: 3,
    unit: "weeks",
    isReadonly: false,
    type: "number",
  },
  {
    label: "Sex",
    items: [
      {
        value: "male",
        text: "Male",
      },
      {
        value: "female",
        text: "Female",
      },
    ],
    key: "sex",
    isRequired: true,
    order: 4,
    isReadonly: false,
    type: "dropdown",
  },
  {
    label: "Height",
    key: "height",
    isRequired: true,
    order: 5,
    unit: "cm",
    isReadonly: false,
    type: "number",
  },
  {
    label: "Weight",
    key: "weight",
    isRequired: true,
    order: 6,
    unit: "kg",
    isReadonly: false,
    type: "number",
  },
  {
    label: "BMI",
    key: "bmi",
    order: 11,
    unit: "kg/m²",
    isReadonly: true,
    type: "number",
  },
];

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();
  suggestions.innerHTML = "";
  if (searchValue.length >= 1) {
    const matches = fields.filter((field) => {
      const labelMatch = field.label.toLowerCase().includes(searchValue);
      const typeMatch = field.type.toLowerCase().includes(searchValue);
      return labelMatch || typeMatch;
    });
    matches.forEach((match) => {
      const li = document.createElement("li");
      li.innerText = match.label;
      li.addEventListener("click", () => {
        console.log(match.key);
        searchInput.value = match.key;
      });
      suggestions.appendChild(li);
    });
  }
});