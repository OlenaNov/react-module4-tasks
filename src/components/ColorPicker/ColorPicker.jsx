import React, { useState } from "react";

function ColorPicker({ options }) {

    const [activeOptionIdx, setActiveOptionIdx] = useState(0);

        const { label } = options[activeOptionIdx];

        return (
            <div className="colorPicker">
                <h2 className="colorPicker__title">Color Picker</h2>
                <p>Choose color: {label}</p>
                <div className="colorPicker__box">
                    {options.map(({ label, color }, idx) => (
                        <button 
                        key={label}
                        type="button"
                        className="colorPicker__option"
                        onClick={() => setActiveOptionIdx(idx)}
                        style={{ backgroundColor: color, width: "50px", height: "50px", marginRight: "10px", 
                        boxShadow: idx === activeOptionIdx ? 
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" : 
                        "none",
                    }}></button>
                    ))}
                </div>
            </div>
        );
};

export default ColorPicker;