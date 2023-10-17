import React from 'react';

function Study(){
    const project = [
        {
            title:'PlannerX StartUp',
            description: "making better course scheduling tool",
            role: "developer"
        },
        {
            title: "C# .net utilization",
            description: "making an app for sport meet",
            role: "developer"
        }
    ];

    return(
        <div className='browser'>
            {project.map((project, index) => (
                <div key={index}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>Role:{project.role}</p>
                </div>
            ))}
        </div>
    );
}

export default Study;