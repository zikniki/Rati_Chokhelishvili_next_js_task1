import React, { useState } from 'react';
import jobs from '../jobs.json';
import Image from 'next/image';

export default function JobList() {
    const [selectedSkills, setSelectedSkills] = useState([]);

    const handleSkillClick = (skill) => {
        setSelectedSkills(prevSkills =>
            prevSkills.includes(skill) ? prevSkills : [...prevSkills, skill]
        );
    };

    const handleSkillRemove = (skill) => {
        setSelectedSkills(prevSkills =>
            prevSkills.filter(s => s !== skill)
        );
    };

    const handleClearSkills = () => {
        setSelectedSkills([]);
    };

    const filteredJobs = selectedSkills.length > 0
        ? jobs.filter(job => selectedSkills.every(skill => job.skills.includes(skill)))
        : jobs;

    return (
        <div className="space-y-4 w-[100%] flex flex-col items-center justify-center">
            {selectedSkills.length > 0 && (
                <div className="bg-white p-6 rounded shadow-md space-y-2 w-[80%] flex flex-row justify-between items-center">
                    <div className='flex flex-row flex-wrap gap-2'>
                        {selectedSkills.map((skill, index) => (
                            <div key={index} className='flex flex-row items-center'>
                                <p className="rounded-l-[4px] text-[#5CA5A5] text-[16px] leading-[24px] tracking-[-0.123px] px-3"
                                    style={{ backgroundColor: 'rgba(92, 165, 165, 0.1)' }}>{skill}</p>
                                <button
                                    onClick={() => handleSkillRemove(skill)}
                                    className="rounded-r-[4px] text-white bg-[#5CA5A5] text-[16px] leading-[24px] tracking-[-0.123px] px-3 hover:bg-[#000000] hover:text-white"
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                    <div
                        className='text-[17px] text-[#5CA5A5] cursor-pointer hover:text-[#000000] flex items-center'
                        onClick={handleClearSkills}
                    >
                        Clear
                    </div>
                </div>
            )}
            {filteredJobs.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded shadow-md space-y-2 w-[80%] flex flex-row justify-between items-center">
                    <div className='flex flex-row gap-4'>
                        <div>
                            <Image
                                src={`/icon${index + 1}.png`}
                                alt="icon"
                                width={88}
                                height={88}
                            />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <h3 className="text-sm font-bold text-[#5CA5A5]">{job.company}</h3>
                            <p className="text-[#2B3939] font-bold hover:text-[#5CA5A5] cursor-pointer">{job.position}</p>
                            <div className="text-sm text-[#7C8F8F]">
                                <span>{job.level} • {job.type} • {job.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {job.skills.map((skill, skillIndex) => (
                            <button
                                key={skillIndex}
                                onClick={() => handleSkillClick(skill)}
                                className="rounded-[4px] text-[#5CA5A5] text-[16px] leading-[24px] tracking-[-0.123px] px-3 hover:bg-[#5CA5A5] hover:text-white"
                                style={{ backgroundColor: 'rgba(92, 165, 165, 0.1)' }}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}