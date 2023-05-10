import React, { createContext, useContext } from "react";

const Store = createContext({
  text: "",
});

export function Parent(props: any) {
  const obj = { text: "text" };
  return <Store.Provider value={obj}>{props.children}</Store.Provider>;
}

export function Child() {
  const hook = useContext(Store);
  return <div>{hook.text}</div>;
}
