import React from 'react';

export default function ImageModal({ modalImage, closeModal }) {
    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
            onClick={closeModal}
        >
            <div className="max-w-lg w-full p-4 bg-white rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                <img
                    className="w-full"
                    src={modalImage}
                    alt="Modal"
                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '100vh' }}
                />
                <button
                    className="absolute top-4 right-4 text-xl text-gray-700 hover:text-gray-900"
                    onClick={closeModal}
                >
                    X
                </button>
            </div>
        </div>
    );
}
