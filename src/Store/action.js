
export default function addFav(data) {
    return {
        type: "SET_FAV",
        payload: data
    }
}

export function delFav(data) {
    return {
        type: "SET_DEL",
        payload: (data)
    }
}