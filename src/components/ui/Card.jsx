import React from "react";

const Card = () => {
return (
    <div className="flex justify-between items-start bg-gray-50 p-8 rounded-lg shadow">
        <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Why Hire Me For Your Next Project?
            </h2>
            <p className="mb-6 text-gray-600">
                I’m a specialist in UI/UX Design. My passion is designing & solving
                problems through user experience and research.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Hire me
            </button>
        </div>
        <div className="w-80 p-6 bg-white rounded-lg shadow ml-8">
            <h3 className="mb-4 text-lg font-semibold text-gray-700">My Skills</h3>
            {[
                { name: "React", percent: 100 },
                { name: "CSS", percent: 100 },
                { name: "JavaScript", percent: 50 },
                { name: "Node JS", percent: 100 },
            ].map((skill) => (
                <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-600">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${skill.percent}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default Card;
