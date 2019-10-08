import { FIELD_IS_REQUIRED } from 'src/constants/messages/errors';
import { INoteFormValues } from './NoteForm';

interface INoteFormErrors {
    [key: string]: string
}
const noteFormValidator = (values: INoteFormValues): INoteFormErrors  => {
    let errors: INoteFormErrors = {};
    const { text } = values;

    if (!text || text.length === 0) {
        errors.text = FIELD_IS_REQUIRED
    }

    return errors;
};

export { noteFormValidator };
