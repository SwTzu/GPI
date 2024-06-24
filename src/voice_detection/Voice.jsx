<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { validateCommand } from '../voice_detection/commands'; // Importa el archivo de validación

function Voice({ onBuyChampion }) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [error, setError] = useState(false);
    const [recognizedCommand, setRecognizedCommand] = useState(false);
    const timeoutRef = useRef(null);
=======
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

function Voice() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [hasFocus, setHasFocus] = useState(true);
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        const handleKeyDown = (event) => {
<<<<<<< HEAD
=======
            // Ctrl + Shift + S para alternar entre iniciar y detener
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58
            if (event.ctrlKey && event.shiftKey && event.key === 'S') {
                if (listening) {
                    stopListening();
                } else {
                    startListening();
                }
            }
        };

<<<<<<< HEAD
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [listening]);

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (transcript) {
            timeoutRef.current = setTimeout(() => {
                handleCommand(transcript);
            }, 3000); // 3 seconds
        }

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [transcript]);

    const handleCommand = (command) => {
        const result = validateCommand(command);
        if (result.success) {
            setRecognizedCommand(true);
            onBuyChampion(result.corrected_command);
            resetTranscript();
            setTimeout(() => {
                setRecognizedCommand(false);
            }, 3000);
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
                resetTranscript();
            }, 3000);
        }
    };

    const startListening = () => {
        resetTranscript();
        SpeechRecognition.startListening({ continuous: true });
        setShowOverlay(true);
=======
        const handleVisibilityChange = () => {
            setHasFocus(!document.hidden);
        };

        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [listening]);

    const startListening = () => {
        resetTranscript(); // Resetea el transcript antes de comenzar a escuchar
        SpeechRecognition.startListening({ continuous: true });
        setShowOverlay(true); // Mostrar la interfaz de pantalla completa
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58
        notify('Voice recognition started');
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
<<<<<<< HEAD
        setShowOverlay(false);
=======
        setShowOverlay(false); // Ocultar la interfaz de pantalla completa
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58
        notify('Voice recognition stopped');
    };

    const notify = (message) => {
        if (Notification.permission === 'granted') {
            new Notification(message);
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification(message);
                }
            });
        }
    };

    if (!browserSupportsSpeechRecognition) {
        return <div>Tu navegador no soporta reconocimiento de voz.</div>;
    }

    return (
        <div>
            {showOverlay && (
<<<<<<< HEAD
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white flex flex-col justify-center items-center z-50 text-2xl text-center backdrop-blur-md">
=======
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white flex flex-col justify-center items-center z-50 text-2xl text-center backdrop-blur-md ">
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58
                    <div className="relative">
                        <button
                            id="speech"
                            className="bg-primary text-white rounded-full w-36 h-36 text-3xl flex items-center justify-center relative"
                            onClick={listening ? stopListening : startListening}
                        >
                            <FontAwesomeIcon icon={faMicrophone} />
                            {listening && <div className="pulse-ring absolute"></div>}
                        </button>
                    </div>

                    <h1 className="text-4xl m-4">Escuchando . . .</h1>
<<<<<<< HEAD
                    <p className={`border border-zinc-900 py-2 px-2 rounded transition-all duration-300 ${error ? 'border-2 border-red-500' : 'text-white'} ${recognizedCommand ? 'border-2 border-green-500 p-1' : ''}`}>
                        {transcript || 'ㅤ'}
                    </p>
=======
                    <p>{transcript || 'ㅤ'}</p>
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58
                </div>
            )}
        </div>
    );
}

export default Voice;
