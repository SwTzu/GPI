import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

function Voice() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [hasFocus, setHasFocus] = useState(true);

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Ctrl + Shift + S para alternar entre iniciar y detener
            if (event.ctrlKey && event.shiftKey && event.key === 'S') {
                if (listening) {
                    stopListening();
                } else {
                    startListening();
                }
            }
        };

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
        notify('Voice recognition started');
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setShowOverlay(false); // Ocultar la interfaz de pantalla completa
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
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white flex flex-col justify-center items-center z-50 text-2xl text-center backdrop-blur-md ">
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
                    <p>{transcript || 'ㅤ'}</p>
                </div>
            )}
        </div>
    );
}

export default Voice;
