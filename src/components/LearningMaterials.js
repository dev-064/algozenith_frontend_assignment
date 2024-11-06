import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function LearningMaterials() {
    return (
        <div className="overflow-hidden max-md:px-5">
            <div className="flex gap-5 max-md:flex-col">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

export default LearningMaterials;