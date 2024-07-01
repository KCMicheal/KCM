import { useState } from 'react';

const useContactForm = () => {
    const initialState = {
        email: '',
        subject: '',
        message: '',
    };

    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        setValues(prevState => ({
           ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const resetForm = () => setValues(initialState);

    return { values, handleChange, resetForm };
};

export default useContactForm;
