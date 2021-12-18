import React from 'react';

const Form = ( props ) => {
    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        elements
    } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const handleCancel = (event) => {
        event.preventDefault();
        cancel();
    };

    return (
        <div className="">
            <ErrorsDisplay errors={errors} />
            <form onsSubmit={handleSubmit}>
                {elements()}
                <div className="">
                    <button className="button large success" type="submit">{submitButtonText}</button>
                    {cancel ? 
                        <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
                        :
                        null
                    }
                </div>
            </form>
        </div>
    );
}

function ErrorsDisplay ({ errors }) {
    let errorsDisplay = null;

    if (errors && errors.length) {
        errorsDisplay = (
            <div className="validation--errors">
                <h3 className="validation--errors--label"></h3>
                <div className="validation-errors">
                    <ul>
                        {errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ul>
                </div>
            </div>
        );
    };

    return errorsDisplay;
};

export default Form;
