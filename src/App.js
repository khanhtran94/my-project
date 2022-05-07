import React from "react";
import faker from "faker";
import { FixedSizeList } from "react-window";
import GitHubUser from "./componets/GitHubUser"

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: "https://picsum.photos/50"
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
      {data.map((item, i) => (
        <li>
          <div style={{ display: "flex" }}>
            <img src={item.avatar} alt={item.name} width={50} />
            <p>
              {item.name} - {item.email}
            </p>
          </div>
        </li>
      ))}
    </ul >
  );
}

export default function App() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>
         {index}: {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );
  return (
    <>
      <GitHubUser login ="moontahoe" />
    </>
  );
}
