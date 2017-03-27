export async function get(route) {
    return fetch(`${window.location.origin}${route}`)
        .then((response => response.json()));
}

export async function put(route, data) {
    return fetch(
        `${window.location.origin}${route}`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        },
    );
}

export async function deleteRecord(recordType, id) {
    return fetch(
        `${window.location.origin}/api/${recordType}s?id=${id}`,
        {
            method: 'DELETE',
        },
    );
}
