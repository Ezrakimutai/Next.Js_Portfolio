import React, { ReactNode } from "react";

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ?
        "text-white border-b border-blue-900"
        : "text-[#ADB&BE]";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );

};

export default TabButton;