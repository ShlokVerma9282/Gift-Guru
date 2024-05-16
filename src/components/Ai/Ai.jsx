import React from "react";
import Forms from "./Forms";

const Ai = () => {
  return (
    <div className="flex pt-20">
      <div className="w-1/2 pr-4 ml-10">
        <Forms.PerfectPresent />
      </div>
      <div className="w-1/2 pl-4">
            <div className=" min-h-screen flex justify-center items-center">
                <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
                <Forms.GenderInputForm />
                <Forms.AgeRangeForm />
                <Forms.EventTypeInputForm />
                <Forms.RecipientForm />
                <Forms.CategorySelectionForm />
                <Forms.PriceRangeInput />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Ai;
