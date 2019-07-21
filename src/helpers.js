const validate = todo  => {
    let errors = {}

    if(todo.name.length === 0) {
        errors.name = 'Insert todo text'
    }
    if(todo.priority === 'null') {
        errors.priority = 'Select priority'
    }

    return errors;
}


export { validate }