import React from "react";
import faker from "faker";

const bigList = [...Array(100)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 }
];
function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function UserComponent({ data = [] }) {
  console.log(data);
  return (
    <ul>
      <li>
      {data.map((item, i) => {
        <p>{data.length}</p>
      })}
      </li>
      <p>{data.length}</p>
    </ul>
  );
}

export default function App() {
  const renderItem = item => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );

  return (
    <>
      <UserComponent data={bigList} />
    </>
  );
}
