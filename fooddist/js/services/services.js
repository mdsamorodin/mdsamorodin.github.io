const postData = async (url, data) => {
    return await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: data
    })
}

const getData = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`Ошибкаааа, could not fetch ${url}`)
    } else {
        return res
    }
}

export { postData }
export { getData }