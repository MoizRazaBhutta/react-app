import { MouseEvent, useState } from "react";
// Sending prop to the component
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // we can also use a function like
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items found</p> : null;
  //   };

  // let selectedIndex = 0; // change this variable using click but it can't be changed directly inside jsx as the
  // variable is local so we have to useState
  // React hook which tells react that data can change over time
  const [selectedIndex, setSelectedIndex] = useState(-1); // First element of arr is variable to be updated, second is the setter function
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    // We can either use Fragment from React or <> to wrap
    // <Fragment>
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {/*// To display each item use map  */}
        {items.length === 0 ? (
          <p>No item found</p>
        ) : (
          items.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item); // output
              }}
            >
              {item}
            </li>
          ))
        )}
      </ul>
    </>
    // </Fragment>
  );
}

export default ListGroup;
