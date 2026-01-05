"use client";

//Next
import { useState } from "react";

//Components
import Button from "./Button";
import ExtensionList from "./ExtensionList";

const Main = () => {
  const [allButton, setAllButton] = useState(true);
  const [activeButton, setActiveButton] = useState(false);
  const [inactiveButton, setInactiveButton] = useState(false);

  function changeActiveButton(name: string) {
    if (name === "All") {
      setActiveButton(false);
      setInactiveButton(false);
      setAllButton(true);
    } else if (name === "Active") {
      setAllButton(false);
      setInactiveButton(false);
      setActiveButton(true);
    } else {
      setAllButton(false);
      setActiveButton(false);
      setInactiveButton(true);
    }
  }

  return (
    <div className="w-[60%] m-auto">
      <div className="flex flex-row justify-between mt-20 items-center">
        <h1 className="font-semibold text-4xl">Extensions List</h1>
        <div className="font-semibold text-2xl flex flex-row gap-3 opacity-80">
          <Button
            text="All"
            className={allButton && "active"}
            funct={changeActiveButton}
          />
          <Button
            text="Active"
            className={activeButton && "active"}
            funct={changeActiveButton}
          />
          <Button
            text="Inactive"
            className={inactiveButton && "active"}
            funct={changeActiveButton}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-10 gap-4 md:grid-cols-3">
        <ExtensionList
          allButton={allButton}
          activeButton={activeButton}
          inactiveButton={inactiveButton}
        />
      </div>
    </div>
  );
};

export default Main;
