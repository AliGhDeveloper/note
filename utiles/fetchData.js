export const getData = async(url, token) => {
    
    const response = await fetch(process.env.BASE_URL + url, {
        headers : {
            'authorization' : token
        }
    });

    const result = response.json();

    return result
};

export const postData = async(url, data, token) => {
    
    const response = await fetch(process.env.BASE_URL + url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json',
            'authorization' : token
        }
    });

    const result = response.json();

    return result
};

export const putData = async(url, data, token) => {
    
    const response = await fetch(process.env.BASE_URL + url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json',
            'authorization' : token
        }
    });

    const result = response.json();

    return result
}

export const deleteData = async(url, token) => {
    
    const response = await fetch(process.env.BASE_URL + url, {
        method: 'DELETE',
        headers : {
            'authorization' : token
        }
    });

    const result = response.json();

    return result
}