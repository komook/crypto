import {cryptoData, cryptoAssets} from '../../data'

export function fakeFetchCrypto() {
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(cryptoData)
        },1)
    })
}

export function FetchAssests() {
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(cryptoAssets)
        },1)
    })
}
